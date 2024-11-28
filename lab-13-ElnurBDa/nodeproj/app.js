const express = require('express');
const app = express();
const addressRoutes = require('./routes/addressRoutes');

app.use(express.urlencoded({ extended: true }));

app.use('/address', addressRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

