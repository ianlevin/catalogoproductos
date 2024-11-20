import { useContext } from 'react';
import { AppContext } from '../../context/AppContext'; 
import { useNavigate } from 'react-router-dom'; 

export const CardProducto = ({ producto }) => {
  const { addToCart } = useContext(AppContext); 
  const navigate = useNavigate(); 

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart(producto); 
  };

  const handleNavigate = () => {
    navigate(`/productos/${producto.id}`); 
  };

  return (
    <div className="card-producto" onClick={handleNavigate}>
      <img src={producto.images[0]} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <button onClick={handleAddToCart}>
        + Agregar al Carrito
      </button>
    </div>
  );
};
