import { Router } from "express";
import { check} from "express-validator";
import { getProducts, patchProduct } from "../controllers/product";
import { postCategory } from "../controllers/category";
import { validateJWT } from "../middlewares/validate-jwt";

const router: Router = Router();

router.get('/', [
    validateJWT,
],getProducts);

router.post('/', [  

], postCategory);

router.patch('/', [

], patchProduct)


module.exports = router;