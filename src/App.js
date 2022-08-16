import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/home";
import NoPage from "./Pages/noPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
