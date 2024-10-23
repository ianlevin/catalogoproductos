// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './context/AppContext';
import Home from './App';
import Productos from './pages/Productos';
import Producto from './pages/Producto';
import Contacto from './pages/Contacto';
import Layout from './pages/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='productos' element={<Productos/>}/>
            <Route path='productos/:id' element={<Producto/>}/>
            <Route path='contacto' element={<Contacto/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
