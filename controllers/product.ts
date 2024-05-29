import { Request, Response } from 'express';
import { Product } from "../models/product";
import { Category } from '../models/category';


export const getProducts = async (req: Request, res: Response): Promise<Response> => {
    const query = {available: true};

    const products = await Promise.all([
        Product.countDocuments(query),
        Product.find(query),
    ]);

    return res.json({
        msg: 'getProducts',
        products
    });
};

export const postProduct = async(req: Request, res: Response):Promise<Response> => {
    const {
        name, 
        price, 
        category, 
        description, 
        available, 
        img
    }: {
        name: string,
        price: number,
        category: string,
        description: string,
        available: boolean,
        img: string,
    } = req.body;


    const product = new Product({name, price, category, description, available, img})

    await product.save();

    return res.json({
        msg: 'PostProduct',
        product
    });
};

export const patchProduct = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const { _id, name, price, category, description, ...rest} = req.body;

    const product = await Product.findByIdAndUpdate(id, rest, { new: true });

    return res.json({
        msg: "PatchProduct",
        product
    });

};

export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;

    const category = await Category.findByIdAndDelete(id);

    return res.json({
        msg: 'deleteProduct',
        category
    });
};