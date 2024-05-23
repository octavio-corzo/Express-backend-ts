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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUsers = exports.getUsers = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = require("../models/user");
const getUsers = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { state: true };
    const users = yield Promise.all([
        user_1.User.countDocuments(query),
        user_1.User.find(query)
    ]);
    res.json({
        msg: 'getUsers',
        users
    });
});
exports.getUsers = getUsers;
const postUsers = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, role } = req.body;
    const user = new user_1.User({ name, email, password, role });
    // Encrypt password
    const salt = bcryptjs_1.default.genSaltSync();
    user.password = bcryptjs_1.default.hashSync(password, salt);
    // Save in DB
    yield user.save();
    res.json({
        msg: 'postUsers',
        user
    });
});
exports.postUsers = postUsers;
