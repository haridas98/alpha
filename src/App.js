import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import "./styles/css/bootstrap.min.css";
import "./styles/css/style.css";

import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import JobDetailsPage from "./components/Jobs/JobDetailsPage";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import AboutFull from "./components/About/AboutFull";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <>
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@500;700&display=swap"
        rel="stylesheet"
      />
      {/* Icon Font Stylesheet */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        rel="stylesheet"
      />{" "}
      {/*<Spinner />*/}
      <CustomNavbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutFull />} />
        <Route path="/job/:id" element={<JobDetailsPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
