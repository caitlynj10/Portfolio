import './App.css'
import Resume from "./pages/Resume.jsx";
import SpongeBobGame from './pages/SpongeBobGame.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function App() {
  
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/spongebob-game" element={<SpongeBobGame />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
    </>
  )
}

  function Header(){
    return(
      <nav className="header-nav">
        <Link  className="header-text" to="/">Caitlyn Jones</Link>
        <Link  className="nav-link" to="/resume">Resume</Link>
        <Link  className="nav-link" to="/spongebob-game">SpongeBob Game</Link>
        <Link  className="nav-link" to="/projects">Projects</Link>
        <Link  className="nav-link" to="/contact">Contact</Link>
      </nav>
  
    )
  }

