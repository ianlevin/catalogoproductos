// src/App.js
import './App.css';
import { Carrusel } from './components/carrusel';
import productos from './data/productos';

function App() {
  const randomProducts = productos.sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div className="App">
      <h2>Productos Destacados</h2>
      <Carrusel productos={randomProducts} />
    </div>
  );
}

export default App;
