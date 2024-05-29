"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
const mongoose_1 = require("mongoose");
const ShoppingCartSchema = new mongoose_1.Schema({
    cart: {
        type: String,
        required: [true, 'Shpping cart name is requeried']
    },
    state: {
        type: Boolean,
        default: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Product',
            default: null
        }],
    total: {
        type: Number,
        default: 0
    },
});
exports.ShoppingCart = (0, mongoose_1.model)('ShoppingCart', ShoppingCartSchema);
