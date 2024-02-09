import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Views/Home/Home";
import SignIn from "./Views/SignIn/SignIn";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Error from "./Views/Error/Error";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/signin" element={<SignIn />} />;
        <Route path="*" element={<Error />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
