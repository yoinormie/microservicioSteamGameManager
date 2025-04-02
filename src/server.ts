/**
 * Clase que inicia el servidor en el puerto 3000.
 * Importa app para que use ese servidor e importa la clase steamMicroservices para que permita usar sus endpoints.
 */
import app from "./config"
import './steamMicroservices'

const port = 3000

app.listen(port, () => {
    console.log(`Microservicio inciado en el puerto ${port}`);
})