//import logo from './logo.svg';
import "./App.css";
import Contact from "./components/Contact";


//componenets
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Curriculum />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
