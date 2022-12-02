import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./files/Home";
import Blog from "./utils/Blogs/Blog";
import Shorts from "./utils/shorts/Shorts";
import Trending from "./utils/trending/Trending";

const Myhome = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <Trending />
      <Shorts />
      <Blog />
      <Footer />
    </div>
  );
};

export default Myhome;
