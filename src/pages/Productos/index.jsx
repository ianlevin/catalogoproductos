// src/pages/Productos/index.jsx
import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { CardProducto } from '../../components/CardProducto';
import { getProducts } from '../../api';

const Productos = () => {
  const { products, categories, setProducts } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  // Filtrar productos localmente
  const filteredProducts = products.filter((producto) => {
    const matchesSearch = producto.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? producto.category.toLowerCase() === category.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });

  // Cambiar categoría y cargar productos filtrados
  const handleCategoryChange = async (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    if (selectedCategory) {
      // Filtrar productos por categoría usando la API
      try {
        const response = await getProducts(20, 0, 'title,price,category');
        const filteredByCategory = response.data.products.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );
        setProducts(filteredByCategory);
      } catch (error) {
        console.error('Error fetching filtered products:', error);
      }
    } else {
      // Cargar todos los productos si no hay filtro
      try {
        const response = await getProducts(20);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching all products:', error);
      }
    }
  };

  return (
    <div className="productos-container">
      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Buscar productos..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        
        <select onChange={handleCategoryChange} value={category}>
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
