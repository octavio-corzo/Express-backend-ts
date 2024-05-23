import { response, request, Response, Request } from "express";
import bcrypt from 'bcryptjs';
import {User} from '../models/user';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    
    const query = { state: true };

    const users = await Promise.all([
        User.countDocuments(query),
        User.find(query)
    ]);

    res.json({
        msg: 'getUsers',
        users
    });
}


export const postUser = async (req: Request, res: Response): Promise<void> => {
    
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    // Save in DB
    await user.save();

    res.json({
        msg: 'postUsers',
        user
    });
}

export const patchUser = async (req: Request, res: Response): Promise<void> => {
    
    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        rest.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, rest, {new: true});

    res.json({
        msg: 'putUsers',
        user
    });
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id, {state: false});

    res.json({
        msg: 'deleteUsers',
        user
    });
}