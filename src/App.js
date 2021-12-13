import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Usuarios from './pages/Usuarios';
import ListaProyectos from './pages/ListaProyectos';
import MisProyectos from './pages/MisProyectos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/usuarios' element={<Usuarios />} />
          <Route path='/listaproyectos' element={<ListaProyectos />} />
          <Route path='/misproyectos' element={<MisProyectos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
