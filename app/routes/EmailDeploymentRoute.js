import express from 'express';

// controller
import EmailDeploymentController from '../controllers/EmailDeploymentController';

const router = express.Router();

router
  .get('/:id', EmailDeploymentController.getDeployemntById)
  .post('/', EmailDeploymentController.createDeployment)
  .delete('/:id', EmailDeploymentController.DeleteDeployemntById)

export default router;