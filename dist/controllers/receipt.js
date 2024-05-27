"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReceipt = exports.putchReceipt = exports.postReceipt = exports.getReceipts = void 0;
const receipt_1 = require("../models/receipt ");
const getReceipts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { status: true };
    const receipts = yield Promise.all([
        receipt_1.Receipt.countDocuments(query),
        receipt_1.Receipt.find(query)
    ]);
    return res.json({
        msg: 'getReceipts',
        receipts
    });
});
exports.getReceipts = getReceipts;
const postReceipt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, admin, client, products, shoppingCart } = req.body;
    const receipt = new receipt_1.Receipt({ name, admin, client, products, shoppingCart });
    yield receipt.save();
    return res.json({
        msg: "postReceipt",
        receipt
    });
});
exports.postReceipt = postReceipt;
const putchReceipt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id, name, products, shoppingCart } = _a, rest = __rest(_a, ["_id", "name", "products", "shoppingCart"]);
    const receipt = yield receipt_1.Receipt.findByIdAndUpdate(id, ...rest, { new: true });
    return res.json({
        msg: 'PatchReceipt',
        receipt
    });
});
exports.putchReceipt = putchReceipt;
const deleteReceipt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const receipt = yield receipt_1.Receipt.findByIdAndDelete(id);
    return res.json({
        msg: "deleteReceipt",
        receipt
    });
});
exports.deleteReceipt = deleteReceipt;
