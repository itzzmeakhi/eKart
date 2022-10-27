const bcrpt = require('bcryptjs');

const users = [
    {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@ekart.in',
        password: bcrpt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        firstName: 'Akhil',
        lastName: 'Reddy',
        email: 'akhilmallidi.98@gmail.com',
        password: bcrpt.hashSync('123456', 10)
    }
];

module.exports = users;