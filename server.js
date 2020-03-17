const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// require('plotly')(process.env.PLOTLY_USERNAME, process.env.PLOTLY_API_KEY);

// var schedule = require('node-schedule');
// let { download } = require('./utils');

//TODO - store in mongoDB atlas / aws dynamo
// var job = schedule.scheduleJob('* 12 * * *', function() {
//   console.log('Fetching new data for confirmed Covid-19 cases.');
//   download(confirmedCasesUrl, confirmedCases, data => {});
//   download(confirmedDeathsUrl, confirmedDeaths, data => {});
//   download(confirmedRecoveriesUrl, confirmedRecoveries, data => {});
// });


app.set('view engine', 'ejs');

const covid19routes = require('./routes/covid19');
app.use(covid19routes);

app.listen(port, () =>
  console.log(`Application listening on port ${port}.
Covid-19 Confirmed Cases data served on port ${port}/cases.
Covid-19 Confirmed Deaths data served on port ${port}/deaths.
Covid-19 Confirmed Recoveries data served on port ${port}/recoveries.`)
);
