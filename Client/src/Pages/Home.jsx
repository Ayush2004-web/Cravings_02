import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen">
      
      <nav className="bg-orange-700 px-12 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold"> <img className="h-10 w-20" src="logo.png" alt="" />
        </h1>

        <div className="flex gap-5 items-center">
          <Link to="/Login" className="hover:text-gray-200">
            Login
          </Link>

          <button className="bg-white text-orange-700 px-4 py-2 rounded">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
        }}
      >
        <div className="text-center text-white bg-black/40 p-10 rounded-lg">
          <h1 className="text-6xl font-bold">
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>

          <p className="mt-6 text-2xl">
            Order from thousands of restaurants
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-orange-600 px-8 py-3 rounded text-lg">
              Sign Up
            </button>

            <button className="bg-white text-black px-8 py-3 rounded text-lg">
              Order Now
            </button>
          </div>

          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            className="mt-8 w-full max-w-3xl px-5 py-4 rounded text-black outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;