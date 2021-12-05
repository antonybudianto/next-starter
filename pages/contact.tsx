import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-16 pt-12 pb-20 bg-white text-gray-600">
        <div className="pb-10">
          <h1 className="font-extrabold text-4xl text-gray-600 py-5">
            Contact us
          </h1>
          <div>
            <p>
              If you have any inquiry about our service pricing or support,
              please email to{" "}
              <a href="mailto:starter-app@gmail.com" className="text-blue-500">
                starter-app@gmail.com
              </a>
            </p>
            <p>We'll get back to you within 24 hours.</p>
          </div>
          <div className="mt-5">
            <Link href="/">Back to Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
