import 'express-async-errors';

import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { BAD_REQUEST } from 'http-status-codes';
import morgan from 'morgan';

// import logger from './utils/Logger';
import { devErrorHandler } from './utils/errorsMiddleware';
import BaseRouter from './utils/router';

// Init express
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

// Add APIs
app.use('/api', BaseRouter);

// Print API errors
app.use(devErrorHandler);

// Export express instance
export default app;

/*
Move the logger over. Set up BaseRouter
See the local index.ts and finish those
Then see if this works!

TODO:

1. Figure out why process.env isn't being read anymore.
2. Figure out how to use a base router.
  - Make another express project automatically, and just copy over the part in the tsconfig where they define @server I guess...


*/
