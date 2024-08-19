import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";
function App() {
  return (
    <Router>
      <div className="flex justify-center h-40 relative ">
        <img src={logo} alt="" className="mr-24 " />
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Details />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
