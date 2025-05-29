import React from "react";
import { Link } from "react-router-dom";

const trustedEntities = [
  "Tuple",
  "Mirage",
  "StaticKit",
  "Transistor",
  "Workcation",
];

export function Home() {
  return (
    <div className="bg-white">
      <div className="overflow-hidden relative">
        {/* Decorative SVG background */}
        <div className="absolute inset-y-0 w-full h-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full transform translate-x-1/4 translate-y-1/3 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
              />
            </svg>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Connect with the right</span>
                <span className="block text-indigo-600">
                  investors for your startup
                </span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                VentureXpert helps startups find the perfect investors, and
                helps investors discover promising opportunities.
              </p>
              <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to="/signup"
                    className="flex justify-center items-center px-8 py-3 w-full text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="/explore"
                    className="flex justify-center items-center px-8 py-3 w-full text-base font-medium text-indigo-600 bg-white rounded-md border border-transparent hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Explore opportunities
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Screenshot Section */}
        <div className="relative">
          <div className="flex absolute inset-0 flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-800" />
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <img
              className="relative rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2700&q=80"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="bg-gray-800">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase">
            Trusted by leading companies and investors worldwide
          </h2>
          <div className="grid grid-cols-2 gap-6 justify-items-center mt-10 sm:grid-cols-3 md:grid-cols-5">
            {trustedEntities.map((name, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 space-x-3 bg-gray-700 rounded-lg shadow transition-transform duration-200 hover:scale-105"
              >
                <div className="flex justify-center items-center w-10 h-10 text-lg font-bold text-white bg-indigo-600 rounded-full">
                  {name[0]}
                </div>
                <span className="text-sm font-medium text-white sm:text-base">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
