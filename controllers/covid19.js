const csv = require('csvtojson');
const request = require('request');

let {
  confirmedCasesUrl,
  confirmedDeathsUrl,
  confirmedRecoveriesUrl,
  // confirmedCases,
  // confirmedDeaths,
  // confirmedRecoveries
} = require('../consts');

let getCsvFromGithub = async file => {
  var jsons = await csv().fromStream(request.get(file));
  return jsons;
};

exports.getConfirmedCases = async (req, res, next) => {
  res.send(await getCsvFromGithub(confirmedCasesUrl));
};

exports.getConfirmedDeaths = async (req, res, next) => {
  res.send(await getCsvFromGithub(confirmedDeathsUrl));
};

exports.getConfirmedRecoveries = async (req, res, next) => {
  res.send(await getCsvFromGithub(confirmedRecoveriesUrl));
};