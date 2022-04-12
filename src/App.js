import "./App.css";
import About from "./comps/About";
import Contact from "./comps/Contact";
import Home from "./comps/Home";
import MainNav from "./comps/MainNav";
import Project from "./comps/Project";

function App() {
  return (
    <div>
      <MainNav />
      <Home />
      <Project />
      <About />
      <Contact />
    </div>
  );
}

export default App;
