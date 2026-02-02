import './App.css'
import Resume from "./pages/Resume.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function App() {
  
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
    
    </>
  )
}


 function NavBar(){
    return(
      <nav>
        <div className="container-fluid">
        <Link to="/resume">Resume</Link>
        </div>
  </nav>
    )
  }

