const request = require('request');
const express = require('express');
const csv = require('csvtojson');
// var schedule = require('node-schedule');
// let { download } = require('./utils');
const app = express();
const port = process.env.PORT || 3000;

let {
  confirmedCasesUrl,
  confirmedDeathsUrl,
  confirmedRecoveriesUrl,
  // confirmedCases,
  // confirmedDeaths,
  // confirmedRecoveries
} = require('./consts');


//TODO - store in mongoDB atlas / aws dynamo
// var job = schedule.scheduleJob('* 12 * * *', function() {
//   console.log('Fetching new data for confirmed Covid-19 cases.');
//   download(confirmedCasesUrl, confirmedCases, data => {});
//   download(confirmedDeathsUrl, confirmedDeaths, data => {});
//   download(confirmedRecoveriesUrl, confirmedRecoveries, data => {});
// });

let getCsvFromGithub = async file => {
  var jsons = await csv().fromStream(request.get(file));
  return jsons;
};

app.get('/cases', async (req, res) => {
  res.send(await getCsvFromGithub(confirmedCasesUrl));
});

app.get('/deaths', async (req, res) => {
  res.send(await getCsvFromGithub(confirmedDeathsUrl));
});

app.get('/recoveries', async (req, res) => {
  res.send(await getCsvFromGithub(confirmedRecoveriesUrl));
});

app.listen(port, () =>
  console.log(`Application listening on port ${port}.
Covid-19 Confirmed Cases data served on port ${port}/cases.
Covid-19 Confirmed Deaths data served on port ${port}/deaths.
Covid-19 Confirmed Recoveries data served on port ${port}/recoveries.`)
);
