const express = require('express');

require('dotenv').config();
const connectDB = require('./src/utils/DBConnection');
connectDB();

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const userRoutes = require('./src/routers/userRoutes');
const adminRoutes = require('./src/routers/AdminRoutes');
const categoryRoutes = require('./src/routers/CategoryRoutes');
const serviceRoutes = require('./src/routers/ServiceRoutes');
const providerRoutes = require('./src/routers/ProviderRoutes');
const bookingRoutes = require('./src/routers/BookingRoutes');
const reviewRoutes = require('./src/routers/ReviewRoutes');
const paymentRoutes = require('./src/routers/PaymentRoutes');

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/category', categoryRoutes);  
app.use('/service', serviceRoutes);
app.use('/provider', providerRoutes);
app.use('/booking', bookingRoutes);
app.use('/review', reviewRoutes);
app.use('/payment', paymentRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});