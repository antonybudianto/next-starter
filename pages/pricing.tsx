import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TIER = [
  {
    name: "Free",
    pricing: "$0",
    specialTag: "",
    ctaText: "Sign-in for free",
    features: ["Up to 3 workspaces", "No Ads", "Email support"],
  },
  {
    name: "Basic",
    nameColor: "text-purple-400",
    pricing: "$1",
    ctaText: "Get started",
    ctaHref: "https://gum.co/stickynoted-annual",
    features: [
      "Up to 20 workspaces",
      "Custom background",
      "Priority Email support",
    ],
  },
  {
    name: "Pro",
    nameColor: "text-gray-600",
    pricing: "$3",
    ctaText: "Get started",
    ctaHref: "https://gum.co/stickynoted-annual",
    features: [
      "Unlimited workspaces",
      "Custom background",
      "Dedicated support channel",
    ],
  },
];

function Pricing() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Pricing</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-16 pt-12 pb-10 bg-white">
        <div className="container">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-light">
            <h1 className="font-extrabold text-4xl text-gray-500">Pricing</h1>
            <p className="font-extrabold my-2 mb-4 text-purple-400">
              Ready for the next level?
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly items-center mb-3 text-center text-gray-600">
            {TIER.map((tier, i) => (
              <div
                key={i}
                className="card mb-20 lg:mb-4 border-b lg:border-b-0 pb-5 w-full lg:w-auto"
              >
                <div className="card-header">
                  <h4
                    className={`font-extrabold text-2xl ${
                      tier.nameColor || "text-green-500"
                    }`}
                  >
                    {tier.name}
                  </h4>
                </div>
                <div className="card-body pricing-body">
                  <h1 className="text-2xl">
                    {tier.pricing}{" "}
                    <small className="text-secondary">/ mo</small>
                  </h1>
                  <ul className="text-center lg:text-left mt-3 mb-4 lg:list-disc">
                    {tier.features.map((feat, fi) => (
                      <li key={fi}>{feat}</li>
                    ))}
                  </ul>
                  {tier.ctaHref ? (
                    <a
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                      href={tier.ctaHref}
                    >
                      {tier.ctaText}
                    </a>
                  ) : (
                    <Link href="/login">
                      <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        {tier.ctaText}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-gray-500 text-center mt-10 bg-purple-50 rounded-lg px-5 py-5 lg:w-6/12 mx-auto">
            <div className="mb-3">
              Get special <strong>discount</strong> for 1 year package!
            </div>
            <a
              className="gumroad-button bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="https://gum.co/stickynoted-annual"
              rel="noopener noreferrer"
              target="_blank"
            >
              Subscribe annually
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
