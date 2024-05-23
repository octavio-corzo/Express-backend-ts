"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTACIONES PRINCIPALES
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Importacion de archivos
const server_1 = require("./models/server");
// Instancia del servidor de arranque
const servidorIniciado = new server_1.Server();
// Llamar al metodo listen para que levante el server
servidorIniciado.listen();
