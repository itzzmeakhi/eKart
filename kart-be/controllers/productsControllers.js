const Product = require('./../models/Product');

// @desc FETCH all products
// @route GET /api/products
// @access Public

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        next(err);
    }
};

// @desc FETCH a single product
// @route GET /api/products/:id
// @access Public

const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if(product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getProducts,
    getProductById
};