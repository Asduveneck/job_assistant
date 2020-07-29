import { NextFunction, Request, RequestHandler, Response } from 'express';

import query from '../dbPoolConfig';
import { HttpException } from './errorsMiddleware';

export const getById = (tableName: string): RequestHandler => async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = parseInt(request.params.id, 10);
    const results = await query(
      `SELECT * FROM ${tableName} WHERE ${tableName}_id = $1`,
      [id],
    );
    if (!results.rows.length)
      next(new HttpException(404, `${tableName} with ID ${id} not found`));
    response.status(200).json(results.rows);
  } catch (error) {
    next(error);
  }
};

export const deleteById = (tableName: string): RequestHandler => async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = parseInt(request.params.id, 10);
    await query(`DELETE FROM ${tableName} WHERE ${tableName}_id = $1`, [id]);
    response.status(204).send(`${tableName} deleted with ID: ${id}`);
  } catch (error) {
    next(error);
  }
};
