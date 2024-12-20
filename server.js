const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Weapons = require('./models/weapon.js');
const Agents = require('./models/agent.js');

// const cors = require('cors');
// app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Routes go here

// allow user to create new weapon
app.post('/weapons', async (req, res) => {
    const createdWeapon = await Weapons.create(req.body);
    res.json(createdWeapon); // send back json data instead of res.send/render
});

// allow user to read data for all weapons
app.get('/weapons', async (req, res) => {
    const foundWeapons = await Weapons.find();
    res.json(foundWeapons);
});

// allow user to delete data for specific weapon
app.delete('/weapons/:weaponId', async (req, res) => {
    const deletedWeapon = await Weapons.findByIdAndDelete(req.params.weaponId);
    res.json(deletedWeapon);
});

// allow user to update data for a specific weapon
app.put('/weapons/:weaponId', async (req, res) => {
    const updatedWeapon = await Weapons.findByIdAndUpdate(
        req.params.weaponId,
        req.body,
        {new:true}
    );
    res.json(updatedWeapon);
});


// allow user to create new agent
app.post('/agents', async (req, res) => {
    const createdAgent = await Agents.create(req.body);
    res.json(createdAgent);
});

// allow user to read data for all agents
app.get('/agents', async (req, res) => {
    const foundAgents = await Agents.find();
    res.json(foundAgents);
});

// allow user to delete data for specific agent
app.delete('/agents/:agentId', async (req, res) => {
    const deletedAgent = await Agents.findByIdAndDelete(req.params.agentId);
    res.json(deletedAgent);
});

// allow user to update data for specific agent
app.put('/agents/:agentId', async (req, res) => {
    const updatedAgent = await Agents.findByIdAndUpdate(
        req.params.agentId,
        req.body,
        {new:true}
    );
    res.json(updatedAgent);
});

app.listen(3003, () => {
  console.log('The express app is ready on port 3003!');
});