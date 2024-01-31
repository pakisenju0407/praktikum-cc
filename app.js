const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev')); // Logger untuk permintaan HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/todos', todoRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
