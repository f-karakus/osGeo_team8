const promise = require('bluebird');
const CONFIG = require('./appConfig');
const pgp = require('pg-promise')(options);
const config ={
  connectionString: CONFIG.connectionString,
  max:30,
  ssl:{rejectUnauthorized: false}
};
let DATABASE_PGB = pgp(config);

module.exports = {
       getAllLocations: getAllLocations
};

var options = {
    promiseLib: promise
};

function getAllLocations(cb) {
      DATABASE_PGB.any('SELECT ST_X(park_loc) as longitude, ST_Y(park_loc) as latitude from park_ankara')
      .then(function (data) {
         cb(null, data);})
       .catch(function (err) {
          cb(err)});
}