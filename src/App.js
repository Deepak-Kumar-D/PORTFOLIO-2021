import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "./css/App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, [setLoading]);
  return (
    <div className="container">
      {loading ? (
        <div className="loading">
          <img src="/images/logo.png" className="loadingTrue" alt="loading" />
          <img src="/images/logo2.png" className="loadingFalse" alt="loading" />
        </div>
      ) : (
        <div className="full-page">
          <Navbar />

          <div className="main">
            <AboutMe />

            <Skills />

            <Project />

            <Experience />

            <Interests />

            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
