import 'dotenv/config';

import { Pool, QueryResult } from 'pg';

// const isTsNode = process[Symbol.for('ts-node.register.instance')]; // implicit type any

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
});

const query = (
  text: string,
  params: any,
  callback: (err: Error, result: QueryResult<any>) => void,
): void => {
  return pool.query(text, params, callback);
};

export default query;
