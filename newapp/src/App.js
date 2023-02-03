import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path={"/"} element={<h1>This is on Home Page</h1>} />
          <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
          <Route path={"/about"} element={<h1>This is on About Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
