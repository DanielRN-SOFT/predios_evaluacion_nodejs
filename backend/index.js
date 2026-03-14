import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const port = 3000 || process.env.PORT

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})

