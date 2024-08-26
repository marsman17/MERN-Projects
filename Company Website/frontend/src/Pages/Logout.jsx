import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    navigate("/login");
  }, [navigate]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-6">You have been logged out</h2>
        <p className="text-gray-700 mb-4">
          Thank you for visiting. You have successfully logged out.
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Return to Login Page
        </a>
      </div>
    </div>
  );
};

export default Logout;
