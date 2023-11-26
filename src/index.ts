import express from 'express';
import router from './routes';
import bodyParser from 'body-parser';

const app=express()
const port=3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });