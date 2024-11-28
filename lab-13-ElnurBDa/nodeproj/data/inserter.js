const fs = require('fs');
const pool = require('../db/db');

const insertData = async () => {
  const data = JSON.parse(fs.readFileSync('./data/mockData.json'));
  
  for (let i = 0; i < data.length; i++) {
    const { name, address_line, lat, long } = data[i];
    await pool.query(
      'INSERT INTO address_table (name, address_line, lat, long) VALUES ($1, $2, $3, $4)',
      [name, address_line, lat, long]
    );
  }
  console.log('Data inserted');
};

insertData();

