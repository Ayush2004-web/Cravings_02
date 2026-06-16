import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />

      <section className="py-24">
        <div className="max-w-xl mx-auto">

          <h1 className="text-center text-5xl font-bold text-[#C84A12] mb-10">
            Contact Us
          </h1>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border p-3 rounded"
            />

            <button
              className="w-full bg-[#C84A12] text-white py-3 rounded"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;