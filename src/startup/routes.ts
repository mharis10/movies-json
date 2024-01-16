import express from 'express';
import bodyParser from 'body-parser';
import movieRoutes from '../routes/movie.routes';

const configureRoutes = (app: express.Application) => {
  app.use(bodyParser.json());
  app.use('/api', movieRoutes);
};

export default configureRoutes;
