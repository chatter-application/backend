import express, { Express, Request, Response }from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.send("Express + Typescript server works.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port :${PORT}`);
});
