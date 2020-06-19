import * as express from 'express';
import { createConnection } from 'typeorm';

import 'dotenv/config';
import apiRouter from './routes';
import config from '../../ormconfig.json';

const app = express();

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
