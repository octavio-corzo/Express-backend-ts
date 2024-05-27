import jwt from "jsonwebtoken"


export const generateJWT = (uid: string = ''): Promise<string> => {
    return new Promise((resolve, reject) => {
        const payload = {uid};

        jwt.sign(payload, process.env.SECRET_KEY_FOR_TOKEN as string, {
            expiresIn: '5h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Token could not be generated');
            } else {
                resolve(token as string);
            }
        });
    });
}