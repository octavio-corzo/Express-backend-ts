import { Schema, model } from "mongoose";

const ReceiptSchema = new Schema({
    name: {
        type: String,
        required: [true , 'El identificador de la factura es obligatorio']
    },
    status: {
        type: Boolean,
        default: true
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    }],
    shoppingCart: {
        type: Schema.Types.ObjectId,
        ref: 'Carrito',
        required: true
    },
    total: {
        type: Number,
        default: 0
    }
});


module.exports = model('Receipt ', ReceiptSchema);