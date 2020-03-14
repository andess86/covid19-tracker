const express = require('express');
const csv = require('csvtojson');
var schedule = require('node-schedule');

let { download } = require('./utils');

const app = express();
const port = 3000;

var url =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv';
var dest = 'covid19.csv';


var job = schedule.scheduleJob('01 10 * * *', function(){
  console.log('Fetching new data for confirmed Covid-19 cases.');
  download(url, dest, data => {});
});

let csvData = (async () => {
  var jsons = await csv().fromFile(dest);
  // console.log(jsons);
  return jsons;
})().catch(err => {
  console.log(err);
});

app.get('/data', async (req, res) => {
  const data = await csvData;
  res.send(data);
});
app.listen(port, () =>
  console.log(`Application listening on port ${port}.
Covid-19 data served on port ${port}/data.`)
);
