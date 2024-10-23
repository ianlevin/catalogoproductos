import { useNavigate } from 'react-router-dom';

export const CardProducto = ({ producto }) => {
  const navigate = useNavigate();
  const imageUrl = producto.images && producto.images.length > 0 ? producto.images[0] : null;

  const handleClick = () => {
    navigate(`/productos/${producto.id}`);
  };

  return (
    <div className="card-producto" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={producto.title} 
        />
      ) : (
        <div className="no-image">Imagen no disponible</div>
      )}
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.category}</p>
    </div>
  );
};
