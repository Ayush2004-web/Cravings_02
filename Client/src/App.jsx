import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./Components/Header"
import Register from "./Pages/Register"
import Footer from "./Components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="./register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;