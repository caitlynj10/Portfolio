import { useEffect, useRef } from "react";
import p5 from "p5";
import sketch from "./aboutSketch";

export default function About({onButtonPress, onLoaded}) {
  const container = useRef();
  const onButtonPressRef = useRef(onButtonPress);
  const onLoadedRef = useRef(onLoaded);

  useEffect(() => {
    onButtonPressRef.current = onButtonPress;
    onLoadedRef.current = onLoaded;
  });

  useEffect(() => {
    const p5Instance = new p5(sketch((...args) => onButtonPressRef.current?.(...args), () => onLoadedRef.current?.()), container.current);
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