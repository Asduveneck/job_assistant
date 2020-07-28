import { Request, RequestHandler, Response } from 'express';

import query from '../dbPoolConfig';

export const getById = (tableName: string): RequestHandler => async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const id = parseInt(request.params.id, 10);
    const results = await query(
      `SELECT * FROM ${tableName} WHERE ${tableName}_id = $1`,
      [id],
    );
    response.status(200).json(results.rows);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteById = (tableName: string): RequestHandler => async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const id = parseInt(request.params.id, 10);
    await query(`DELETE FROM ${tableName} WHERE ${tableName}_id = $1`, [id]);
    response.status(204).send(`${tableName} deleted with ID: ${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
