import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-teal-600 text-center mb-6">
          Privacy Policy
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Last updated: December 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
          <p className="text-lg text-gray-600 mt-2">
            Welcome to ShopMate. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">2. Information We Collect</h2>
          <p className="text-lg text-gray-600 mt-2">
            We collect the following types of personal information:
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-600 mt-2">
            <li>Personal identification details such as name, email address, and phone number</li>
            <li>Payment information, including billing address and credit card details</li>
            <li>Usage data, such as how you interact with our website and services</li>
            <li>Cookies and similar technologies that help us enhance your user experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">3. How We Use Your Information</h2>
          <p className="text-lg text-gray-600 mt-2">
            We use your personal information for the following purposes:
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-600 mt-2">
            <li>To process your orders and provide the services you request</li>
            <li>To improve the performance and functionality of our website</li>
            <li>To communicate with you regarding your account, purchases, or support requests</li>
            <li>To send you promotional offers, newsletters, or other marketing communications (if you’ve opted in)</li>
            <li>To comply with legal obligations and enforce our terms of service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">4. Data Sharing and Disclosure</h2>
          <p className="text-lg text-gray-600 mt-2">
            We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-600 mt-2">
            <li>With trusted service providers who assist us in operating our website and conducting business</li>
            <li>When required by law, such as complying with a subpoena or court order</li>
            <li>In the event of a business transfer, such as a merger or acquisition</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">5. Data Security</h2>
          <p className="text-lg text-gray-600 mt-2">
            We take appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, or destruction. However, no security system is completely secure, and we cannot guarantee the absolute protection of your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">6. Your Rights and Choices</h2>
          <p className="text-lg text-gray-600 mt-2">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-600 mt-2">
            <li>Access and update your account information at any time</li>
            <li>Request the deletion of your personal data, subject to certain exceptions</li>
            <li>Opt-out of receiving marketing communications from us</li>
            <li>Exercise other rights provided by applicable law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">7. Cookies and Tracking Technologies</h2>
          <p className="text-lg text-gray-600 mt-2">
            We use cookies and similar technologies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and analyze site traffic. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">8. Changes to This Privacy Policy</h2>
          <p className="text-lg text-gray-600 mt-2">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Please review this policy periodically for any updates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">9. Contact Us</h2>
          <p className="text-lg text-gray-600 mt-2">
            If you have any questions or concerns about this privacy policy or your personal information, please contact us at <a href="https://mail.google.com/" className="text-teal-600 hover:text-teal-700">abidhasanfahim276@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
