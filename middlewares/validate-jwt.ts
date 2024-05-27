import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';

interface JwtPayload {
    uid: string;
}

interface CustomRequest extends Request {
    user?: any;
}

const validateJWT = async (req: CustomRequest, res: Response, next: NextFunction) => {
    let token = req.headers?.authorization;

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición',
        });
    }

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length).trimLeft();
    } else {
        return res.status(401).json({
            msg: 'Formato de token no válido',
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY_FOR_TOKEN as string) as JwtPayload;

        const user = await User.findById(uid);

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
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido',
        });
    }
};

export { validateJWT };
