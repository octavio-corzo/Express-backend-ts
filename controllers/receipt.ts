import { Response, Request } from "express";
import { Receipt } from "../models/receipt ";

export const getReceipts = async (req: Request, res: Response): Promise<Response> => {
    const query = {status: true};

    const receipts = await Promise.all([
        Receipt.countDocuments(query),
        Receipt.find(query)
    ]) ;

    return res.json({
        msg: 'getReceipts',
        receipts
    });
    
};

export const postReceipt = async (req: Request, res: Response): Promise<Response> => {
    const { name, admin, client, products, shoppingCart } = req.body;
    
    const receipt = new Receipt({ name, admin, client, products, shoppingCart });

    await receipt.save();

    return res.json({
        msg: "postReceipt",
        receipt
    })
};


export const putchReceipt = async (req: Request, res: Response): Promise <Response> => {
    const { id } = req.params;
    const {_id, name, products, shoppingCart, ...rest} = req.body;

    const receipt = await Receipt.findByIdAndUpdate(id, ...rest, {new: true});

    return res.json({
        msg: 'PatchReceipt',
        receipt
    });
}


export const deleteReceipt = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;

    const receipt = await Receipt.findByIdAndDelete(id);

    return res.json({
        msg: "deleteReceipt",
        receipt
    });
}
