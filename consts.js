let todaysDate = new Date().toLocaleDateString();
let confirmedCasesUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
//   'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv';
let confirmedDeathsUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';
  // 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv';
let confirmedRecoveriesUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv';
  // 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv';
let confirmedCases = `covid19-Cases-${todaysDate}.csv`;
let confirmedDeaths = `covid19-Deaths-${todaysDate}.csv`;
let confirmedRecoveries = `covid19-Recoveries-${todaysDate}.csv`;

module.exports = {
  confirmedCasesUrl,
  confirmedDeathsUrl,
  confirmedRecoveriesUrl,
  confirmedCases,
  confirmedDeaths,
  confirmedRecoveries
};
