import "./App.css";
import Home from "./sections/Home";
import Contact from "./sections/Contact";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Projects from "./sections/Projects";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
