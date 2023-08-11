
import { ConnectOptions } from "mongoose";
require('dotenv').config();
import mongoose from 'mongoose';
// mongoose.connect(process.env.MONGO_URI!);

export const dbConnect = () =>{
    mongoose.connect("mongodb+srv://mostafaoraby159:BfdFGuTyUxcXdPAE@cluster0.pmzcq0l.mongodb.net/foodmine?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology: true
    } as ConnectOptions).then(()=>console.log("Connected to MongoDB"),
    (error)=>console.log(error)
    )
}
