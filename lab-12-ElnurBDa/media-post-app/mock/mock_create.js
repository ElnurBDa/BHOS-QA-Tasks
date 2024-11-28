const fs = require('fs');

const createMockDataForPost = (count, filename) => {
  const stream = fs.createWriteStream(filename);
  stream.write(`title,content\n`);
  for (let i = 0; i < count; i++) {
    stream.write(`Title ${i},This is the content for post ${i}\n`);
  }
  stream.end();
};

// Generate 10,000 mock posts for '/post'
createMockDataForPost(10000, 'mock_data_post.csv');

const createMockDataForPostWithRef = (count, filename) => {
  const stream = fs.createWriteStream(filename);
  stream.write(`title,content,referenceLinkURL\n`);
  for (let i = 0; i < count; i++) {
    stream.write(`Title ${i},This is the content for post with reference ${i},https://example.com/reference${i}\n`);
  }
  stream.end();
};

// Generate 10,000 mock posts with references for '/postwithref'
createMockDataForPostWithRef(10000, 'mock_data_postwithref.csv');


const createMockDataForPostAndRef = (count, filename) => {
  const stream = fs.createWriteStream(filename);
  stream.write(`title,content,referenceLinkURL\n`);
  for (let i = 0; i < count; i++) {
    stream.write(`Title ${i},This is the content for post with separate reference ${i},https://example-reference.com/link${i}\n`);
  }
  stream.end();
};

// Generate 10,000 mock posts and references for '/postandref'
createMockDataForPostAndRef(10000, 'mock_data_postandref.csv');
