import React from "react";
import { useUser } from "../context/auth";

const GlobalLoader = () => (
  <div className="w-full flex justify-center items-center h-screen bg-pink-50">
    <div>Loading...</div>
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
