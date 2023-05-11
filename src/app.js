import express from "express";

import {apiRouter} from './server/index.js'

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola desde el servidor en express')
})

/* Routes */
apiRouter(app);


export default app;
