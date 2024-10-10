// src/components/CardProducto/index.js

import { useNavigate } from "react-router-dom";

export const CardProducto = ({ producto }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/productos/${producto.id}`);
  };

  return (
    <div className="card-producto" onClick={goToDetails}>
      <img src={producto.image} alt={producto.name} />
      <h3>{producto.name}</h3>
      <p>{producto.category}</p>
      <p className="precio">${producto.price}</p>
    </div>
  );
};
