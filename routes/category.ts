import { Router } from "express";
import { check } from "express-validator";
import { getCategories, postCategory } from "../controllers/category";
import { validateJWT } from "../middlewares/validate-jwt";

const router: Router = Router();

router.get('/', [
    validateJWT,
], getCategories);

router.post('/', [
    validateJWT,
    check('name', 'The category name is required').notEmpty(),
    check('user', 'User creator of category is required').notEmpty(),
    check('products', 'The products of category is required').notEmpty(),
], postCategory);


module.exports = router
