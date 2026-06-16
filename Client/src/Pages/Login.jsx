import Header from "../components/Header";
import Footer from "../components/Footer";
import bg from "../assets/images/login-bg.jpg";

function Login() {
  return (
    <>
      <Header />

      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-white/95 w-[420px] p-8 rounded-xl shadow-xl">

          <h1 className="text-4xl font-bold text-center text-[#C84A12] mb-6">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
          />

          <button className="w-full bg-[#C84A12] text-white py-3 rounded">
            Login
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;