import Header from "../components/Header";
import Footer from "../components/Footer";

import heroImage from "../assets/images/hero.jpg";

import {
  FaSearch,
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaUtensils,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="h-[90vh] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">

          <h1 className="text-5xl md:text-7xl font-bold text-center">
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>

          <p className="mt-6 text-xl text-center">
            Order from thousands of restaurants and get it delivered to your
            doorstep
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#C84A12] hover:bg-[#a83d0f] px-8 py-3 rounded-md font-semibold">
              Sign Up
            </button>

            <button className="bg-white text-black px-8 py-3 rounded-md font-semibold">
              Order Now
            </button>
          </div>

          {/* Search */}
          <div className="mt-10 w-full max-w-4xl">
            <div className="bg-white rounded-md flex items-center px-4 py-4">

              <FaSearch className="text-gray-500 text-xl" />

              <input
                type="text"
                placeholder="Search restaurants or dishes..."
                className="w-full ml-3 outline-none text-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="bg-[#C84A12] py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-5xl text-white font-bold mb-12">
            Featured Restaurants
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-60 bg-gray-300 flex items-center justify-center">
                  Restaurant Image
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-bold">
                    Restaurant Name
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Fast Food • Pizza • Burger
                  </p>

                  <button className="mt-4 bg-[#C84A12] text-white px-5 py-2 rounded">
                    Order Now
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-100">

        <h2 className="text-center text-5xl font-bold mb-12">
          Popular Categories
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4">

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <FaPizzaSlice className="mx-auto text-5xl text-[#C84A12]" />
            <h3 className="mt-4 text-xl font-bold">
              Pizza
            </h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <FaHamburger className="mx-auto text-5xl text-[#C84A12]" />
            <h3 className="mt-4 text-xl font-bold">
              Burger
            </h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <FaIceCream className="mx-auto text-5xl text-[#C84A12]" />
            <h3 className="mt-4 text-xl font-bold">
              Dessert
            </h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <FaUtensils className="mx-auto text-5xl text-[#C84A12]" />
            <h3 className="mt-4 text-xl font-bold">
              Indian Food
            </h3>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-center text-5xl font-bold mb-12">
            Why Choose Cravings?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-lg p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Fast Delivery
              </h3>

              <p>
                Get your food delivered within minutes.
              </p>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Best Restaurants
              </h3>

              <p>
                Choose from top-rated restaurants near you.
              </p>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Secure Payments
              </h3>

              <p>
                Multiple secure payment methods available.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;