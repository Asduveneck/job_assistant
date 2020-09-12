import './LoadEnv'; // Must be the first import

import app from './Server';
import logger from './utils/Logger';

// Start the server
const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
  console.log(process.env);
  logger.info(`Express server started on port: ${port}`);
});

/*
Adjust tsconfig WIP. See if okay then if so move on.

Import or add to the Server code what I had (they use winston for logging, so maybe rename or move their shared to my utils)
Add your router and the rest of your code over


Test locally here before doing anything else fancier...

THEN, wipe out the top layer eslint, package.json stuff, webpack, prettier, tsconfig, etc.

Now may be a good time to reorganize the credentials.json into the other credentials directory, and move the docker stuff elsewhere or keep it here...
*/
