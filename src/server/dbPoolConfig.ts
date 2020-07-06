import 'dotenv/config';
import { Pool } from 'pg';

// const isTsNode = process[Symbol.for('ts-node.register.instance')]; // implicit type any

// Refactor / Clean up below or check. Before PG was POSTGRES_
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

// Will probably initialize the tables in an init.sql file...
// const query = `
// CREATE TABLE company (
//     company_id serial primary key,
//     name varchar,
//     career_url varchar,
//     home_url varchar,
//     email_pattern varchar,
//     details json,
//     other_urls json
// );
// `;

/*


*/

export const query = (
  text: string,
  params: any,
  callback: (err: Error, result: import('pg').QueryResult<any>) => void,
) => {
  return pool.query(text, params, callback);
};
