import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage(""); // Reset success message

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signin",
        { email, password }
      );

      if (response.status === 200) {
        // Store authentication token in localStorage
        localStorage.setItem("authToken", response.data.token); // Adjust based on your API response

        // Show success message
        setSuccessMessage("Login successful! Redirecting to your dashboard...");

        // Redirect after 1.5 seconds for a smooth transition
        setTimeout(() => {
          navigate("/dashboard"); // Redirect to dashboard or home page
        }, 1500);
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          error.response.data.message ||
            "Invalid credentials. Please try again."
        );
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      console.error("Error during login:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-custom-dark sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl font-extrabold text-center text-white">
          Sign in to VentureXpert
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-gray-900 border border-gray-800 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 border rounded-md shadow-sm appearance-none input-dark"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border rounded-md shadow-sm appearance-none input-dark"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="mt-2 text-sm text-red-500">{errorMessage}</div>
            )}

            {successMessage && (
              <div className="mt-2 text-sm text-green-500">
                {successMessage}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-black border border-transparent rounded-md shadow-sm bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-300 bg-gray-900">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-brand hover:text-brand/90"
                  >
                    Sign up
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
