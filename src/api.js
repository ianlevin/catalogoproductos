// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

// Obtener productos con parámetros opcionales para paginación y selección de campos
export const getProducts = (limit = 0, skip = 0, select = 'title,price,image,category') => {
  return axios.get(`${API_BASE_URL}/products`, {
    params: { limit, skip, select }
  });
};

// Obtener categorías de productos
export const getCategories = () => {
  return axios.get(`${API_BASE_URL}/products/categories`);
};

// Obtener un producto específico por su ID
export const getProductById = (id) => {
  return axios.get(`${API_BASE_URL}/products/${id}`);
};
