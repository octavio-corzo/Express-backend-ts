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
exports.deleteCategory = exports.patchCategory = exports.postCategory = exports.getCategories = void 0;
const category_1 = require("../models/category");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { status: true };
    const categories = yield Promise.all([
        category_1.Category.countDocuments(query),
        category_1.Category.find(query)
    ]);
    return res.json({
        msg: 'getCategorires',
        categories,
    });
});
exports.getCategories = getCategories;
const postCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, user, products } = req.body;
    const total = products.length;
    const category = new category_1.Category({ name, user, products, total });
    yield category.save();
    return res.json({
        msg: 'PostCategory',
        category,
    });
});
exports.postCategory = postCategory;
const patchCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id, name } = _a, rest = __rest(_a, ["_id", "name"]);
    const category = yield category_1.Category.findByIdAndUpdate(id, rest, { new: true });
    return res.json({
        msg: 'patchCategory',
        category
    });
});
exports.patchCategory = patchCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield category_1.Category.findByIdAndDelete(id);
    return res.json({
        msg: 'deleteCategory',
        category
    });
});
exports.deleteCategory = deleteCategory;
