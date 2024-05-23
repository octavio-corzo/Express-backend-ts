"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }]
});
module.exports = (0, mongoose_1.model)('Category', CategorySchema);
