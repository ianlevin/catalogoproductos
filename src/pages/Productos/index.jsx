// src/pages/Productos/index.jsx

import { useState } from 'react';
import productos from '../../data/productos';
import { CardProducto } from '../../components/CardProducto';

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(''); // Estado para el filtro de categoría

  // Filtrar productos
  const filteredProducts = productos.filter((producto) => {
    const matchesSearch = producto.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? producto.category === category : true;
    return matchesSearch && matchesCategory;
  });

  // Obtener categorías únicas para el filtro
  const categories = [...new Set(productos.map((producto) => producto.category))];

  return (
    <div className="productos-container">
      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Buscar productos..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Todas las Categorías</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="productos-grid">
        {filteredProducts.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
