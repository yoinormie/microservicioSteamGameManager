import express, { Request, Response } from 'express';
import app from './config'

const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: "Hola desde el microservicio de Steam"
    });
});
