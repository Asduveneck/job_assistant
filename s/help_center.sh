#!/usr/bin/env bash

START='
For general development, you will want the frontend, server, and database running:
  
    - `s/run frontend` or `s/run f`
    - `s/run server` or `s/run s`
    - `s/run dc-up` or `s/run dc-u`

(in relative order)

Thus, you should have 3 terminals running simultaneously.

================================================================================

The frontend can run independently without data in some cases, but the server will almost always need the database (dc-up) to run.
'

INIT='
To initialize the project, you will need to have docker, docker-compose, and node installed.

You will need two terminals.

In one terminal, you will need to have `docker-compose` running from the root level. 
In the other, we will create and seed the database.

================================================================================

Terminal One:

`s/run dc-up`

Terminal Two:

`s/run db-init && s/run db-seed`
'

MAIN='
Please enter a valid option after `s/run`

    option          summary                  full_path         
  -------------------------------------------------------------             
  db:         display db options      bash s/db_helper.sh
  db start:   connect to psql         bash s/db_helper.sh start
  dc-up:      start docker            docker-compose up
  dc-down:    remove docker volumes   docker-compose down
  lint:       display lint shortcuts  bash s/lint_helper.sh
  server:     start dev server        cd server && npm run dev:server
  frontend:   start dev client        cd client && npm run start
'

DB='
Here are valid options to run after `s/run` for interacting with the database:

    option          summary                  full_path         
  -------------------------------------------------------------             
  db:         display db options      bash s/db_helper.sh
  db drop:    drop all tables         bash s/db_helper.sh drop
  db empty:   empty all tables        bash s/db_helper.sh empty
  db seed:    seed with mock data     bash s/db_helper.sh seed
  db start:   connect to psql         bash s/db_helper.sh start
  db-init:    initialize database     bash s/db_helper.sh NUM a few times...

For example, invoking: `s/run db` will show additional db commands.
'

GENERAL='
For help initializing the project, run `s/run help init`
For help with starting the project, run `s/run help start`
For help with db operations, run `s/run help db`.
  - For more options, run `s/run db`
For help with the linter, run `s/run help lint` or `s/run help l`
  - For examples, run `s/run lint ex`

For a summary of main commands, run `s/run help sum`
'

case $1 in
  db)
    echo "$DB"
    ;;
  init | initialize)
    echo "$INIT"
    ;;
  lint | l)
    bash s/lint_helper.sh help
    ;;
  main)
    echo "$MAIN"
    ;;
  start)
    echo "$START"
    ;;
  *)
    echo "$GENERAL"
    ;;
esac