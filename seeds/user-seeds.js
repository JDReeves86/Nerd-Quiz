const User = require('../models/User')
require('dotenv').config()

const userData = [
    {
        user_name: 'Lord Humungus',
        email: process.env.USER1EMAIL,
        password: process.env.USER1PASS,
        power_level: 9800
    },
    {
        user_name: 'Jedediah',
        email: process.env.USER2EMAIL,
        password: process.env.USER2PASS,
        power_level: 4200
    },
    {
        user_name: 'MaxRockatansky',
        email: process.env.USER3EMAIL,
        password: process.env.USER3PASS,
        power_level: 2600
    },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true})

module.exports = seedUsers;