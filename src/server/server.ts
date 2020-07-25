import * as express from 'express';

import companyRoutes from './company/companyRoutes';
import personRoutes from './person/personRoutes';
import apiRouter from './routes';

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/api', apiRouter);
app.use('/api/companies', companyRoutes);
app.use('/api/persons', personRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
