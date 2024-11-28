const express = require('express');
const AddressController = require('../controllers/addressController');
const router = express.Router();

router.post('/updatebyname', AddressController.updateAddressByName);
router.post('/updatebyid', AddressController.updateAddressByID);

module.exports = router;

