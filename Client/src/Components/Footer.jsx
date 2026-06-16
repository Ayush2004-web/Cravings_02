import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-[#3f404a] text-white mt-0">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Tagline */}
        <div className="text-center mb-10 text-lg">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-5 gap-10">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Cravings"
              className="w-28 h-28 rounded-full bg-white p-2"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-3xl font-semibold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3 text-lg">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/restaurants">Order Now</Link>
              </li>
            </ul>
          </div>

          {/* Restaurants */}
          <div>
            <h2 className="text-3xl font-semibold mb-5">
              For Restaurants
            </h2>

            <ul className="space-y-3 text-lg">
              <li>Partner With Us</li>
              <li>Restaurant Dashboard</li>
            </ul>
          </div>

          {/* Riders */}
          <div>
            <h2 className="text-3xl font-semibold mb-5">
              For Riders
            </h2>

            <ul className="space-y-3 text-lg">
              <li>Become a Rider</li>
              <li>Rider Dashboard</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-3xl font-semibold mb-5">
              Feedback & Support
            </h2>

            <ul className="space-y-3 text-lg">
              <li>Submit Feedback</li>
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-400" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-lg">
            © 2026 Cravings. All rights reserved.
          </p>

          <div className="flex gap-8 text-lg">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Site Map</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;