import express from 'express';
import dotenv from 'dotenv-safe';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
  console.log(`Listenin on port ${PORT}`);
});
