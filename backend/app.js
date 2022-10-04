const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');

const { PORT = 3001 } = process.env;
// const ERROR_DEFAULT = 500;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/notesDB');

app.use(cors);

app.use('/', require('./routes/notes'));

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || ERROR_DEFAULT;
//   const message = statusCode === ERROR_DEFAULT ? 'На сервере произошла ошибка' : err.message;
//   res.status(statusCode).send({ message });
//   next();
// });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
