"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FacturaSchema = (0, mongoose_1.Schema)({
    nombre: {
        type: String,
        required: [true, 'El identificador de la factura es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
    admin: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    cliente: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    productos: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Producto',
            required: true
        }],
    carrito: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Carrito',
        required: true
    },
    total: {
        type: Number,
        default: 0
    }
});
module.exports = (0, mongoose_1.model)('factura', FacturaSchema);
