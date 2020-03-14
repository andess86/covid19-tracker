const csv = require('csvtojson');
let { download } = require('./utils');

var url =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv';
var dest = 'covid19.csv';

download(url, dest, data => {});

(async () => {
  var jsons = await csv().fromFile(dest);
  console.log(jsons);
  return jsons;
})().catch(err => {
  console.log(err);
});
