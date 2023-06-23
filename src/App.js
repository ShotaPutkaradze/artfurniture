import "./App.css";
import Home from "./sections/Home";
import Contact from "./sections/Contact";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import { FacebookProvider, CustomChat } from "react-facebook";

function App() {
  return (
    <FacebookProvider appId="232573182841586" chatSupport>
      <Header />
      <Home />
      <Services />
      <Projects />

      <Contact />

      <CustomChat pageId="1276302009052853" minimized={false} />
      <Footer />
    </FacebookProvider>
  );
}

export default App;
