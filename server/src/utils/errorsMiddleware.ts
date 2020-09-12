import { NextFunction, Request, Response } from 'express';

export class HttpException extends Error {
  status: number;

  message: string;

  constructor(status: number = 500, message: string = 'Something went wrong') {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export const devErrorHandler = (
  error: HttpException,
  _request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction, // Needed for Express to recognize this as error handler
): void => {
  const [status, message, stack] = [
    error.status || 500,
    error.message || 'Something went wrong',
    error.stack,
  ];
  console.error({ status, error });
  response.status(status).send({ status, message, stack });
};
