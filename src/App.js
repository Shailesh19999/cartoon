import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./files/Home";
import Blog from "./utils/Blogs/Blog";
import Shorts from "./utils/shorts/Shorts";
import Trending from "./utils/trending/Trending";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Home />
      <Trending />
      <Shorts />
      <Blog />
      <Footer />

      <BrowserRouter>
        {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route path="connect" element={<Connect />} />
          <Route path="sign up" element={<Sign up />} />
          <Route path="contact" element={<Login />} />
          
        </Route>
      </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
