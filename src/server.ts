/**
 * Clase que inicia el servidor en el puerto 3000.
 * Importa app para que use ese servidor e importa la clase steamMicroservices para que permita usar sus endpoints.
 */
import { env } from "process"
import app from "./Config/config"
import './steamMicroservices'

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Microservicio inciado en el puerto ${port}`);
})