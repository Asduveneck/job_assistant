import * as express from 'express';

// TODO: Sanity check file to be removed later

const router = express.Router();

router.get('/hello', (req, res) => {
  res.json('/api/hello TESTING');
});

router.get('/test2', (req, res) => {
  res.json('api/test2 TESTING');
});

export default router;
