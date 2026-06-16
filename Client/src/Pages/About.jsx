import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-[#C84A12] mb-8">
            About Cravings
          </h1>

          <p className="text-lg leading-8">
            Cravings is a food delivery platform connecting
            customers with restaurants and riders.
            We provide fast delivery, secure payments,
            and a seamless ordering experience.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;