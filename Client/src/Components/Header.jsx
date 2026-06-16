import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="bg-[#C84A12] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-12"
          />
        </Link>

        <nav className="flex gap-8 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-white text-[#C84A12] px-4 py-2 rounded"
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;