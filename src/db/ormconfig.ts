import 'dotenv/config';

import { ConnectionOptions } from 'typeorm';
// NOTE: the tsconfig.db.json had to accept implicit any for isTsNode. Find alternative.
const isTsNode = process[Symbol.for('ts-node.register.instance')];
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  migrationsRun: true,
  logging: false,
  entities: [isTsNode ? 'src/db/entity/**/*.ts' : 'dist/db/entity/**/*.js'],
  migrations: [
    isTsNode ? 'src/db/migration/**/*.ts' : 'dist/db/migration/**/*.js',
  ],
  subscribers: [
    isTsNode ? 'src/db/subscriber/**/*.ts' : 'dist/db/subscriber/**/*.js',
  ],
  cli: {
    entitiesDir: 'src/db/entity',
    migrationsDir: 'src/db/migration',
    subscribersDir: 'src/db/subscriber',
  },
};

export = config;
