import { Router } from "express";
import { check } from "express-validator";
import { login } from "../controllers/auth";

const router: Router = Router();

router.post('/', [
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
], login);


module.exports = router