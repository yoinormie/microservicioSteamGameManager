/**
 * Clase que configura la dependencia de express para que utilice json.
 * También permite que pueda ser exportada para que la usen otros ficheros.
 */
import express = require('express')

const app = express()

app.use(express.json())

export default app;