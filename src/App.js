import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Contact from "./Pages/Contact";
import Mentions from "./Pages/Mentions";
import Services from "./Pages/Services";
import Realisations from "./Pages/Realisations";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
