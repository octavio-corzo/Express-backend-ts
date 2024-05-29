import { Schema, model } from "mongoose";

const ShoppingCartSchema = new Schema({
    cart: {
        type: String,
        required: [true, 'Shpping cart name is requeried']
    },
    state: {
        type: Boolean,
        default: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        default: null
    }],
    total: {
        type: Number,
        default: 0
    },
})

export const ShoppingCart = model('ShoppingCart', ShoppingCartSchema);