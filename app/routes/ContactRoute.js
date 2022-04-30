const express = require('express')

// controller
const ContactController = require('../controllers/ContactController')
const router = express.Router();

router
  .get('/', ContactController.getAllContacts)
  .get('/:id', ContactController.getContactById)
  .post('/', ContactController.createContact)
  .delete('/:id', ContactController.DeleteContactById)

module.exports = router