import Head from "next/head";
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { FaGoogle } from "react-icons/fa";

import Navbar from "../components/Navbar";
import CustomRoute from "../components/CustomRoute";

const signInGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then(() => {});
};

function Login(props) {
  return (
    <CustomRoute redirectAuth="/">
      <div className="bg-gray-100 h-screen">
        <Head>
          <title>Login</title>
        </Head>
        <Navbar />
        <div className="px-20 py-10 bg-gray-50">
          <h1 className="font-extrabold text-4xl text-gray-600 py-5">
            Sign-in{" "}
          </h1>
          <p className="lead text-gray-700">
            Sign-in for free and access your notes anywhere.
          </p>
          <div className="mt-5">
            <button
              onClick={signInGoogle}
              type="button"
              className="border shadow bg-white px-5 py-2 flex align-center justify-center"
            >
              <FaGoogle className="mt-1" />{" "}
              <span className="ml-2"> Sign in using Google</span>
            </button>
          </div>
        </div>
      </div>
    </CustomRoute>
  );
}

export default Login;
