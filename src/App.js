//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main class="main main_landing">
        <div class="text-wrapper">
          <h2 class="main_text">
            <span class="main_text_span greeting">Hi there, I'm María</span>
            <span class="main_text_span job">a Frontend Developer</span>
          </h2>
        </div>
        <div class="image-wrapper"></div>
      </main>
      <footer class="footer">
        <p>
          <small>
            Developed by ©{" "}
            <a class="footer-link" href="https://github.com/mZubeldia">
              mZubeldia
            </a>
          </small>
        </p>
      </footer>
    </>
  );
}

export default App;
