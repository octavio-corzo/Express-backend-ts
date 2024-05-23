import mongoose from 'mongoose';

export const dbConection = async() => {
    try {
        mongoose.set("strictQuery", false);
        if (!process.env.MONGODB_CNN) {
            throw new Error('MONGODB_CNN environment variable is not defined');
        }
        await mongoose.connect(process.env.MONGODB_CNN as string);
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error al momento de conectar la base de datos');
    }
}
