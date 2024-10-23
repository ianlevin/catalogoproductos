import Carousel from 'react-bootstrap/Carousel';

export const Carrusel = ({ productos }) => {
  return (
    <Carousel>
      {productos.map((producto) => (
        <Carousel.Item key={producto.id}>
          <img
            src={producto.image} // Asegúrate de que esta propiedad se llama `image` en `productos.js`
            alt={producto.name}
            className="d-block w-100"
            style={{ maxHeight: '400px', objectFit: 'contain' }} // Ajusta el tamaño y evita pixeleo
          />
          <Carousel.Caption>
            <h3>{producto.name}</h3>
            <p>{producto.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
