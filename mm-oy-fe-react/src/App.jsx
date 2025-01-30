import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Review from "./components/Review";
import SecondPage from "./components/SecondPage";
import Home from "./components/Home";
import Values from "./components/Values";

function App() {
  const [theme, setTheme] = React.useState("light");

  return (
    <>
      <div data-bs-theme={theme === "light" ? "light" : "dark"} id="root">
        <Header setTheme={setTheme} theme={theme} />
        <div className="main-content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mainPage" element={<MainPage />} />
              <Route path="/review" element={<Review />} />
              <Route path="/secondPage" element={<SecondPage />} />
              <Route path="/Values" element={<Values />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

