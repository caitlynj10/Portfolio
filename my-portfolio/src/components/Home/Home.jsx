import { useEffect, useRef } from "react";
import p5 from "p5";
import sketch from "./layoutSketch";

export default function Home({onButtonPress}) {
  const container = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch(onButtonPress), container.current);
    const preventScroll = (e) => {
        if(["ArrowUp","ArrowDown","Enter"].includes(e.key)){
            e.preventDefault();
        }
    };
    window.addEventListener("keydown",preventScroll);
    return () => {
      p5Instance.remove();
      window.removeEventListener("keydown",preventScroll);
    };
  }, [onButtonPress]);

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