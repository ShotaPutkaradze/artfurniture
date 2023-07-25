import "./App.css";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { FacebookProvider, CustomChat } from "react-facebook";

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

  return (
    <FacebookProvider appId="232573182841586" chatSupport>
      <RouterProvider router={router} />
      <CustomChat pageId="1276302009052853" minimized={false} />
    </FacebookProvider>
  );
};

export default App;
