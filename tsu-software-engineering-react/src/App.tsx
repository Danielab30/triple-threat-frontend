import "./App.css";
import About from "./Views/About";
import Home from "./Views/Home";
import SearchClient from "./Views/SearchClient";
import AddClient from "./Views/AddClient";
import AccessLog from "./Views/AccessLog";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="search" element={<SearchClient/>}></Route>
            <Route path="add-client" element={<AddClient/>}></Route>
            <Route path="access-log" element={<AccessLog/>}></Route>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
