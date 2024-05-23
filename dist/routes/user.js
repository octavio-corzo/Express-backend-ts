"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.get('/', user_1.getUsers);
router.post('/', [
    (0, express_validator_1.check)('name', 'Name is required').not().isEmpty(),
    (0, express_validator_1.check)('password', 'Password is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email is required').isEmail(),
], user_1.postUsers);
module.exports = router;
