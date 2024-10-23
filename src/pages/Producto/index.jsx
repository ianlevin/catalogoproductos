// src/pages/Producto/index.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api';

export default function Producto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Cargar los detalles del producto desde la API
    getProductById(id)
      .then((response) => setProducto(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="producto-detalle">
      <img src={producto.image} alt={producto.title} className="producto-imagen" />
      <div className="producto-info">
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p><strong>Categoría:</strong> {producto.category}</p>
        <p className="precio"><strong>Precio:</strong> ${producto.price}</p>
      </div>
    </div>
  );
}
