import React, { useState } from "react";
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
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "Georgian"
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Header
            language={language}
            handleSetLanguage={(language) => {
              setLanguage(language);
              storeLanguageInLocalStorage(language);
            }}
          />
        }
      >
        <Route index element={<Home language={language} />} />
        <Route path="galery" element={<Gallery language={language} />} />
        <Route path="contact" element={<Contact language={language} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
