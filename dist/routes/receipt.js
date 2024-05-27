"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const receipt_1 = require("../controllers/receipt");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
router.get('/', [
    validate_jwt_1.validateJWT,
], receipt_1.getReceipts);
router.post('/', [
    validate_jwt_1.validateJWT,
    (0, express_validator_1.check)('name', 'receipt name is required').isEmpty(),
    (0, express_validator_1.check)('admin', 'receipt admins is required').isEmpty(),
    (0, express_validator_1.check)('client', 'receipt client is required').isEmpty(),
    (0, express_validator_1.check)('products', 'receipt products is required').isEmpty(),
    (0, express_validator_1.check)('shoppingCart', 'receipt shoppingCart is required').isEmpty()
], receipt_1.postReceipt);
module.exports = router;
