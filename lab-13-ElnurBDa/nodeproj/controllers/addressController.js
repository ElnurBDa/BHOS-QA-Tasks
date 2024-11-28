const pool = require('../db/db');

class AddressController {
  async updateAddressByName(req, res) {
    const { name, address } = req.body;
    const query = 'UPDATE address_table SET address_line = $1 WHERE name = $2';
    await pool.query(query, [address, name]);
    res.send('Address updated by name');
  }

  async updateAddressByID(req, res) {
    const { id, address } = req.body;
    const query = 'UPDATE address_table SET address_line = $1 WHERE id = $2';
    await pool.query(query, [address, id]);
    res.send('Address updated by ID');
  }
}

module.exports = new AddressController();

