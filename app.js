import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json('server is running');
});

export default app;
