// src/pages/Productos/index.jsx

import { useState } from 'react';
import productos from '../../data/productos';
import { CardProducto } from '../../components/CardProducto';

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  // Filtrar productos basados en el término de búsqueda
  const filteredProducts = productos.filter((producto) => 
    producto.name.toLowerCase().includes(searchTerm.toLowerCase()) // Verifica que producto.name no sea undefined
  );

  return (
    <div className="productos-container">
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado del término de búsqueda
      />
      {filteredProducts.map((producto) => (
        <CardProducto key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Productos;
