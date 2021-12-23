//import logo from './logo.svg';
import "./App.css";


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
      <Home />
      <Curriculum />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
