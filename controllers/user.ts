import { response, request } from "express";
import bcrypt from 'bcryptjs';
import {User} from '../models/user';

export const getUsers = async (req = request, res = response): Promise<void> => {
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


export const postUsers = async (req = request, res = response): Promise<void> => {
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