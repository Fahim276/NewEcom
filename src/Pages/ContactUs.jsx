import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-teal-100 to-teal-50 min-h-screen">
      <div className="container mx-auto py-16 px-6">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 animate__animated animate__fadeIn">
          Get in Touch
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          Have questions or need assistance? We’re here to help! Reach out to
          us and we'll get back to you as soon as possible. Your feedback is
          important to us!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 animate__animated animate__fadeIn animate__delay-2s">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-300 transform motion-safe:hover:scale-105"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-300 transform motion-safe:hover:scale-105"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-300 transform motion-safe:hover:scale-105"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 transform motion-safe:hover:scale-105 motion-safe:active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div className="bg-white shadow-xl rounded-lg p-8 animate__animated animate__fadeIn animate__delay-3s">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Address</h2>
              <p className="text-gray-600">
                123 E-Shop Street, Suite 100
                <br />
                Commerce City, CA 12345
                <br />
                Bangladesh
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-8 animate__animated animate__fadeIn animate__delay-4s">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Customer Support
              </h2>
              <p className="text-gray-600">Phone: +880 1XXX-XXXXXX</p>
              <p className="text-gray-600">Email: support@eshop.com</p>
              <p className="text-gray-600">
                Available: Sunday - Thursday, 9am - 6pm
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-8 animate__animated animate__fadeIn animate__delay-5s">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h2>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-teal-600 hover:text-teal-800 transition duration-300 motion-safe:hover:scale-105"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-teal-600 hover:text-teal-800 transition duration-300 motion-safe:hover:scale-105"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-600 transition duration-300 motion-safe:hover:scale-105"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
