const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const router = require("./router")
const cors = require("cors");

const app = express();
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5173', 'https://clientes-creditos.netlify.app']
})) // aceptar peticiones de cualquier origen
app.use(express.json())
app.use(router)

app.get('/clientes', (req, res) => { res.json({ message: 'CORS enabled' }); });

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});