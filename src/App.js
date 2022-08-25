import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HeaderPage from "./components/HeaderPage/header";
import Login from "./components/LoginPage/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
