import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/projects" element={<Projects />} />
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
