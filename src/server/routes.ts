import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
  res.json('test');
});

router.get('/api/test', (req, res, next) => {
  res.send('testing');
});

export default router;
