const { User } = require('../models');

const userData = [{
    username: "Terry",
    password: "tbrow"
},
{
    username: "Miles",
    password: "mbrow1"
},
{
    username: "Nina",
    password: "Bean"
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;