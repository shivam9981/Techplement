import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_Connection_string, {
            useNewUrlparser: true,
            useUnifiedTopology: true,
        })
        console.log('connection done')
    } catch (error) {
        console.log(error)
    }
};

export default connection;