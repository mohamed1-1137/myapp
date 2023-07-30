import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Works from "./components/Works" 
import Tech from "./components/Tech"
import StarsCanvas from "./components/canvas/Stars"


const App=()=> {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary ">
      <div className=" bg-hero-pattern z-20 bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Tech/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
    
  )
}

export default App
