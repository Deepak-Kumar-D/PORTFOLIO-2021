import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "./css/App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <img src="/images/BG3.jpg" className="bg-img" alt="bg" />

      <div className="main">
        <AboutMe />

        <Skills />

        <Project />

        <Experience />

        <Interests />

        <Contact />
      </div>
    </div>
  );
}

export default App;
