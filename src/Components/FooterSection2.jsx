import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function FooterSection() {
  return (
    <MDBFooter className="bg-teal-800 text-white mt-10">
      <MDBContainer className="p-4 pb-0">
        {/* Footer Social Media Section */}
        <section className="mb-6 flex justify-center space-x-6">
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#3b5998",
            }}
            href="https://www.facebook.com/abidhasan.fahim.1"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#55acee",
            }}
            href="https://x.com/AhFahim276"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#dd4b39",
            }}
            href="https://mail.google.com/mail/u/0/#inbox"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#ac2bac",
            }}
            href="https://www.instagram.com/abid_hasan_fahim/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#0082ca",
            }}
            href="https://www.linkedin.com/in/abid-hasan-fahim-7619551a1/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{
              backgroundColor: "#333333",
            }}
            href="https://github.com/Fahim276"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      {/* Footer Bottom Section */}
      <div className="text-center p-4" style={{ backgroundColor: "#222" }}>
        <MDBContainer>
          <MDBRow className="text-lg">
            <MDBCol md="4" className="mb-5">
              <h6 className="text-uppercase fw-bold mb-4 text-xl">About Us</h6>
              <p className="text-sm text-gray-200">
                Your one-stop shop for a wide range of high-quality products from
                Bangladesh and beyond. Offering unbeatable prices and exceptional
                customer service. Join us in exploring a unique shopping experience.
              </p>
            </MDBCol>

            <MDBCol md="2" className="mb-5">
              <h6 className="text-uppercase fw-bold mb-4 text-xl">Quick Links</h6>
              <p className="text-sm text-gray-200 hover:text-teal-300 transition duration-200 ease-in-out">
                <a href="/home" className="text-reset">
                  Home
                </a>
              </p>
              <p className="text-sm text-gray-200 hover:text-teal-300 transition duration-200 ease-in-out">
                <a href="/products" className="text-reset">
                  Shop Now
                </a>
              </p>
              <p className="text-sm text-gray-200 hover:text-teal-300 transition duration-200 ease-in-out">
                <a href="/cart" className="text-reset">
                  Cart
                </a>
              </p>
              <p className="text-sm text-gray-200 hover:text-teal-300 transition duration-200 ease-in-out">
                <a href="/contactUs" className="text-reset">
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" className="mb-5">
              <h6 className="text-uppercase fw-bold mb-4 text-xl">Customer Support</h6>
              <p className="text-sm text-gray-200 hover:text-teal-300 transition duration-200 ease-in-out">
                <a href="/contact" className="text-reset">
                  Help Center
                </a>
              </p>
              <p className="text-sm text-gray-200 hover:text-teal-300 transition duration-200 ease-in-out">
                <a href="/returns" className="text-reset">
                  Returns
                </a>
              </p>
              <p className="text-sm text-gray-200 hover:text-teal-300 transition duration-200 ease-in-out">
                <a href="/shipping" className="text-reset">
                  Shipping Info
                </a>
              </p>
              <p className="text-sm text-gray-200 hover:text-teal-300 transition duration-200 ease-in-out">
                <a href="/faq" className="text-reset">
                  FAQs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" className="mb-5">
              <h6 className="text-uppercase fw-bold mb-4 text-xl">Contact</h6>
              <p className="text-sm text-gray-200">
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Dhaka, Bangladesh
              </p>
              <p className="text-sm text-gray-200">
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                support@shopmate.com
              </p>
              <p className="text-sm text-gray-200">
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                +880 1913697658
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        {/* Copyright */}
        <div
          className="text-center p-3 mt-6"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <span className="text-sm text-gray-400">
            © 2024 ShopMate. All Rights Reserved.
          </span>
        </div>
      </div>
    </MDBFooter>
  );
}
