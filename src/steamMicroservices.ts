import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: "¡Hola desde el microservicio con Node.js y TypeScript!"
    });
});
