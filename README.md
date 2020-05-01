# job_assistant

## Technical details

There are 2 different Webpack configurations. One for the server and one for the client.

### Server

The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.

### Client

The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/client/scss`. The App component imports the `app.scss` file which already includes an import for Bootstrap.

### Running the project

In order to run the server, use `npm run dev`, and the server will start on port 3000 (http://localhost:3000).

Webpack will watch the files. Once you save a file, you can refresh your browser to ensure you got the updated client files. If you only change server files, you _shouldn't_ need to refresh.

## Appendix

Articles that failed me:

https://medium.com/@anwesha_das/a-strongly-typed-create-react-app-with-an-express-api-server-44e2334ccc71

- Skipped out on all the packages she installed

https://dev.to/dirk94/how-i-structure-my-express-typescript-react-applications-g3e

- ts-node has a bug with imports still. Can't start server as a result.
