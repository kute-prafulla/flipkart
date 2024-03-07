
import mongoose from "mongoose";


export const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.rwl5tpu.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');

    } catch(error) {
        console.log('Error while connecting with the database', error.message);
    }

}

export default Connection;