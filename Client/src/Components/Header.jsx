import React from "react";
const Header = () => {
  return (
    <header className="bg-[#bf4308] h-12 flex items-center justify-between px-14">
      
      <div>
        <img
          src="/logo.webp"
          alt="Craving"
          className="h-12 object-contain"
        />
      </div>

      <div className="flex items-center gap-8">
        <button className="text-white text-lg font-semibold hover:text-gray-200 transition">
          Login
        </button>

        <button className="bg-white text-[#bf4308] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
          Register
        </button>
      </div>
 
    </header>
  );
};

export default Header;