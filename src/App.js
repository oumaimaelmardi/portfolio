import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import Navbar from "./components/Navbar";

import Banner from "./components/Banner";
import FormationAcad from "./components/FormationAcad";
import Portfolio from "./components/Portfolio";
import Formation from "./components/Formation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import { useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/parcours" element={<FormationAcad />} />
          <Route path="/Formation" element={<Formation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer className="fix" />
    </div>
  );
}

export default App;
