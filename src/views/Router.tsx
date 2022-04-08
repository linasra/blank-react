import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "views/About/About";
import Home from "views/Home/Home";
import "index.css";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
