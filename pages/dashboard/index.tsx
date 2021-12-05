import Head from "next/head";
import Link from "next/link";
import React, { useCallback } from "react";
import CustomRoute from "../../components/CustomRoute";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useUser } from "../../context/auth";
import { getTier } from "../../utils/user";

function DashboardIndex() {
  const { user } = useUser();

  const handleSubmit = useCallback(() => {
    alert("a");
  }, []);

  return (
    <CustomRoute redirectNoAuth="/login">
      {() => {
        const tier = getTier(user);
        const expireDate = new Date(user.__user.membershipExpireDate);

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
                                      className="px-2 py-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                  type="submit"
                                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
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
                            "Free"
                          ) : (
                            <div>
                              <strong>{tier.label}</strong> membership active
                              until {expireDate.toDateString()}{" "}
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
      }}
    </CustomRoute>
  );
}

export default DashboardIndex;
