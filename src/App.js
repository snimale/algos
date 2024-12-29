import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Algorithms from "./Pages/Algorithms";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />;
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/algorithms/:type" element={<Algorithms />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
