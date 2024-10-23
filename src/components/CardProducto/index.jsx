// src/components/CardProducto.jsx
export const CardProducto = ({ producto }) => {
  return (
    <div className="card-producto">
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.category}</p>
    </div>
  );
};
