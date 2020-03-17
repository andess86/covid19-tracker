const { getCsvFromGithub } = require('../utils');
let {
  confirmedCasesUrl,
  confirmedDeathsUrl,
  confirmedRecoveriesUrl
  // confirmedCases,
  // confirmedDeaths,
  // confirmedRecoveries
} = require('../consts');

exports.getStartPage = async (req, res, next) => {
  data = await getCsvFromGithub(confirmedCasesUrl);
  let arrOfNewObjects = [];
  Object.values(data).map(data => {
    let newObject = {};
    newObject.lat = Number(data.Lat);
    newObject.long = Number(data.Long);
    newObject.state = data['Province/State'];
    newObject.country = data['Country/Region'];
    delete data.Lat;
    delete data.Long;
    delete data['Province/State'];
    delete data['Country/Region'];
    newObject.timeSeries = [];
    // Parse remaining object values to Numbers
    Object.keys(data).forEach(function(el) {
      data[el] = parseInt(data[el]);
    });
    for (let [key, value] of Object.entries(data)) {
      newObject.timeSeries.push({ x: key, y: value });
    }
    arrOfNewObjects.push(newObject);
  });
  console.table(arrOfNewObjects);
  res.render('start', { arrOfNewObjects });
};

exports.getConfirmedCases = async (req, res, next) => {
  data = await getCsvFromGithub(confirmedCasesUrl);
  let arrOfNewObjects = [];
  Object.values(data).map(data => {
    let newObject = {};
    newObject.lat = Number(data.Lat);
    newObject.long = Number(data.Long);
    newObject.state = data['Province/State'];
    newObject.country = data['Country/Region'];
    delete data.Lat;
    delete data.Long;
    delete data['Province/State'];
    delete data['Country/Region'];
    newObject.timeSeries = [];
    // Parse remaining object values to Numbers
    Object.keys(data).forEach(function(el) {
      data[el] = parseInt(data[el]);
    });
    for (let [key, value] of Object.entries(data)) {
      newObject.timeSeries.push({ x: key, y: value });
    }
    arrOfNewObjects.push(newObject);
  });
  console.table(arrOfNewObjects);
  res.render('start', { arrOfNewObjects });
};

exports.getConfirmedDeaths = async (req, res, next) => {
  data = await getCsvFromGithub(confirmedDeathsUrl);
  let arrOfNewObjects = [];
  Object.values(data).map(data => {
    let newObject = {};
    newObject.lat = Number(data.Lat);
    newObject.long = Number(data.Long);
    newObject.state = data['Province/State'];
    newObject.country = data['Country/Region'];
    delete data.Lat;
    delete data.Long;
    delete data['Province/State'];
    delete data['Country/Region'];
    newObject.timeSeries = [];
    // Parse remaining object values to Numbers
    Object.keys(data).forEach(function(el) {
      data[el] = parseInt(data[el]);
    });
    for (let [key, value] of Object.entries(data)) {
      newObject.timeSeries.push({ x: key, y: value });
    }
    arrOfNewObjects.push(newObject);
  });
  console.table(arrOfNewObjects);
  res.render('deaths', { arrOfNewObjects });
};

exports.getConfirmedRecoveries = async (req, res, next) => {
  data = await getCsvFromGithub(confirmedRecoveriesUrl);
  let arrOfNewObjects = [];
  Object.values(data).map(data => {
    let newObject = {};
    newObject.lat = Number(data.Lat);
    newObject.long = Number(data.Long);
    newObject.state = data['Province/State'];
    newObject.country = data['Country/Region'];
    delete data.Lat;
    delete data.Long;
    delete data['Province/State'];
    delete data['Country/Region'];
    newObject.timeSeries = [];
    // Parse remaining object values to Numbers
    Object.keys(data).forEach(function(el) {
      data[el] = parseInt(data[el]);
    });
    for (let [key, value] of Object.entries(data)) {
      newObject.timeSeries.push({ x: key, y: value });
    }
    arrOfNewObjects.push(newObject);
  });
  console.table(arrOfNewObjects);
  res.render('recoveries', { arrOfNewObjects });
};
