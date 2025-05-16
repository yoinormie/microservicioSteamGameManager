/**
 * Clase que inicia el servidor en el puerto 3000.
 * Importa app para que use ese servidor e importa la clase steamMicroservices para que permita usar sus endpoints.
 */
import app from "./Config/config"
import route from "./Routes/steamRoutes"
import './steamMicroservices'

const port = process.env.PORT
const commonURLEndPoint = '/steam'

app.listen(port, () => {
    console.log(`Microservicio inciado en el puerto ${port}`);
})

app.use(commonURLEndPoint, route)