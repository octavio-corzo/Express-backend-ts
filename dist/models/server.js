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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../database/config");
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Database connection
        this.conectarDB();
        // Middlewares
        this.middlewares();
        // Define routes
        this.routes();
    }
    conectarDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConection)();
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Read body
        this.app.use(express_1.default.json());
        // Public directory
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.users, require('../routes/user'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ' + this.port);
        });
    }
}
exports.Server = Server;
