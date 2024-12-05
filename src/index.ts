import mongoose, { connect } from "mongoose";
import express, { Request, Response } from 'express';
import todoRouter  from "./routers/todo.routes";

const app = express();
const port = 3000;

const mongoUri = `mongodb://localhost:27017/todo`
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.use('/todo', todoRouter)

app.listen(port, async() => {
    await connect(mongoUri)
    console.log('connect to mongo');
  console.log(`Server is running at http://localhost:${port}`);
});
