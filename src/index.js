require('dotenv').config();

const { PORT } = require('./config');

const express = require('express');
const app = express();

app.use(express.json());

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`hello visit http://localhost:${PORT}`);
});