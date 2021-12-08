const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'aqms',
});

const getTotalMean = () => {
    return new Promise(function(resolve, reject) {
      pool.query("SELECT AVG(sensorvalue) AS mean FROM aqms.sensordata", (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }

const getMean = () => {
    return new Promise(function(resolve, reject) {
      const start = parseInt(request.params.start)
      const end = parseInt(request.params.end)
      pool.query("SELECT AVG(sensorvalue) AS mean FROM aqms.sensordata WHERE timemark BETWEEN CAST('$1' AS DATE) AND CAST('$2' AS DATE)",[start, end], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }

const getMedian = () => {
    return new Promise(function(resolve, reject) {
      const start = parse(request.params.start)
      const end = parse(request.params.end)
      pool.query("SELECT sensorvalue AS mean FROM aqms.sensordata WHERE timemark BETWEEN CAST('$1' AS DATE) AND CAST('$2' AS DATE)",[start, end], (error, results) => {
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
      pool.query("SELECT sensorvalue AS mean FROM aqms.sensordata WHERE timemark BETWEEN '$1' AND '$2' AND sensorid = '$3'",[start, end, sensorID], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }

const getSensorLocation = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM aqms.sensors', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }

module.exports = {
  getTotalMean,
  getMean,
  getMedian,
  getSensorData,
  getSensorLocation,
}