import { useEffect, useRef } from "react";
import p5 from "p5";
import sketch from "./sudokuSketch";

export default function Sudoku() {
  const container = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch(), container.current);
    
    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div
      ref={container}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        
      }}
    />
  );
}