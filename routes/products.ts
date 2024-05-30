import { Router } from "express";
import { check} from "express-validator";
import { getProducts, patchProduct, postProduct } from "../controllers/product";
import { validateJWT } from "../middlewares/validate-jwt";

const router: Router = Router();

router.get('/', [
    // validateJWT,
],getProducts);

router.post('/', [  
    check('name', 'Product name is required').isEmpty(),
    check('price', 'Product price is required').isEmpty(),
], postProduct);

router.patch('/', [

], patchProduct)


module.exports = router;