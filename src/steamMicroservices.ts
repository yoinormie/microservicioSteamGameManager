/**
 * Fichero donde se definen los endpoints de este microservicio.
 */
import express = require('express');
import app from './config';

app.get('/', (req: express.Request, res: express.Response) => {
    res.json({
        message: "Hola desde el microservicio de Steam"
    });
});