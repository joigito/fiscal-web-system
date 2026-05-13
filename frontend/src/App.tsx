import { useState } from "react";

type Item = {
  descripcion: string;
  cantidad: number;
  precio: number;
};

function App() {
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(0);

  const [items, setItems] = useState<Item[]>([]);

  function agregarItem() {
    if (!descripcion || precio <= 0) return;

    const nuevoItem: Item = {
      descripcion,
      cantidad,
      precio,
    };

    setItems([...items, nuevoItem]);

    setDescripcion("");
    setCantidad(1);
    setPrecio(0);
  }

  const total = items.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial",
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <h1>Sistema Fiscal</h1>

      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <input
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(Number(e.target.value))}
        />

        <button onClick={agregarItem}>
          Agregar
        </button>
      </div>

      <table width="100%" border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio}</td>
              <td>
                $
                {item.cantidad * item.precio}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total: ${total}</h2>

      <button
        style={{
          marginTop: 20,
          padding: 15,
          fontSize: 20,
        }}
      >
        FACTURAR
      </button>
    </div>
  );
}

export default App;