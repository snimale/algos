import "./App.css";
import Navbar from "./Components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Algorithms from "./Pages/Algorithms";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="algorithms" element={<Algorithms />} />
          <Route path="algorithms/:type" element={<Algorithms />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
