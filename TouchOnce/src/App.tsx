import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total duration: preloader animation (4s) + small buffer for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // 4.5 seconds total

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Preloader /> : <Hero />;
}

export default App;
