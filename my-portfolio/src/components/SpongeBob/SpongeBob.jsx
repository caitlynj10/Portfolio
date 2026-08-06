import { useEffect, useRef } from "react";
import p5 from "p5";
import sketch from "./spongebobSketch";

export default function SpongeBob({onButtonPress, onLoaded}) {
  const container = useRef();
  const onButtonPressRef = useRef(onButtonPress);
  const onLoadedRef = useRef(onLoaded);

  useEffect(()=>{
    onButtonPressRef.current = onButtonPress;
    onLoadedRef.current = onLoaded;
  })
  useEffect(() => {
    const p5Instance = new p5(sketch((...args) => onButtonPressRef.current?.(...args), () => onLoadedRef.current?.()), container.current);
    
    
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