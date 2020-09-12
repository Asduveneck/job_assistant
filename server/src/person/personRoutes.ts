import * as express from 'express';

import {
  createPerson,
  deletePersonById,
  getPersonById,
  getPersons,
  updatePersonById,
} from './personQueries';

const router = express.Router();

router.get('', getPersons);
router.post('', createPerson);
router.get('/:id', getPersonById);
router.put('/:id', updatePersonById);
router.delete('/:id', deletePersonById);

export default router;
