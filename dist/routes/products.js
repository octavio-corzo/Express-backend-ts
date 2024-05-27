"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const category_1 = require("../controllers/category");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
router.get('/', [
    validate_jwt_1.validateJWT,
], product_1.getProducts);
router.post('/', [], category_1.postCategory);
router.patch('/', [], product_1.patchProduct);
module.exports = router;
