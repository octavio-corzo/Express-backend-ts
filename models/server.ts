import express from 'express';
import cors from 'cors';
import { dbConection } from '../database/config';

export class Server {
    private app: express.Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        auth: '/api/auth',
        category: '/api/category',
        products: '/api/products',
        receipt: '/api/receipt',
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
        this.app.use(this.apiPaths.auth, require('../routes/auth'));
        this.app.use(this.apiPaths.category, require('../routes/category'));
        this.app.use(this.apiPaths.products, require('../routes/products'));
        this.app.use(this.apiPaths.receipt, require('../routes/receipt'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ' + this.port);
        });
    }
}
