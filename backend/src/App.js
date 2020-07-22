import express from 'express';
import routes from './Routes';
import database from './Database';

class Configure {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.app.database = database;
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", routes);
  }
}

export default async () => {
  const { app } = new Configure();
  await app.database.connect();

  return app;
};
