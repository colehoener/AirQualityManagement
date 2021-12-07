const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'aqms',
  port: 5432,
});

// function getMean(start,end)
const getMean = (params) => {
    return new Promise(function(resolve, reject) {
      const start = parseInt(request.params.start)
      const end = parseInt(request.params.end)
      pool.query('SELECT AVG(sensorvalue) AS mean FROM sensordata WHERE timemark BETWEEN start AND end',[start], [end], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }

const getMedian = (start, end) => {
    return new Promise(function(resolve, reject) {
      const start = parseInt(request.params.start)
      const end = parseInt(request.params.end)
      pool.query('SELECT sensorvalue AS mean FROM sensordata WHERE timemark BETWEEN start AND end',[start], [end], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }

const getSensorData = (params) => {
    return new Promise(function(resolve, reject) {
      const start = parseInt(request.params.start)
      const end = parseInt(request.params.end)
      const sensorID = parseInt(request.params.sensorID)
      pool.query('SELECT sensorvalue AS mean FROM sensordata WHERE timemark BETWEEN start AND end AND sensorid = sensorID',[start], [end], [sensorID], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }