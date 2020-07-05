import 'dotenv/config';
import { Client } from 'pg';

// const isTsNode = process[Symbol.for('ts-node.register.instance')]; // implicit type any

// Refactor / Clean up below or check. Before PG was POSTGRES_
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDB,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT),
});

const query = `
CREATE TABLE company (
    company_id serial primary key,
    name varchar,
    career_url varchar,
    home_url varchar,
    email_pattern varchar,
    details json,
    other_urls json
);
`;

/*
company_id
name
career_url
home_url
email_pattern
details
other_urls

*/

client
  .query(query)
  .then(res => {
    console.log('Table is successfully created');
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    client.end();
  });
