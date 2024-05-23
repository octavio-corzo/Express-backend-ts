// IMPORTACIONES PRINCIPALES
import dotenv from 'dotenv';
dotenv.config();

// Importacion de archivos
import { Server } from './models/server';

// Instancia del servidor de arranque
const servidorIniciado = new Server();

// Llamar al metodo listen para que levante el server
servidorIniciado.listen();
