import { Router } from "express";
import { check } from "express-validator";
import { deleteUser, getUser, getUsers, patchUser, postUser } from "../controllers/user";
import { validateJWT } from "../middlewares/validate-jwt";

const router: Router = Router();

router.get('/', [
    // validateJWT,
],getUsers);

router.get('/:id', [
    validateJWT
], getUser);

router.post('/', [
    // validateJWT,
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
], postUser);

router.patch('/:id', [
    validateJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
], patchUser);

router.delete('/:id', [
    validateJWT,
], deleteUser);



module.exports = router;