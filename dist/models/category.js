"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'The category name is required']
    },
    status: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.Category = (0, mongoose_1.model)('Category', CategorySchema);
