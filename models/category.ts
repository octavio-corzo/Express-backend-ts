import { Schema, model } from "mongoose";


const CategorySchema = new Schema({
    name:{
        type: String,
        required:[true, 'The category name is required']
    },
    status:{
        type: Boolean,
        default: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        type: String,
        ref: 'Product',
        required: true,
    }],
    totalProducts: {
        type: Number,
        default: 0
    },
});

export const Category = model('Category', CategorySchema);