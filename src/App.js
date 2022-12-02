import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Myhome from "./Myhome";
import Protechroute from "./Auth/Protechroute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* Protechrouteroute */}

          <Route path="/" element={<Protechroute />}></Route>
          <Route exact path="/" element={<Myhome />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
