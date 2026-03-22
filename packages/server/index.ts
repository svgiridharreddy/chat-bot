import type { Request, Response } from "express";
import express from 'express';

const app = express()
const port = process.env.PORT || 3000

app.get("/",(req: Request,res: Response) => {
    res.send("Hello world")
})

app.get("/api/hello",(req: Request,res: Response) => {
    res.json({message: "Hello world"})
})

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`)
})



