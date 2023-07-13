const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const contactsRouter = require('./routes/api/contacts');
const authRouter = require('./routes/api/auth');
const { errorHandlingMiddleware } = require('./middlewares');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/contacts', contactsRouter);

app.use(errorHandlingMiddleware);

module.exports = app;
