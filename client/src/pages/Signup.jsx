import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
    company: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const { fullName, email, role, password, company } = formData;

      const response = await axios.post(
        "http://localhost:4000/api/auth/signup",
        {
          fullName,
          email,
          role,
          password,
          company,
        }
      );

      if (response.status === 201) {
        setSuccessMessage("Signup successful! Redirecting to login...");
        setIsSuccess(true);

        setTimeout(() => {
          navigate("/login");
        }, 3000); // 3-second delay before redirect
      }
    } catch (error) {
      console.error("Signup Error:", error);

      if (error.response?.status === 409) {
        setErrorMessage("User already exists.");
      } else if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-custom-dark sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl font-extrabold text-center text-white">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-gray-900 border border-gray-800 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-200"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                disabled={isSuccess}
                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm input-dark"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSuccess}
                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm input-dark"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-200"
              >
                I am a
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                disabled={isSuccess}
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base rounded-md input-dark"
                required
              >
                <option value="">Select your role</option>
                <option value="Startup Founder">Startup Founder</option>
                <option value="Investor">Investor</option>
                <option value="Venture Capitalist">Venture Capitalist</option>
                <option value="Angel Investor">Angel Investor</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-200"
              >
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                disabled={isSuccess}
                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm input-dark"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                disabled={isSuccess}
                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm input-dark"
              />
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
                disabled={isSubmitting || isSuccess}
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-black border border-transparent rounded-md shadow-sm bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-sm text-center text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-brand hover:text-brand/90"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
