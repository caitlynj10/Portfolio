import './App.css'
import Resume from "./pages/Resume.jsx";
import SpongeBobGame from './pages/SpongeBobGame.jsx';
import AiHorrorStory from './pages/AiHorrorStory.jsx';
import Contact from './pages/Contact.jsx';
import Sudoku from './pages/Sudoku.jsx';
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";

export default function App() {
  const navigate = useNavigate();
  
  return (
    <>
      
      
    
      <Routes>
        <Route path="/" element={<Home 
        
        onButtonPress={(button)=>{
          
          if(button === "ENTER_SITE"){
            navigate("/contact");
          }

          if(button === "LEARN_MORE"){
            navigate("/about");
          }
        }}
        />}/>
        <Route path="/resume" element={<Resume />} />
        <Route path="/spongebob-game" element={<SpongeBobGame />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/ai-horror-story" element={<AiHorrorStory />} />
        <Route path="/contact" element={<Contact />} />  
        <Route path="/about" element={<About />} />     
      </Routes>
   
    
    </>
  )
}

  // function Header(){
  //   return(
  //     <nav className="header-nav">
  //       <Link  className="header-text" to="/">Caitlyn Jones</Link>
  //       <Link  className="nav-link" to="/resume">Resume</Link>
  //       <Link  className="nav-link" to="/spongebob-game">SpongeBob Game</Link>
  //       <Link  className="nav-link" to="/sudoku">Sudoku</Link>
  //       <Link  className="nav-link" to="/ai-horror-story">AI Horror Story</Link>
  //       <Link  className="nav-link" to="/contact">Contact</Link>
  //     </nav>
  
  //   )
  // }

  // function AboutMe(){
  //   return(
  //     <div>
  //       <h1 className="page-header-text">About Me</h1>
  //       <div className="row">
  //         <div className="col">
  //         <img className = "profile-picture" src="/images/ProfPic.jpg"/> 
  //         </div>
       
  //         <div className="col">
  //         <card className="about-me-card">
  //         <p className="body-text">
  //           Hi! My name is Caitlyn Jones and I am an aspiring Game and Web Developer!
  //           I just recently graduated from Brandeis University with a BS in Computer Science and Applied Math. 
  //           I have experience in Java, Python, HTML, CSS, R, Processing, and JavaScript and am currently in the process
  //           of learning C++ to create a game in Unity. 
  //         </p>
  //         <p className="body-text">
  //           I created this portfolio to show off my Frontend skills along with three web games
  //           I have made from class and personal interest. I am passionate about learning new programming languages and technologies,
  //           and I am always looking for new challenges to tackle. I am excited to continue my journey in the world of game and
  //           web development, and I am eager to see where my skills will take me in the future!
  //         </p>
  //         </card>
  //         </div>
  //       </div>
  //     </div>

      
  //   )

  // }
