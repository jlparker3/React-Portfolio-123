import NavBar from "./components/NavBar"
import './App.css';
import Contact from "./pages/Contact"
import Project from "./pages/Project"
import AboutMe from "./pages/AboutMe"
import Footer from "./components/Footer"
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
      <NavBar />

      {window.location.pathname.includes("/aboutme") ? <AboutMe />
        : window.location.pathname.includes("/project") ? <Project />
          : window.location.pathname.includes("/contact") ? <Contact />
            : <AboutMe />}
            
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
