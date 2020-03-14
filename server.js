const express = require('express');
const csv = require('csvtojson');
var schedule = require('node-schedule');
let { download } = require('./utils');
const app = express();
const port = 3000;

let {
  confirmedCasesUrl,
  confirmedDeathsUrl,
  confirmedRecoveriesUrl,
  confirmedCases,
  confirmedDeaths,
  confirmedRecoveries
} = require('./consts');

var job = schedule.scheduleJob('01 10 * * *', function() {
  console.log('Fetching new data for confirmed Covid-19 cases.');
  download(confirmedCasesUrl, confirmedCases, data => {});
  download(confirmedDeathsUrl, confirmedDeaths, data => {});
  download(confirmedRecoveriesUrl, confirmedRecoveries, data => {});
});

// let csvData = (async fileName => {
//   var jsons = await csv().fromFile(fileName);
//   // console.log(jsons);
//   return jsons;
// })().catch(err => {
//   console.log(err);
// });

let csvData = async fileName => {
  var jsons = await csv().fromFile(fileName);
  return jsons;
};

app.get('/cases', async (req, res) => {
  const data = await csvData(confirmedCases);
  res.send(data);
});
app.get('/deaths', async (req, res) => {
  const data = await csvData(confirmedDeaths);
  res.send(data);
});
app.get('/recoveries', async (req, res) => {
  const data = await csvData(confirmedRecoveries);
  res.send(data);
});
app.listen(port, () =>
  console.log(`Application listening on port ${port}.
Covid-19 Confirmed Cases data served on port ${port}/cases.
Covid-19 Confirmed Deaths data served on port ${port}/deaths.
Covid-19 Confirmed Recoveries data served on port ${port}/recoveries.`)
);
