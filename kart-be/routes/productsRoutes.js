const express = require('express');
const Product = require('./../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

router.get('/:id', async(req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if(product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch(err) {
        next(err);
    }
});

module.exports = router;
