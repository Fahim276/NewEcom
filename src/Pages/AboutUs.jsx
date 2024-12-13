import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-teal-100 to-teal-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12">
        {/* Section: Introduction */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About ShopMate
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our story, mission, and values behind making shopping a better
            experience for you.
          </p>
        </div>

        {/* Section: Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate__animated animate__fadeIn animate__delay-1s">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600">
              ShopMate began with a vision: to provide customers with an
              effortless shopping experience, bringing quality products at
              affordable prices directly to your door.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We believe shopping should be a simple and enjoyable experience.
              That's why our mission is to make finding the best products easy,
              fast, and affordable. From fashion to electronics, we bring you a
              diverse collection of products, all with excellent customer service.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-shopping-cart-floating-around-a-digital-background-with-modern-elements-image_2912168.jpg"
              alt="Our Story"
              className="rounded-lg shadow-xl transition duration-300 transform motion-safe:hover:scale-105"
            />
          </div>
        </div>

        {/* Section: Our Mission */}
        <div className="mt-24 text-center animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to deliver the best products directly to you, making
            your shopping experience simple and satisfying. We pride ourselves on
            customer satisfaction, fast shipping, and competitive prices.
          </p>
        </div>

        {/* Section: Why Choose Us */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 animate__animated animate__fadeIn animate__delay-3s">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Quality Products</h3>
            <p className="mt-2 text-lg text-gray-600">
              We only partner with trusted suppliers, ensuring all our products
              meet industry standards and exceed your expectations.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Fast Shipping</h3>
            <p className="mt-2 text-lg text-gray-600">
              Our logistics team works hard to ensure that your orders reach you
              as quickly as possible, no matter where you are.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Exceptional Support</h3>
            <p className="mt-2 text-lg text-gray-600">
              We provide 24/7 customer support to assist you with any inquiries
              or issues, ensuring a smooth shopping experience.
            </p>
          </div>
        </div>

        {/* Section: Get in Touch */}
        <div className="mt-24 text-center animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-3xl font-semibold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or feedback? We’d love to hear from you! Reach out
            to us anytime and visit our{" "}
            <a
              href="/contactUs"
              className="text-teal-600 hover:text-teal-800 transition duration-300"
            >
              Contact Us
            </a>{" "}
            page for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
