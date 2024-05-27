"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = void 0;
const mongoose_1 = require("mongoose");
const ReceiptSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El identificador de la factura es obligatorio']
    },
    status: {
        type: Boolean,
        default: true
    },
    admin: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    client: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Usuer',
            required: true
        }],
    shoppingCart: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    total: {
        type: Number,
        default: 0
    }
});
exports.Receipt = (0, mongoose_1.model)('Receipt', ReceiptSchema);
