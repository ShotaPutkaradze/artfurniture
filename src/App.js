import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./layouts/Header";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="./" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
