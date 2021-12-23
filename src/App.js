//import logo from './logo.svg';
import "./stylesheet/App.scss";

import { Link, Routes, Route } from "react-router-dom";

//componenets
import Footer from "./components/Footer";
import Header from "./components/Header";

import Curriculum from "./components/Curriculum";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
