# job_assistant

## Technical details

There are 2 different Webpack configurations. One for the server and one for the client. Both need to be revised.

1. The Server:

- The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.

2. The Client:

- The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

### Running the project

In order to run the server, use `npm run dev`, and the server will start on [port 5000](http://localhost:5000).

#### server

```sh
npm run dev:server
```

#### database/docker

```sh
npm run dc-up
```

## Appendix

### Articles I'm about to read

Postgres Express Node Setup:
https://www.taniarascia.com/node-express-postgresql-heroku/
https://kb.objectrocket.com/postgresql/how-to-create-a-postgres-database-with-nodejs-844
https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/

ORMs:
https://typeorm.io/#/

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://tachyons.io/

[wanago](https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/)

### Articles that were vaguely useful but still not perfect

[Anwesha: Strongly-typed create-react-app](https://medium.com/@anwesha_das/a-strongly-typed-create-react-app-with-an-express-api-server-44e2334ccc71)

- Skipped out on some steps, like the packages she installed.
- Took me a while to figure out, and I now realize ts-node is problematic.

[Dirk's how I structure...](https://dev.to/dirk94/how-i-structure-my-express-typescript-react-applications-g3e)

- ts-node has a bug with imports still. Can't start server as a result.
- I now realize I do NOT like his structure.

[Alex's Production ready](https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407)

- Really clear, readable. Incomplete and missing part two...
