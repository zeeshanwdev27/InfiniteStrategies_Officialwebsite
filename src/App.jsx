import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Home from "./pages/Home"


function App() {
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // adjust smoothness
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // optional easing curve
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
    <Home/>
    </>
  )
}

export default App
