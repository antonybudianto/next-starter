import Head from "next/head";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useUser } from "../context/auth";
import {
  checkUsername,
  getTier,
  getUsername,
  saveUsername,
} from "../utils/user";

function DashboardView() {
  const { user } = useUser();
  const tier = getTier(user);
  const expireDate = new Date(user.__user.membershipExpireDate);

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const loadUsername = async () => {
    try {
      const res = await getUsername(user);
      if (res && res.data) {
        setUsername(res.data.username);
        // @ts-ignore
        window.__username = res.data.username;
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSuccess("");
      setUsernameErr("");
      setLoading(true);
      try {
        const available = await checkUsername(username);
        if (available) {
          await saveUsername(user, username);
          // @ts-ignore
          window.__username = username;
          setSuccess("Account is saved!");
          // @ts-ignore
        } else if (window.__username !== username) {
          setUsernameErr("Username is not available");
        } else {
          setUsernameErr("This is your current username");
        }
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    },
    [username]
  );

  useEffect(() => {
    loadUsername();
  }, []);

  console.log(tier);
  return (
    <div className="bg-gray-50 min:h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-16 pt-12 pb-10 bg-white text-gray-600">
        <div className="pb-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 lg:mb-0">
            <h1 className="font-extrabold text-4xl text-gray-600 py-5">
              Dashboard
            </h1>
            <Link href="/">
              <a className="text-blue-500">{"<"} Back to Home</a>
            </Link>
          </div>
          <div>
            <div>
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-0">
                      <h3 className="text-lg font-medium leading-6 text-purple-500">
                        Personal Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Please fill your personal information here
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Username
                              </label>
                              <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="off"
                                disabled={loading}
                                value={username}
                                onChange={handleChangeUsername}
                                className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <div
                                className={`text-xs pt-2  h-1 ${
                                  success ? "text-green-700" : "text-red-700"
                                }`}
                              >
                                {success ? success : usernameErr}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                          >
                            {loading ? (
                              <FaSpinner className="icon-spin mr-1" />
                            ) : (
                              ""
                            )}{" "}
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="md:col-span-1 mt-10 md:mt-0">
                    <div className="px-0">
                      <h3 className="text-lg font-medium leading-6 text-purple-500">
                        Membership
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Details about your membership
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    {tier.type === "free" ? (
                      <div>
                        <div>
                          <strong>Free</strong>
                        </div>
                        <div className="mt-3 text-gray-500">
                          <Link href="/pricing">
                            <a className="text-blue-500 hover:underline">
                              Upgrade
                            </a>
                          </Link>{" "}
                          your account to get:
                          <ul className="pl-4 mt-1 list-disc">
                            <li>Additional workspaces</li>
                            <li>Custom workspace background</li>
                            <li>Upcoming new features</li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <strong>{tier.label}</strong> membership active until{" "}
                        {expireDate.toDateString()}{" "}
                        {expireDate.toLocaleTimeString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardView;
