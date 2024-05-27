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
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let token = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición',
        });
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length).trimLeft();
    }
    else {
        return res.status(401).json({
            msg: 'Formato de token no válido',
        });
    }
    try {
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY_FOR_TOKEN);
        const user = yield user_1.User.findById(uid);
        if (!user) {
            return res.status(401).json({
                msg: 'Token no valido - user no existe en DB fisicamente',
            });
        }
        if (!user.status) {
            return res.status(401).json({
                msg: 'Token no valido - user con estado: false',
            });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido',
        });
    }
});
exports.validateJWT = validateJWT;
