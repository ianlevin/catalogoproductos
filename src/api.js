import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const getProducts = (limit = 0, skip = 0, select = 'title,price,image,category') => {
  return axios.get(`${API_BASE_URL}/products`, {
    params: { limit, skip, select }
  });
};


export const getCategories = () => {
  return axios.get(`${API_BASE_URL}/products/categories`);
};

export const getProductById = (id) => {
  return axios.get(`${API_BASE_URL}/products/${id}`);
};
