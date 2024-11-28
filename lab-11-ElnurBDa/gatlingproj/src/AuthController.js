const pool = require('./db');

class AuthController {
  async register(email, password) {
    const query = `INSERT INTO users_table (email, password) VALUES ($1, $2) RETURNING *`;
    const values = [email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = AuthController;

