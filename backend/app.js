const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './backend/.env' });
const bodyParser = require('body-parser');
const menuRouter = require('./router/menu');
const cors = require('cors');

const app = express();
// DB connection
mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .then(() => console.log('DB Connected'))
  .catch(() => console.log('DB Connection fail'));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Router
app.use('/api/menu', menuRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server run on port ' + port);
});
