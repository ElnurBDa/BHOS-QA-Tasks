const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const cities = [
  { name: 'london', lat: 51.5074, long: -0.1278 },
  { name: 'newyork', lat: 40.7128, long: -74.0060 },
  { name: 'paris', lat: 48.8566, long: 2.3522 },
  { name: 'tokyo', lat: 35.6762, long: 139.6503 },
  { name: 'sydney', lat: -33.8688, long: 151.2093 }
];

const generateMockData = (size) => {
  const data = [];
  
  for (let i = 0; i < size; i++) {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const name = `${city.name}${Math.floor(1000 + Math.random() * 9000)}df`;
    const address_line = `Street ${Math.floor(1 + Math.random() * 100)}, Blvd`;
    const lat = city.lat + (Math.random() * 0.1 - 0.05); // small variation
    const long = city.long + (Math.random() * 0.1 - 0.05); // small variation

    data.push({
      id: uuidv4(),
      name,
      address_line,
      lat,
      long
    });
  }

  return data;
};

const mockData = generateMockData(100000);

// Write data to JSON file
fs.writeFileSync('./data/mockData.json', JSON.stringify(mockData, null, 2), 'utf-8');
console.log('Mock data generated and saved to mockData.json');

