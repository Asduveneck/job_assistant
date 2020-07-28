# job_assistant

## About

Job Assistant is designed to record your job applications, and assist you with the job hunt! Many features are currently being developed. While there is technically a Front-End, it has NOT been developed yet, and web-pack needs to be heavily configured (for live re-load and potentially removing SASS/SCSS compilation).

## Set up

These set up steps will probably be updated as additional features are built (and additional configurations are set).

### 0: Install necessary dependencies

Make sure you have the following installed:

- Docker-Compose
- psql
- node
- bash

### 1: Set up hidden configs/credentials

Make sure you have a `.env` and `docker.env` files in the project root (see sample_configs). After making `.env`, copy and paste the `user`, `password`, and `db`.

### 2: Set up Docker

In one terminal, once you're at the root directory, start docker by running:

```sh
s/run dc-up
```

You'll want docker running for the rest of the set up.

### 3: Initialize the database

In another terminal (at the root repo), you can initialize all of the database tables via:

```sh
s/run db-init
```

`db-init` triggers a series of SQL scripts to run in sequential order, enabling you to create the tables in order. At this point, you can optionally seed the database via:

```sh
s/run db seed
```

### 4: Start the server

The server is currently written in TypeScript, so I recommend running the dev server. Either of the following commands work will start the server

```sh
s/run server
npm run dev:server
```

The server runs on `localhost:5000`, and all of the current api endpoints can be accessed via `localhost:5000/api/RESOURCES`.

### Optional

Within the Docker, we have pgadmin, which provides a UI for interacting with the database. To set it up, once docker is running, go to [localhost:8080](localhost:8000), and log in using the credentials `PGADMMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD` defined within `docker.env`.

Click on `Create Server`, and for the `Host name/address`, select `postgres`. The Username and Password are based upon your `.env` files.

## Technologies Used

- Development Tools: Docker, TypeScript, eslint, prettier, webpack
- Frontend: React, MaterialUI
- Backend: PostgreSQL Express, Node

## Resources Consulted

I learned a lot from the people who taught me, and many parts of this project I had to look up.

- The initial `webpack` setup was taken from [covalence](https://github.com/covalence-io/barebones-react-typescript-express), but this may be scrapped in the near future as I heavily modify webpack.
- Docker setup was taken from [Wanago's series](https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/)
- Eslint setup was mostly taken from [Robert Cooper](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
