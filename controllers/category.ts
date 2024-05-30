import { Response, Request } from "express";
import {Category} from '../models/category';

interface CategoryRequest extends Request {
    body: {
        _id: string,
        name: string;
        user: string;
        products: string[];
    }
};

export const getCategories = async (req: Request, res: Response): Promise<Response> => {
    const query = {status: true}

    const categories = await Promise.all([
        Category.find(query)
    ]);

    return res.json({
        msg: 'getCategorires',
        categories,
    });

};

export const postCategory = async (req: CategoryRequest, res: Response): Promise<Response> => {
    const { name, user, products } = req.body;
    
    let totalProducts: number = 0;

    if (products) {
        totalProducts = products.length;
    }

    const category = new Category({ name, user, products, totalProducts });

    if(!products || !req.body.products){
        totalProducts = 0;
    }

    await category.save();
    
    return res.json({
      msg: 'PostCategory',
      category,
    });
};

export const patchCategory = async (req: CategoryRequest, res: Response):Promise<Response> => {
    const {id} = req.params;

    const { _id, name, ...rest} = req.body;

    const category = await Category.findByIdAndUpdate(id, rest, {new: true});

    return res.json({
        msg: 'patchCategory',
        category
    })

};

export const deleteCategory = async (req: Request, res: Response):Promise<Response> => {
    const {id} = req.params;

    const category = await Category.findByIdAndDelete(id);

    return res.json({
        msg: 'deleteCategory',
        category
    });
};