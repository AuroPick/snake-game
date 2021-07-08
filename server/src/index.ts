import express from 'express';
import dotenv from 'dotenv-safe';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from './routes';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/leaderboard', router);

mongoose
  .connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error);
  });

mongoose.set('useFindAndModify', false);
