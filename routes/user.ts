import { Router } from "express";
import { check } from "express-validator";
import { getUsers, postUsers } from "../controllers/user";
const router = Router();

router.get('/', getUsers);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
], postUsers);


module.exports = router;