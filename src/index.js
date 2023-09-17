const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errors = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errors);

app.listen(3001, () => console.log('🚀 Server started at http://localhost:3001'));
