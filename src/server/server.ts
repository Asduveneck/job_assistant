import * as express from 'express';

import apiRouter from './routes';
import { query } from './dbPoolConfig';

const app = express();

app.use(express.static('public'));
app.use(apiRouter); // Within the router we use query and attach queries to our routes!

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
