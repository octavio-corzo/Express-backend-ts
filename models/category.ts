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
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }]
});

module.exports = model('Category', CategorySchema);