"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        ref: 'Usuario',
        required: true
    },
    client: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    products: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Producto',
            required: true
        }],
    shoppingCart: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Carrito',
        required: true
    },
    total: {
        type: Number,
        default: 0
    }
});
module.exports = (0, mongoose_1.model)('Receipt ', ReceiptSchema);
