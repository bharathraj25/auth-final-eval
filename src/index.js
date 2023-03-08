require('dotenv').config();

const { PORT } = require('./config');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`hello visit http://localhost:${PORT}`);
});