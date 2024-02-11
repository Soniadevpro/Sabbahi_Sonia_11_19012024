import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Views/Home/Home";

// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />;
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
export default App;
