const fs = require('fs');
const request = require('request');

var url =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv';
var dest = 'covid19.csv';

const download = (url, dest, cb) => {
  const file = fs.createWriteStream(dest);
  const sendReq = request.get(url);

  // verify response code
  sendReq.on('response', response => {
    if (response.statusCode !== 200) {
      return cb('Response status was ' + response.statusCode);
    }

    sendReq.pipe(file);
  });

  // close() is async, call cb after close completes
  file.on('finish', () => file.close(cb));

  // check for request errors
  sendReq.on('error', err => {
    fs.unlink(dest);
    return cb(err.message);
  });

  file.on('error', err => {
    // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    return cb(err.message);
  });
};

let data = download(url, dest, data => {});
