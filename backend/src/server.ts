import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend fiscal funcionando");
});

app.post("/facturar", (req, res) => {
  const items = req.body.items;

  console.log("FACTURA RECIBIDA");

  console.log(items);

  res.json({
    ok: true,
    mensaje: "Factura procesada",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor fiscal corriendo en puerto ${PORT}`);
});