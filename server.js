const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Weapons = require('./models/weapons.js');
const Agents = require('./models/agent.js');

const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Routes go here

// allow user to 


app.listen(3000, () => {
  console.log('The express app is ready!');
});