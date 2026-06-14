import React from "react";
import bgImage from "../assets/Images/RegisterBg.png";

function Register() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Navbar */}
      <nav className="bg-orange-700 flex justify-between items-center px-14 py-4">
        <h1 className="text-white text-3xl font-bold">craving</h1>

        <div className="flex gap-4">
          <button className="text-white">Login</button>

          <button className="bg-white text-orange-700 px-5 py-2 rounded">
            Register
          </button>
        </div>
      </nav>

      {/* Register Card */}
      <div className="flex justify-end items-center min-h-[90vh] pr-20">
        <div className="bg-white w-[450px] p-10 rounded-lg shadow-xl">
          <h1 className="text-5xl font-bold text-orange-700 text-center">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-3 mb-8">
            Join us as a Customer, Restaurant, or Rider
          </p>

          <h3 className="font-semibold mb-4">Register as:</h3>

          <div className="flex gap-5 mb-6">
            <label>
              <input type="radio" name="role" defaultChecked /> Customer
            </label>

            <label>
              <input type="radio" name="role" /> Restaurant
            </label>

            <label>
              <input type="radio" name="role" /> Rider
            </label>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded px-4 py-3"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded px-4 py-3"
            />

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border rounded px-4 py-3"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded px-4 py-3"
            />

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border rounded px-4 py-3"
            />
          </div>

          <div className="mt-5 flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-sm">
              I agree to the
              <span className="text-orange-700 ml-1">
                terms and conditions
              </span>
            </p>
          </div>

          <button className="w-full bg-orange-700 text-white py-3 rounded mt-6 text-lg font-semibold">
            Register
          </button>

          <p className="text-center mt-5 text-gray-500">
            Already registered?
            <span className="text-orange-700 font-semibold ml-1 cursor-pointer">
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;