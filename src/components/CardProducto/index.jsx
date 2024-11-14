import { useContext } from 'react';
import { AppContext } from '../../context/AppContext'; 

export const CardProducto = ({ producto }) => {
  const { addToCart } = useContext(AppContext); 

  const handleAddToCart = () => {
    addToCart(producto); 
  };

  return (
    <div className="card-producto">
      <img src={producto.imageUrl} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <button onClick={handleAddToCart}>
        + Agregar al Carrito
      </button>
    </div>
  );
};
