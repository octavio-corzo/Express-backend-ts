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
exports.deleteProduct = exports.patchProduct = exports.postProduct = exports.getProducts = void 0;
const product_1 = require("../models/product");
const category_1 = require("../models/category");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { available: true };
    const products = yield Promise.all([
        product_1.Product.countDocuments(query),
        product_1.Product.find(query),
    ]);
    return res.json({
        msg: 'getProducts',
        products
    });
});
exports.getProducts = getProducts;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, category, description, available, img } = req.body;
    const product = new product_1.Product({ name, price, category, description, available, img });
    yield product.save();
    return res.json({
        msg: 'PostProduct',
        product
    });
});
exports.postProduct = postProduct;
const patchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id, name, price, category, description } = _a, rest = __rest(_a, ["_id", "name", "price", "category", "description"]);
    const product = yield product_1.Product.findByIdAndUpdate(id, rest, { new: true });
    return res.json({
        msg: "PatchProduct",
        product
    });
});
exports.patchProduct = patchProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield category_1.Category.findByIdAndDelete(id);
    return res.json({
        msg: 'deleteProduct',
        category
    });
});
exports.deleteProduct = deleteProduct;
