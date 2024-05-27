"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const category_1 = require("../controllers/category");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
router.get('/', [
    validate_jwt_1.validateJWT,
], category_1.getCategories);
router.post('/', [
    validate_jwt_1.validateJWT,
    (0, express_validator_1.check)('name', 'The category name is required').notEmpty(),
    (0, express_validator_1.check)('user', 'User creator of category is required').notEmpty(),
    (0, express_validator_1.check)('products', 'The products of category is required').notEmpty(),
], category_1.postCategory);
module.exports = router;
