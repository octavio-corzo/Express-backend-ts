import { Router } from "express";
import { check } from "express-validator";
import { getReceipts, postReceipt } from "../controllers/receipt";
import { validateJWT } from "../middlewares/validate-jwt";

const router: Router = Router();

router.get('/', [
    // validateJWT,
],getReceipts);

router.post('/', [
    // validateJWT,
    check('name', 'receipt name is required').isEmpty(),
    check('admin', 'receipt admins is required').isEmpty(),
    check('client', 'receipt client is required').isEmpty(),
    check('products', 'receipt products is required').isEmpty(),
    check('shoppingCart', 'receipt shoppingCart is required').isEmpty()
], postReceipt)

module.exports = router;