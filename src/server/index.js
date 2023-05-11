import express from "express";
import repositoryRouter from '../routes/repository.routes.js';

export function apiRouter(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/repositories', repositoryRouter);
}

