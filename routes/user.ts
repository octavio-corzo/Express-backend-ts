import { Router } from "express";
import { check } from "express-validator";
import { deleteUser, getUsers, patchUser, postUser } from "../controllers/user";

const router: Router = Router();

router.get('/', getUsers);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
], postUser);

router.patch('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
], patchUser);

router.delete('/:id', deleteUser);



module.exports = router;