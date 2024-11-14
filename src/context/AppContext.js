import { createContext, useState, useEffect } from 'react';
import { getCategories, getProducts } from '../api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []); 

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data.products);
    });

    getCategories().then((response) => {
      const mappedCategories = response.data.map((cat) => cat.name);
      setCategories(mappedCategories);
    });
  }, []);

  const addToCart = (producto) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, producto]; 
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };

  
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id); 
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };


  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => 
        item.id === id ? { ...item, quantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <AppContext.Provider value={{ products, categories, cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </AppContext.Provider>
  );
};
