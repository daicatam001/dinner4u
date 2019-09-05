const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({ path: './backend/.env' });
const menuRouter = require('./router/menu');
const authRouter = require('./router/auth');
const validateRouter = require('./router/validate');
const app = express();
// DB connection
mongoose
  .connect(process.env.DB_CONNECT, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log('DB Connected'))
  .catch(() => console.log('DB Connection fail'));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Router
app.use('/api/menu', menuRouter);
app.use('/api/user/auth', authRouter);
app.use('/api/validate', validateRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server run on port ' + port);
});
