import express from 'express';

const router = express.Router();
const API_PREFIX = '/api/v1';

router.get('/', (req, res) => {
  res.send('Welcome to our Whatsapp test api');
});

router.get(`${API_PREFIX}/users`, (req, res) => {
  res.send('welcome to users');
});

export default router;