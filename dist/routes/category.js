"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const category_1 = require("../controllers/category");
const router = (0, express_1.Router)();
router.get('/', [
// validateJWT,
], category_1.getCategories);
router.post('/', [
    // validateJWT,
    (0, express_validator_1.check)('name', 'The category name is required').notEmpty(),
    (0, express_validator_1.check)('user', 'User creator of category is required').notEmpty(),
    (0, express_validator_1.check)('products', 'No products provided').isEmpty(),
], category_1.postCategory);
module.exports = router;
