import express, {Request, Response} from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import prisma from '@repo/db/src/main';

const app = express();

app.get("/", (req:Request,res:Response)=>{
    res.send("Hello from backend");
})

app.get("/hi", async(req:Request, res:Response)=>{
    res.send("Hi from backend");
    const result = await prisma.user.create({
        data:{
            email: "mehul@example.com",
            name: "Mehul"
        }
    })
    console.log(result);
})

app.listen(4000, ()=>{
    console.log("Server started on port 4000");
})