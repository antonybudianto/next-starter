import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const APP_NAME = "Starter";

function Terms() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Terms and Condition</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-16 pt-12 pb-20 bg-white text-gray-600">
        <div className="pb-10">
          <h1 className="font-extrabold text-4xl py-5">Privacy Policy</h1>
          <div>
            <div className="mt-3">
              <p>
                Your privacy is important to us. It is {APP_NAME}'s policy to
                respect your privacy regarding any information we may collect
                from you across our website,{" "}
                <a href="https://starter.io">https://starter.io</a>, and other
                sites we own and operate.
              </p>
              <p>
                We only ask for personal information when we truly need it to
                provide a service to you. We collect it by fair and lawful
                means, with your knowledge and consent. We also let you know why
                we’re collecting it and how it will be used.
              </p>
              <p>
                We only retain collected information for as long as necessary to
                provide you with your requested service. What data we store,
                we’ll protect within commercially acceptable means to prevent
                loss and theft, as well as unauthorized access, disclosure,
                copying, use or modification.
              </p>
              <p>
                We don’t share any personally identifying information publicly
                or with third-parties, except when required to by law.
              </p>
              <p>
                Our website may link to external sites that are not operated by
                us. Please be aware that we have no control over the content and
                practices of these sites, and cannot accept responsibility or
                liability for their respective privacy policies.
              </p>
              <p>
                You are free to refuse our request for your personal
                information, with the understanding that we may be unable to
                provide you with some of your desired services.
              </p>
              <p>
                Your continued use of our website will be regarded as acceptance
                of our practices around privacy and personal information. If you
                have any questions about how we handle user data and personal
                information, feel free to contact us.
              </p>
              <p>This policy is effective as of 18 August 2020.</p>
              <h2 className="font-extrabold text-2xl text-gray-600 py-5 mt-5">
                Terms and Conditions
              </h2>
              <div>
                <div>
                  By signing-in, you accept the following terms and Conditions
                </div>
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    {APP_NAME} have full rights to change your username and all
                    data if it contains forbidden words, registered brands or
                    companies, or considered as spam.
                  </li>
                  <li>
                    {APP_NAME} have full rights to remove any public content if
                    it contains improper, violent words, or spam.
                  </li>
                  <li>
                    {APP_NAME} may ban users temporarily or permanently based on
                    the violated actions.
                  </li>
                  <li>
                    Membership expiration: If membership already expired, users
                    can keep all created workspaces, along with the custom
                    background.
                  </li>
                </ul>
              </div>
            </div>
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

export default Terms;
