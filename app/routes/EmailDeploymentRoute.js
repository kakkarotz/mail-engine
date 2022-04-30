import express from 'express';

// controller
import EmailDeploymentController from '../controllers/EmailDeploymentController';

const router = express.Router();

router
  .get('/:id', EmailDeploymentController.getDeployemntById)
  .post('/', user.createDeployment)
  .delete('/:id', user.onDeleteDeployemntById)

export default router;