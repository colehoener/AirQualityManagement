const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'aqms',
  port: 5432,
});

// function getMean(start,end)
const getMean = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }