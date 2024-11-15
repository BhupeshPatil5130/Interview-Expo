import express from 'express';
import cors from 'cors';
import connectDB  from './config/db.js'
import dotenv from 'dotenv';
import router from './routes/QuestionRoute.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use("/api",router);

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World');
});
// Start the server 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});