const express = require('express');
const bodyParser = require('body-parser');
const MediaController = require('./MediaController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Route for adding a post
app.post('/post', async (req, res) => {
  const { title, content } = req.body;
  try {
    await MediaController.addPost(title, content);
    res.status(201).send('Post added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route for adding a post with reference
app.post('/postwithref', async (req, res) => {
  const { title, content, referenceLinkURL } = req.body;
  try {
    await MediaController.addPostWithReference(title, content, referenceLinkURL);
    res.status(201).send('Post with reference added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route for adding a post and reference
app.post('/postandref', async (req, res) => {
  const { title, content, referenceLinkURL } = req.body;
  try {
    await MediaController.addPostAndReference(title, content, referenceLinkURL);
    res.status(201).send('Post and reference added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

