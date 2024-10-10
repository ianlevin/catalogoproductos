import Carousel from 'react-bootstrap/Carousel';

export const Carrusel = ({ productos }) => {
  return (
    <Carousel>
      {productos.map((producto) => (
        <Carousel.Item key={producto.id}>
          <img alt={producto.nombre} src={producto.imagen} className="d-block w-100" />
          <Carousel.Caption>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
