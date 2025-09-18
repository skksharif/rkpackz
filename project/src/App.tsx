import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Leaf,
  Shield,
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Contact,
} from "lucide-react";
import RotatingGallery from "./RotatingGallery";
import ContactSection from "./components/ContactSection";

function App() {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const FloatingBag = ({ delay = 0, direction = 1 }) => (
    <div
      className={`absolute animate-float-${direction}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <ShoppingBag className="text-teal-600 opacity-20" size={24} />
    </div>
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInTop {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(20px) translateY(-10px);
          }
          50% {
            transform: translateX(0px) translateY(-20px);
          }
          75% {
            transform: translateX(-20px) translateY(-10px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(-15px) translateY(-15px);
          }
          50% {
            transform: translateX(0px) translateY(-25px);
          }
          75% {
            transform: translateX(15px) translateY(-15px);
          }
        }

        @keyframes pulse-cta {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 4px 20px rgba(247, 148, 29, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 8px 30px rgba(247, 148, 29, 0.5);
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-in-top {
          animation: slideInTop 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-fade-in-up-delay-1 {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-up-delay-3 {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        .animate-pulse-cta:hover {
          animation: pulse-cta 0.6s ease-in-out;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .text-gradient {
          background: linear-gradient(135deg, #007a84 0%, #f7941d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="animate-slide-in-top">
              <div className="flex items-center space-x-3">
                {/* Logo Image */}
                <img
                  src="/logo.jpg"
                  alt="RK Packz Logo"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                {/* Logo Text */}
                <div>
                  <h1 className="text-xl font-bold text-gray-900">RK Packz</h1>
                  <p className="text-xs text-gray-500">
                    Premium Non-Woven Bags
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                About
              </a>
              <a
                href="#categories"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Categories
              </a>
              <a
                href="#why-choose-us"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <a
              href="mailto:rkindustriespkl@gmail.com?subject=Inquiry%20about%20Bags&body=Hi%2C%0A%0AI%20have%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20the%20bags%20you%20offer.%20Please%20share%20more%20details.%0A%0AThank%20you.%0A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-teal-600 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 animate-pulse-cta">
                Get Quote
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-orange-50 pt-20">
        {/* Floating Bag Icons */}
        <div className="absolute top-20 left-10">
          <FloatingBag delay={0} direction={1} />
        </div>
        <div className="absolute top-40 right-20">
          <FloatingBag delay={2} direction={2} />
        </div>
        <div className="absolute bottom-40 left-20">
          <FloatingBag delay={4} direction={1} />
        </div>
        <div className="absolute bottom-20 right-10">
          <FloatingBag delay={1} direction={2} />
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-[10px] sm:px-6 lg:px-8 flex flex-col items-center text-center">
             <img
                  src="/logo.jpg"
                  alt="RK Packz Logo"
                  className="w-[180px] rounded-xl object-cover"
                />
          <div
            id="hero"
            className={`${isVisible.hero ? "animate-fade-in-up" : "opacity-0"}`}
          >
               
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Bags That <span className="text-gradient">Speak Your Brand</span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto ${
                isVisible.hero ? "animate-fade-in-up-delay-1" : "opacity-0"
              }`}
            >
              Non-woven bags for clothing brands, sweet shops, gifting & more.
            </p>

            <div
              className={`${
                isVisible.hero ? "animate-fade-in-up-delay-2" : "opacity-0"
              }`}
            >
              <a
                href="mailto:rkindustriespkl@gmail.com?subject=Inquiry%20about%20Bags&body=Hi%2C%0A%0AI%20have%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20the%20bags%20you%20offer.%20Please%20share%20more%20details.%0A%0AThank%20you.%0A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl animate-pulse-cta">
                  Get a Quote
                </button>
              </a>
            </div>

            {/* Hero Bags Animation */}
            <div
              className={`mt-[40px] flex justify-center space-x-8 ${
                isVisible.hero ? "animate-fade-in-up-delay-3" : "opacity-0"
              }`}
            >
              <div className="animate-bounce-gentle">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <ShoppingBag
                    className="text-teal-600 mx-auto mb-2"
                    size={48}
                  />
                  <p className="text-sm font-medium text-gray-700">
                    Clothing Brands
                  </p>
                </div>
              </div>

              <div
                className="animate-bounce-gentle"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <ShoppingBag
                    className="text-orange-500 mx-auto mb-2"
                    size={48}
                  />
                  <p className="text-sm font-medium text-gray-700">
                    Sweet Shops
                  </p>
                </div>
              </div>

              <div
                className="animate-bounce-gentle"
                style={{ animationDelay: "1s" }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <ShoppingBag
                    className="text-teal-600 mx-auto mb-2"
                    size={48}
                  />
                  <p className="text-sm font-medium text-gray-700">Gifting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div
            className={`text-center mb-16 ${
              isVisible.about ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About RK Packz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At RK Packz, we are passionate about delivering premium non-woven
              bags that are stylish, durable, and eco-friendly. Backed by our
              own state-of-the-art manufacturing unit, we ensure every bag
              reflects quality and brand identity.
            </p>
          </div>

          {/* Our Journey */}
          <div
            className={`mb-16 ${
              isVisible.about ? "animate-fade-in-up-delay-1" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Journey
            </h3>
            <p className="text-gray-600 mb-4">
              Our roots trace back to 2013, when we began as RK Industries,
              manufacturing rice bags with in-house printing. Over time, we
              expanded into a wide range of bag solutions, constantly upgrading
              our machines, materials, and processes to keep pace with evolving
              customer and market needs.
            </p>
            <p className="text-gray-600">
              This represents our commitment to delivering not just bags, but
              innovative branding solutions that help businesses stand out.
            </p>
          </div>

          {/* Our Manufacturing Excellence & Why RK Packz */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Our Manufacturing Excellence */}
            <div
              className={` ${
                isVisible.about ? "animate-fade-in-up-delay-2" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Manufacturing Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Shield className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      In-House Production
                    </h4>
                    <p className="text-gray-600">
                      Complete control over quality with our own manufacturing
                      facility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Leaf className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Eco-Friendly Materials
                    </h4>
                    <p className="text-gray-600">
                      Sustainable non-woven fabrics that are environmentally
                      conscious and reusable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Star className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Premium Quality
                    </h4>
                    <p className="text-gray-600">
                      Rigorous checks guarantee durability and superior brand
                      representation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why RK Packz */}
            <div
              className={` ${
                isVisible.about ? "animate-fade-in-up-delay-3" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Why RK Packz?
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li>
                  A legacy of trust, innovation, and flexibility since 2013.
                </li>
                <li>Trusted by over 500+ happy clients and growing.</li>
                <li>Strong legacy built over a decade of innovation.</li>
                <li>
                  Flexibility to meet custom needs and deliver unique,
                  experimental designs.
                </li>
                <li>Commitment to sustainability, quality, and style.</li>
              </ul>
            </div>
          </div>

          {/* Statistics Section */}
          <div
            className={`mt-20 ${
              isVisible.about ? "animate-fade-in-up-delay-4" : "opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-teal-50 to-orange-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-700">Happy Clients</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    10K+
                  </div>
                  <div className="text-gray-700">Bags Produced Daily</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-700">Design Options</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-700">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        id="categories"
        className="py-20 bg-gradient-to-br from-gray-50 to-teal-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${
              isVisible.categories ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Categories
            </h2>
            <p className="text-xl text-gray-600">
              Specialized bags for every industry and occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 align-items-stretch">
            {[
              {
                title: "Clothing Brands",
                desc: "Premium bags for fashion retailers",
                color: "teal",
                icon: ShoppingBag,
                delay: 0,
              },
              {
                title: "Sweet Shops",
                desc: "Food-safe bags for confectioneries",
                color: "orange",
                icon: ShoppingBag,
                delay: 1,
              },
              {
                title: "Gifting",
                desc: "Elegant bags for special occasions",
                color: "teal",
                icon: ShoppingBag,
                delay: 2,
              },
              {
                title: "All-Purpose",
                desc: "Versatile bags for any business purpose",
                color: "orange",
                icon: ShoppingBag,
                delay: 3,
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                  isVisible.categories ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${category.delay * 0.1}s` }}
              >
                <div
                  className={`bg-${
                    category.color === "teal" ? "teal" : "orange"
                  }-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <category.icon
                    className={`text-${
                      category.color === "teal" ? "teal" : "orange"
                    }-600`}
                    size={32}
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {category.desc}
                </p>

                <a href="#gallery">
                  <button
                    className={`w-full bg-gradient-to-r from-${
                      category.color === "orange" ? "orange" : "orange"
                    }-500 to-${
                      category.color === "orange" ? "orange" : "orange"
                    }-500 text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    View Collection
                  </button>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center m-[60px]" id="gallery"></div>
        </div>
      </section>
      <div className="text-center m-[30px]"></div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center py-[10px]">
        Our Sample Products
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center px-[10px]">
        Leading manufacturer of premium non-woven bags with our own
        state-of-the-art manufacturing unit, dedicated to quality and
        eco-friendly solutions.
      </p>

      {/*Gallery*/}

      <RotatingGallery />

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${
              isVisible["why-choose-us"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose RK Packz?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for premium non-woven bag solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Eco-Friendly",
                desc: "Sustainable materials that reduce environmental impact while maintaining premium quality",
                icon: Leaf,
                color: "teal",
                delay: 0,
              },
              {
                title: "Durable Quality",
                desc: "Superior strength and longevity that ensures your brand makes a lasting impression",
                icon: Shield,
                color: "orange",
                delay: 1,
              },
              {
                title: "Custom Branding",
                desc: "Personalized designs and printing options to perfectly represent your brand identity",
                icon: Star,
                color: "teal",
                delay: 2,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center group ${
                  isVisible["why-choose-us"]
                    ? "animate-fade-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${feature.delay * 0.2}s` }}
              >
                <div
                  className={`bg-gradient-to-br from-${
                    feature.color === "teal" ? "teal" : "orange"
                  }-100 to-${
                    feature.color === "teal" ? "teal" : "orange"
                  }-200 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className={`text-${
                      feature.color === "teal" ? "teal" : "orange"
                    }-600`}
                    size={40}
                  />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection isVisible={isVisible}  />
  

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="./logo.jpg" alt="logo" className="w-[80px] " />
                <div>
                  <h1 className="text-xl font-bold">RK Packz</h1>
                  <p className="text-sm text-gray-400">
                    Premium Non-Woven Bags
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 font-medium">
                "Bags That Speak Your Brand"
              </p>

              <p className="text-gray-400">
                Leading manufacturer of premium non-woven bags with a commitment
                to quality and sustainability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#categories"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Our Products
                </a>
                <a
                  href="#why-choose-us"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <div className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors cursor-pointer">
                  <Facebook size={20} />
                </div>
                <div className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors cursor-pointer">
                  <Instagram size={20} />
                </div>
                <div className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors cursor-pointer">
                  <Twitter size={20} />
                </div>
              </div>

              <div className="text-gray-400">
                <p>📧 rkindustriespkl@gmail.com</p>
                <p>📱 +91 77999 88088</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 RK Packz. All rights reserved. | Designed with ❤️ for your
              brand success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
