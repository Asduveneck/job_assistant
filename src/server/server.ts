import 'dotenv/config';
// import config from '../../ormconfig.ts'; // redo
import 'reflect-metadata';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import { createConnection } from 'typeorm';

import apiRouter from './routes';

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next,
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

const app = express();

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
