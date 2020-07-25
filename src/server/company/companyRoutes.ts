import * as express from 'express';

import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompanyById,
} from './companyQueries';

const router = express.Router();

router.get('', getCompanies);
router.post('', createCompany);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompanyById);

export default router;
