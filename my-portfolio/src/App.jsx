import './App.css'
import { useNavigate, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Sudoku from "./components/Sudoku/Sudoku";
import SpongeBob from "./components/SpongeBob/SpongeBob";
import Explore from "./components/Explore/Explore";

export default function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isPoweringOff, setIsPoweringOff] = useState(false);

  const handleNavigate = (path) => {
    if(path === "/"){
      setIsPoweringOff(true);
      setTimeout(() =>{
        setIsPoweringOff(false);
        navigate("/");
      }, 3000);
    }
    else{
      setIsLoading(true);
      navigate(path);
    }
    
  };

  const handlePageReady = () => {
    setIsLoading(false);
  };
  
  return (
    <>
      
      {isLoading && (
        <div className="global-loader">
          <h1>Loading...</h1>
        </div>
      )}

      {isPoweringOff && (
        <div className="global-loader">
          <h1>Powering off...</h1>
        </div>
      )}
    
      <Routes>
        <Route path="/" element={<Home 
        onLoaded={handlePageReady}
        onButtonPress={(button)=>{
          
          if(button === "ENTER_SITE"){
            handleNavigate("/explore");
          }

          if(button === "LEARN_MORE"){
            handleNavigate("/about");
          }
          if(button === "HOME"){
            handleNavigate("/explore");
          }

          if(button === "ABOUT"){
            handleNavigate("/about");
          }

          if(button === "SUDOKU"){
            handleNavigate("/sudoku");
          }

          if(button === "SPONGEBOB_GAME"){
            handleNavigate("/spongebob");
          }
          
        }}
        />}/>

        <Route path="/about" element={<About 
        onLoaded={handlePageReady}
        onButtonPress={(button)=>{
          
          if(button === "ENTER_SITE"){
            handleNavigate("/explore");
          }
          
          if(button === "SUDOKU"){
            handleNavigate("/sudoku");
          }

          if(button === "SPONGEBOB_GAME"){
            handleNavigate("/spongebob");
          }

          if(button === "POWER_OFF"){
            handleNavigate("/");
          }

          if(button === "HOME"){
            handleNavigate("/explore");
          }
          if(button === "ABOUT"){
            handleNavigate("/about");
          }

          

        }}
        />}/>
        <Route path="/sudoku" element={<Sudoku 
        onLoaded={handlePageReady}
        onButtonPress={(button)=>{
          if(button === "POWER_OFF"){
            handleNavigate("/");
          }
          if(button === "HOME"){
            handleNavigate("/explore");
          }
          if(button === "ABOUT"){
            handleNavigate("/about");
          }

          if(button === "SUDOKU"){
            handleNavigate("/sudoku");
          }

          if(button === "SPONGEBOB_GAME"){
            handleNavigate("/spongebob");
          }
        }}
        />} />
        <Route path="/spongebob" element={<SpongeBob
        onLoaded={handlePageReady}
        onButtonPress={(button)=>{
          if(button === "POWER_OFF"){
            handleNavigate("/");
          }
          if(button === "HOME"){
            handleNavigate("/explore");
          }
          if(button === "ABOUT"){
            handleNavigate("/about");
          }

          if(button === "SUDOKU"){
            handleNavigate("/sudoku");
          }

          if(button === "SPONGEBOB_GAME"){
            handleNavigate("/spongebob");
          }
        }}
        />}/>

        <Route path="/explore" element={<Explore
        onLoaded={handlePageReady}
        onButtonPress={(button)=>{
          if(button === "POWER_OFF"){
            handleNavigate("/");
          }
          if(button === "SUDOKU"){
            handleNavigate("/sudoku");
          }

          if(button === "SPONGEBOB_GAME"){
            handleNavigate("/spongebob");
          }

          if(button === "ABOUT"){
            handleNavigate("/about");
          }

          if(button === "HOME"){
            handleNavigate("/explore");
          }

        }}
        />}/>
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
