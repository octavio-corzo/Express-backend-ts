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
        ref: 'User',
        required: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Usuer',
        required: true
    }],
    shoppingCart: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    total: {
        type: Number,
        default: 0
    }
});


export const Receipt = model('Receipt', ReceiptSchema);