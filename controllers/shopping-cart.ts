import { Response, Request } from "express";
import { ShoppingCart } from "../models/shopping-cart";


export const getShoppingCarts = async (req: Request, res: Response): Promise<Response> => {
    const query = {state: true};
    
    const shoppingCarts = await Promise.all([
        ShoppingCart.find(query)
    ]);


    return res.json({
        msg: "getShoppingCarts",
        shoppingCarts
    });
}