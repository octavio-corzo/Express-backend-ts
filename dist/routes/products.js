"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const product_1 = require("../controllers/product");
const router = (0, express_1.Router)();
router.get('/', [
// validateJWT,
], product_1.getProducts);
router.post('/', [
    (0, express_validator_1.check)('name', 'Product name is required').isEmpty(),
    (0, express_validator_1.check)('price', 'Product price is required').isEmpty(),
    (0, express_validator_1.check)('category', 'Product Category is required').isEmpty(),
], product_1.postProduct);
router.patch('/', [], product_1.patchProduct);
module.exports = router;
