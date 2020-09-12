import { Router } from 'express';

import companyRoutes from '../company/companyRoutes';
import jobRoutes from '../job/jobRoutes';
import personRoutes from '../person/personRoutes';

const router = Router();

router.use('/companies', companyRoutes);
router.use('/jobs', jobRoutes);
router.use('/persons', personRoutes);

export default router;
