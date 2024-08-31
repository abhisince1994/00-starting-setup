const express = require('express');
const contactusController = require('../controllers/contactusController');

const router = express.Router();

// Get route to display the contact form
router.get('/', contactusController.getContactUs);

// POST route to handle form submission
router.post('/', contactusController.postContactUs);

module.exports = router;
