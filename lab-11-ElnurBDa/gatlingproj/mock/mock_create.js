const fs = require('fs');

const createMockData = (count, filename) => {
  const stream = fs.createWriteStream(filename);
  stream.write(`email,password\n`);
  for (let i = 0; i < count; i++) {
    stream.write(`user_${count}_${i}@example.com,password${i}\n`);
  }
  stream.end();
};

// Generate mock data
createMockData(1000, 'mock_data_1000.csv');
createMockData(10000, 'mock_data_10000.csv');
createMockData(100000, 'mock_data_100000.csv');

