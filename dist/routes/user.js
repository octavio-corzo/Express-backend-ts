"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_1 = require("../controllers/user");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
router.get('/', [
// validateJWT,
], user_1.getUsers);
router.get('/:id', [
    validate_jwt_1.validateJWT
], user_1.getUser);
router.post('/', [
    // validateJWT,
    (0, express_validator_1.check)('name', 'Name is required').not().isEmpty(),
    (0, express_validator_1.check)('password', 'Password is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email is required').isEmail(),
], user_1.postUser);
router.patch('/:id', [
    validate_jwt_1.validateJWT,
    (0, express_validator_1.check)('id', 'No es un ID válido').isMongoId(),
    (0, express_validator_1.check)('password', 'Password is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email is required').isEmail(),
], user_1.patchUser);
router.delete('/:id', [
    validate_jwt_1.validateJWT,
], user_1.deleteUser);
module.exports = router;
