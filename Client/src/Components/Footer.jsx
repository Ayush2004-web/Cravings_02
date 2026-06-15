import logo from "../assets/Images/logo.png"; 

function Footer() {
  return (
    <footer className="bg-[#3f4049] text-white">
      {/* Top Border */}
      <div className="h-1 bg-orange-700"></div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Tagline */}
        <p className="text-center text-lg mb-12">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Craving Logo"
              className="w-36 h-36 rounded-full bg-white p-2"
            />
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-lg">
              <li className="cursor-pointer hover:text-orange-400">Home</li>
              <li className="cursor-pointer hover:text-orange-400">About</li>
              <li className="cursor-pointer hover:text-orange-400">
                Order Now
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-5">
              For Restaurants
            </h3>

            <ul className="space-y-3 text-lg">
              <li className="cursor-pointer hover:text-orange-400">
                Partner With Us
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                Restaurant Dashboard
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-3xl font-semibold mb-5">
              For Riders
            </h3>

            <ul className="space-y-3 text-lg">
              <li className="cursor-pointer hover:text-orange-400">
                Become a Rider
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                Rider Dashboard
              </li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-3xl font-semibold mb-5">
              Feedback & Support
            </h3>

            <ul className="space-y-3 text-lg">
              <li className="cursor-pointer hover:text-orange-400">
                Submit Feedback
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                Help Center
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-400 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-lg">
            © 2026 Cravings. All rights reserved.
          </p>

          <div className="flex gap-8 text-lg">
            <a href="#" className="hover:text-orange-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-orange-400">
              Terms of Service
            </a>

            <a href="#" className="hover:text-orange-400">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;