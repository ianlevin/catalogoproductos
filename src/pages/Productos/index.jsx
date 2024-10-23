import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { CardProducto } from '../../components/CardProducto';

const Productos = () => {
  const { products, categories } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const filteredProducts = products.filter((producto) => {
    const matchesSearch = producto.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? producto.category.toLowerCase() === category.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });

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
