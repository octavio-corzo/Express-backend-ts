import express from 'express';
import cors from 'cors';
import { dbConection } from '../database/config';

export class Server {
    private app: express.Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Database connection
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Define routes
        this.routes();
    }

    async conectarDB() {
        await dbConection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Read body
        this.app.use(express.json());

        // Public directory
        this.app.use(express.static('public'));
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
