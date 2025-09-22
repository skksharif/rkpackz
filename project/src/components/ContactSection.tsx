import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactSection({ isVisible }: { isVisible: any }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",   // ✅ added phone
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    // WhatsApp text message formatting
    const whatsappMessage = `Hello, I would like to get in touch.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;

    // Correct wa.me link
    const whatsappUrl = `https://wa.me/917799988088?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-teal-600 to-orange-500 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center mb-16 ${
            isVisible.contact ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-teal-100">
            Ready to elevate your brand with premium non-woven bags?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div
            className={`${
              isVisible.contact ? "animate-fade-in-up-delay-1" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-6">
              {/* Address */}
              <a
                href="https://maps.app.goo.gl/CqmVwezGViaMRvbX7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <div className="text-teal-100 hover:underline">
                    7/126 Canal road, Near Palakol, Jinnuru - 534265
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+917799988088" className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <div className="text-teal-100 hover:underline">
                    +91 77999 88088
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:rkindustriespkl@gmail.com"
                className="flex items-start space-x-4"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <div className="text-teal-100 hover:underline">
                    rkindustriespkl@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            className={`${
              isVisible.contact ? "animate-fade-in-up-delay-2" : "opacity-0"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Ready to Start?</h3>
              <p className="mb-8 text-teal-100">
                Fill out the form below and we’ll get back to you via WhatsApp!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white"
                />
                {/* ✅ Phone input */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-white text-teal-600 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  <MessageCircle size={20} /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
