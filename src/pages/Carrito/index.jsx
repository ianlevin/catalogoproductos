import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  const total = cart.reduce((acc, producto) => acc + producto.price, 0); 

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      <div className="productos-en-carrito">
        {cart.length > 0 ? (
          cart.map((producto) => (
            <div key={producto.id} className="producto-carrito">
              <img src={producto.images[0]} alt={producto.title} />
              <h3>{producto.title}</h3>
              <p>Precio: ${producto.price}</p>
              <button onClick={() => removeFromCart(producto.id)}>Eliminar</button>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío.</p>
        )}
      </div>

      <div className="total-compra">
  <h3>Total: ${total.toFixed(2)}</h3> {/* Aquí acortamos a 2 decimales */}
  <Link to="/checkout">
    <button>Ir al checkout</button>
  </Link>
</div>

    </div>
  );
};

export default Carrito;
