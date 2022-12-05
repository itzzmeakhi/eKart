const express = require('express');
const productControllers = require('./../controllers/productsControllers');

const router = express.Router();


router.route('/').get(productControllers.getProducts);

router.route('/:id').get(productControllers.getProductById);

module.exports = router;
