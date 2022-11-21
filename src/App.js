import { Routes, Route, BrowserRouter } from "react-router-dom";
//import logo from "./images/Godrej.png";
//import home from "./images/home.jpg";
//import home1 from "./images/home1.jpg";
import "./App.css";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import Emp from "./Pages/Emp";
import Register from "./Pages/Register";
import Edit from "./Pages/Edit";
import DeptEdit from "./Pages/DeptEdit";
import Dept from "./Pages/Dept";
import DeptRegister from "./Pages/DeptRegister";
// import view from "./Pages/Details";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Details from "./Pages/Details";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Emp" element={<Emp />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/DeptEdit" element={<DeptEdit />} />
        <Route path="/Dept" element={<Dept />} />
        <Route path="/DeptRegister" element={<DeptRegister />} />
        <Route path="/view:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
