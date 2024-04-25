import db from "@/libs/db";

async function productos() {
  const productos = await db.productos.findMany();
  console.log(productos);

  return (
    <div>
      <h1>Productos</h1>
      <table>
        <thead>
          <tr>
            <th>ID Producto</th>
            <th>Número ONU</th>
            <th>Nombre de la Sustancia</th>
            <th>Clase de Peligro</th>
            <th>Grupo de Embalaje</th>
            <th>Precauciones Especiales</th>
            <th>Densidad</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id_producto}>
              <td>{producto.id_producto}</td>
              <td>{producto.no_onu}</td>
              <td>{producto.nombre_sustancia}</td>
              <td>{producto.clase_peligro}</td>
              <td>{producto.grupo_embalaje}</td>
              <td>{producto.precauciones_especiales}</td>
              <td>{producto.densidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default productos;
