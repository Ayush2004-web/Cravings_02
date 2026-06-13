import React from "react";
import bgImage from "../assets/food.webp"; 

const Login = () => {
  return (
    <div className="min-h-screen">
   
      <header className="bg-[#bf4308] h-16 flex items-center justify-between px-12">
        <img src="/logo.png" alt="logo" className="h-10" />

        <div className="flex items-center gap-6">
          <button className="text-white font-medium">Login</button>

          <button className="bg-white text-[#bf4308] px-5 py-2 rounded">
            Register
          </button>
        </div>
      </header>

      <div
        className="h-[calc(100vh-64px)] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="ml-24 bg-white/95  rounded-lg shadow-xl p-10">
          <h1 className="text-5xl font-bold text-[#bf4308] mb-3">
            Welcome Back
          </h1>

          <p className="text-gray-500 mb-8">
            Login to your Cravings account
          </p>

          <div className="mb-5">
            <label className="block font-semibold mb-2">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="text-[#bf4308] hover:underline">
              Forgot Password?
            </button>
          </div>

          <button className="w-full bg-[#bf4308] text-white py-3 rounded font-semibold text-lg hover:bg-[#a63a06]">
            Login
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t"></div>

            <span className="px-4 text-gray-500">
              Don't have an account?
            </span>

            <div className="flex-1 border-t"></div>
          </div>

          {/* Create Account */}
          <button className="w-full text-[#bf4308] font-semibold hover:underline">
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;