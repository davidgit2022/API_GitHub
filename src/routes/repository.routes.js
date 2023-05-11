import { Router } from 'express';
import * as repositoryController from '../controllers/repositoryController.js';

const router = Router();

router.get('/', repositoryController.getRepositories);

export default router;
