const express = require('express');

require('dotenv').config();
const connectDB = require('./src/utils/DBConnection');
connectDB();

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const userRoutes = require('./src/routers/userRoutes');
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});