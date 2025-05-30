import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './components/Layout';
import About from './pages/About';
import Skill from './pages/Skill';
import Portfolio from './pages/Portfolio';
import Todolist from './pages/Todolist';
import Contact from './pages/Contact';
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/porfolio" element={<Portfolio />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
