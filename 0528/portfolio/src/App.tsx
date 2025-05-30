import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
