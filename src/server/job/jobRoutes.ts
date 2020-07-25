import * as express from 'express';

import {
  createJob,
  deleteJobById,
  getJobById,
  getJobs,
  updateJobById,
} from './jobQueries';

const router = express.Router();

router.get('', getJobs);
router.post('', createJob);
router.get('/:id', getJobById);
router.put('/:id', updateJobById);
router.delete('/:id', deleteJobById);

export default router;
