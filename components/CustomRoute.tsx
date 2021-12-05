import React from "react";
import { FaSpinner } from "react-icons/fa";
import { useUser } from "../context/auth";

const GlobalLoader = () => (
  <div className="w-full flex justify-center items-center h-screen bg-white">
    <div className="text-gray-500">
      <FaSpinner size={30} className="text-purple-500 icon-spin" />
    </div>
  </div>
);

interface CustomRouteProp {
  children: any;
  redirectAuth?: string;
  redirectNoAuth?: string;
  skipLoading?: boolean;
}

function CustomRoute({
  children,
  redirectAuth,
  redirectNoAuth,
  skipLoading,
}: CustomRouteProp) {
  const { user, loading } = useUser();

  if (loading && !skipLoading) {
    return <GlobalLoader />;
  }

  if (user && redirectAuth) {
    window.location.href = redirectAuth;
    return null;
  }

  if (!user && redirectNoAuth) {
    window.location.href = redirectNoAuth;
    return null;
  }

  return children;
}

export default CustomRoute;
