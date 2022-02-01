require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger.middleware');
const rootRouter = require('./routes/index');
const { authorize } = require('./middlewares/auth.middleware');
const { errorsHandler } = require('./middlewares/errors.middleware');

const { newUserValidation, loginUserValidation } = require('./utils/validation-requests');
const NotFoundError = require('./errors/not-found-error');

const { PORT = 3000 } = process.env;

const { login, createNewUser } = require('./controllers/users.conroller');

const app = express();
const DB_NAME = 'mestodb';
app.use(requestLogger);

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
// eslint-disable-next-line no-console
  .then(() => console.log('к БД подключен'))
// eslint-disable-next-line no-console
  .catch((err) => console.error(err));

const allowedCors = [
  'https://krylov.students.nomoredomains.work',
  'http://krylov.students.nomoredomains.work',
  'localhost:3000',
];

app.use((req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  next();
});
app.use(cors({
  credentials: true,
  origin: [
    'http://localhost:3000',
    'https://krylov.students.nomoredomains.work',
    'http://krylov.students.nomoredomains.work',
  ],
}));

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.json());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/signin', loginUserValidation, login);
app.use('/signup', newUserValidation, createNewUser);

app.use(authorize);

app.use('/', rootRouter);

app.use((req, res, next) => next(new NotFoundError('Неверный запрос')));
app.use(errorLogger);

app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Сервер запущен - http://localhost:${PORT}`);
});
