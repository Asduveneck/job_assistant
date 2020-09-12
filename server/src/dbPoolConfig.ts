import 'dotenv/config';

import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  // port: parseInt(process.env.POSTGRES_PORT, 10),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
});

const query = (text: string, params: any): Promise<QueryResult<any>> => {
  return pool.query(text, params);
};

export default query;
