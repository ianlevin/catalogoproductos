

import { useParams } from "react-router-dom";
import productos from '../../data/productos';

export default function Producto() {
  const { id } = useParams();
  const producto = productos.find((item) => item.id === parseInt(id));

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="producto-detalle">
      <img src={producto.image} alt={producto.name} className="producto-imagen" />
      <div className="producto-info">
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <p><strong>Categoría:</strong> {producto.category}</p>
        <p className="precio"><strong>Precio:</strong> ${producto.price}</p>
      </div>
    </div>
  );
}
