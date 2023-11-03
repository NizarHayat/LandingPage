/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MyDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post(`http://localhost:3001/api/posts`, (req, res) => {
  const { email, password } = req.body;
  // do something with email and password, such as save them to a database
  const response = { message: 'Data received successfully' };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
