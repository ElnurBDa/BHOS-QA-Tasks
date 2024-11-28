const { Pool } = require('pg');

// Configure the PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'the_db',
  password: 'password',
  port: 5432
});

class MediaController {
  // Method to add a post
  async addPost(title, content) {
    const query = `INSERT INTO posts_table (title, content) VALUES ($1, $2)`;
    await pool.query(query, [title, content]);
  }

  // Method to add a post with reference link
  async addPostWithReference(title, content, referenceLinkURL) {
    const query = `INSERT INTO posts_table_2 (title, content, reference_link_url) VALUES ($1, $2, $3)`;
    await pool.query(query, [title, content, referenceLinkURL]);
  }

  // Method to add a post and reference, storing reference in a separate table
  async addPostAndReference(title, content, referenceLinkURL) {
    // Insert reference into reference_table_3
    const referenceQuery = `INSERT INTO reference_table_3 (link) VALUES ($1) RETURNING id`;
    const referenceResult = await pool.query(referenceQuery, [referenceLinkURL]);
    const referenceID = referenceResult.rows[0].id;

    // Insert post into posts_table_3 with referenceID
    const postQuery = `INSERT INTO posts_table_3 (title, content, reference_id) VALUES ($1, $2, $3)`;
    await pool.query(postQuery, [title, content, referenceID]);
  }
}

module.exports = new MediaController();

