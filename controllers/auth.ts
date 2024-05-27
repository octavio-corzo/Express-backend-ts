import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import { User} from "../models/user";
import { generateJWT } from "../helpers/generate-jwt";


export const login = async (req: Request, res: Response) => {
    
    const {email, password} = req.body;

    try {
        
        const user = await User.findOne({email});
        
        if(!user) {
            return res.status(400).json({
                msg: 'Incorrect credentials'
            });
        }

        const validatePassword = bcrypt.compareSync(password, user.password);

        if (!validatePassword) {
            return res.status(400).json({
                msg: 'Incorrect password'
            });
        }

        const token = await generateJWT(user.id);

        res.status(201).json({
            msg: 'Welcome user',
            email,
            token,
        });


    } catch (error) {
        
        res.status(500).json({
            msg: 'internal server error'
        });    
    }

};