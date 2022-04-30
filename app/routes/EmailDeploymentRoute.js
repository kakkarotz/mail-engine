const express = require('express')

// controller
const EmailDeploymentController = require('../controllers/EmailDeploymentController')
const router = express.Router();

router
  .get('/:id', EmailDeploymentController.getDeployemntById)
  .post('/', EmailDeploymentController.createDeployment)
  .delete('/:id', EmailDeploymentController.DeleteDeployemntById)

module.exports = router;