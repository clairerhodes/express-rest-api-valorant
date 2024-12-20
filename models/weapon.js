// models/weapon.js
const mongoose = require('mongoose');

// create weapon schema
const weaponSchema = mongoose.Schema({
    name: String,
    type: String,
    skins: [],
    favorite: Boolean,
});

// connect Weapons to weaponSchema
const Weapons = mongoose.model('Weapons', weaponSchema);

// export Weapons to use in app
module.exports = Weapons;