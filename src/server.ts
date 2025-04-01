import app from "./config"
import './steamMicroservices'

const port = 3000

app.listen(port, () => {
    console.log(`Microservicio inciado en el puerto ${port}`);
})