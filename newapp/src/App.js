import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskScreen from "./components/TaskScreen";
import CounterComponent from "./components/CounterComponent";
import Photos from "./components/Photos";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path={"/"} element={<h1>This is on Home Page</h1>} />
          <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
          <Route path={"/about"} element={<h1>This is on About Page</h1>} />
          <Route path={"/tasks"} element={<TaskScreen />} />
          <Route path={"/counter"} element={<CounterComponent />} />
          <Route path={"/photos"} element={<Photos />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
