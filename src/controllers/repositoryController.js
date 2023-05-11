import * as repositoryServices from '../services/repositoryServices.js';

/* Obtener todo los repositorios */
export const getRepositories = async (req, res) => {
  const repositories = await repositoryServices.getRepositories(req, res);
  res.json(repositories);
};

