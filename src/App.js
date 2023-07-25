import "./App.css";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="galery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
