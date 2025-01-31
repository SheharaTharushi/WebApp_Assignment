import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Companies from "./components/Companies";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />

        {/* Services section with full-width white background */}
        <section className="w-screen bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Services />
          </div>
          {/* Grey separator line */}
          <div className="border-b border-gray-300"></div>
        </section>

        {/* Features Section */}
        <section className="w-screen bg-white">
          <div className="container mx-auto px-6">
            <Features />
          </div>
        </section>

        <section className="w-screen bg-white">
          <div className="container mx-auto px-6">
          <Companies />
          </div>
          <Newsletter />
        </section>
      </main>

      <div className="App">
      {/* Other components */}
      <Footer />
      </div>

    {/* <div className="container mx-auto px-8">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Companies />
      <Newsletter />
      <Footer />
    </div> */}
    </div>
  );
};

export default App;
