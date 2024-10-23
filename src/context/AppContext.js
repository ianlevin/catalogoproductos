// src/context/AppContext.js
import { createContext, useState, useEffect } from 'react';
import { getCategories, getProducts } from '../api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Cargar productos inicialmente
    getProducts().then((response) => {
      setProducts(response.data.products);
    });

    // Cargar categorías y mapearlas a un formato adecuado
    getCategories().then((response) => {
      const mappedCategories = response.data.map((cat) => cat.name);
      setCategories(mappedCategories);
    });
  }, []);

  return (
    <AppContext.Provider value={{ products, categories, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};
