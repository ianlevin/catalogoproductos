import './App.css';
import { Carrusel } from './components/carrusel';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const { products } = useContext(AppContext); 

  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div className="App">
      <h2>Productos Destacados</h2>
      <Carrusel productos={randomProducts} />
    </div>
  );
}

export default App;
