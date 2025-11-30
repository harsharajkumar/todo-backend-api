const express = require('express');
const connectDB = require('./config/database');  // match name + case
require('dotenv').config();

const app = express();

// connect to MongoDB
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// use backticks and remove the comma
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
