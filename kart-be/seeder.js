const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const connectDB = require('./db/config');

const users = require('./data/users');
const products = require('./data/products');

dotenv.config();

connectDB();


const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return {
                ...product,
                user: adminUser
            };
        });

        await Product.insertMany(sampleProducts);
        console.log('Data imported');
        process.exit();
    } catch (err) {
        console.log('err', err);
    }
};

if(process.argv[2] === '-d') {
    // Something
} else {
    importData();
}

