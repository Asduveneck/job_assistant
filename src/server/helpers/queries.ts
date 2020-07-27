import { Request, RequestHandler, Response } from 'express';

import query from '../dbPoolConfig';

export const getById = (tableName: string): RequestHandler => (
  request: Request,
  response: Response,
): void => {
  const id = parseInt(request.params.id, 10);
  query(
    `SELECT * FROM ${tableName} WHERE ${tableName}_id = $1`,
    [id],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    },
  );
};

export const deleteById = (tableName: string): RequestHandler => (
  request: Request,
  response: Response,
): void => {
  const id = parseInt(request.params.id, 10);
  query(`DELETE FROM ${tableName} WHERE ${tableName}_id = $1`, [id], error => {
    if (error) throw error;
    response.status(204).send(`${tableName} deleted with ID: ${id}`);
  });
};
