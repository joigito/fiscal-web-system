export function facturar(items: any[]) {
  console.log("==== INICIO TICKET ====");

  console.log("ABRIR_TICKET");

  items.forEach((item) => {
    console.log(
      `ITEM: ${item.descripcion} | CANT: ${item.cantidad} | PRECIO: ${item.precio}`
    );
  });

  console.log("TOTAL");

  console.log("CERRAR_TICKET");

  console.log("==== FIN TICKET ====");
}