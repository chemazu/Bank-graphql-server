import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import mongoose from 'mongoose';
const port = 3000;


const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use(cors());
app.use(express.json());

config();
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});