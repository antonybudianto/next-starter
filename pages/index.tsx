import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home - Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-8 mb-8 sm:mt-14 sm:mb-10">
              Welcome
            </h1>
            <p className="text-gray-500 text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
              Starter for any use case
            </p>
            <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              <a
                className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 shadow-lg shadow-gray-500/50 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="/docs"
              >
                Get started
              </a>
              <a
                className="w-full sm:w-auto flex-none bg-purple-400 hover:bg-purple-500 shadow-lg shadow-purple-500/50 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                href="/docs"
              >
                View demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
