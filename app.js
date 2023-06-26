const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const contactsRouter = require('./routes/api/contacts');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morgan(formatsLogger));

app.use(cors());

app.use(express.json());

app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
});

module.exports = app;
