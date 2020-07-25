import * as express from 'express';

import {
  createPerson,
  getPersonById,
  getPersons,
  updatePersonById,
} from './personQueries';

const router = express.Router();

router.get('', getPersons);
router.post('', createPerson);
router.get('/:id', getPersonById);
router.put('/:id', updatePersonById);

export default router;
