import express from 'express';
import configureRoutes from './startup/routes';

const app = express();

configureRoutes(app);

const port: number = parseInt(process.env.APP_PORT || '5000', 10);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export default app;
