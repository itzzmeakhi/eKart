const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/config');
const productRoutes = require('./routes/productsRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);

app.use(errorMiddleware.notFound);

app.use(errorMiddleware.errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${process.env.NODE_ENV} mode in ${PORT}`);
});