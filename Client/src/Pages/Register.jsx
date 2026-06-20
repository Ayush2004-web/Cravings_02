import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImage from "../assets/images/register-bg.jpg";

function Register() {
  return (
    <>
      <Header />

      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-end px-4 md:px-16 py-10"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-8">

          <h1 className="text-5xl font-bold text-center text-[#C84A12] mb-4">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Join us as a Customer, Restaurant, or Rider
          </p>

          <div className="mb-6">
            <h3 className="font-semibold mb-4">Register as:</h3>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  defaultChecked
                />
                Customer
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                />
                Restaurant
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                />
                Rider
              </label>
            </div>
          </div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-[#C84A12]"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-[#C84A12]"
            />

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-[#C84A12]"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-[#C84A12]"
            />

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-[#C84A12]"
            />

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              I agree to the
              <span className="text-[#C84A12] cursor-pointer">
                terms and conditions
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#C84A12] hover:bg-[#A93D0E] text-white font-semibold py-3 rounded-md transition"
            >
              Register
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-[#C84A12] font-semibold"
            >
              Login here
            </Link>
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;