
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './App.js';
import Productos from './pages/Productos/index.jsx';
import Producto from './pages/Producto/index.jsx';
import Contacto from './pages/Contacto/index.jsx';
import Layout from './pages/layout.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='productos' element={<Productos/>}/>
          <Route path='productos/:id' element={<Producto/>}/> {/* Ruta dinámica para producto */}
          <Route path='contacto' element={<Contacto/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);

reportWebVitals();
