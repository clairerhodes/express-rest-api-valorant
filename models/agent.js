// models/agent.js
const mongoose = require('mongoose');

// create agent schema
const agentSchema = mongoose.Schema({
    name: String,
    role: String,
    starter: Boolean,
});

// connect Agent to agentSchema
const Agents = mongoose.model('Agents', agentSchema);

// export Agents to use in app
module.exports = Agents;