import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { dbConnect } from "./configs/database.config";
dbConnect(); // connect to database before starting server

import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import orderRouter from './routers/order.router';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods",foodRouter)

// app.get("/api/foods/search:searchTerm",(req,res)=>{
//     const searchTerm = req.params.searchTerm;
//     const foods = sample_food.filter(food=> food.name.toLowerCase().includes(searchTerm.toLowerCase())); 
//     res.send(foods);
// })

app.use("/api/users", userRouter);
app.use("/api/orders",orderRouter);

// app.use(express.static('public'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname,'public', 'index.html'))
// })

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})

