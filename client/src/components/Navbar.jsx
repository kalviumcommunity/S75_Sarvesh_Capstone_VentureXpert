import React from "react";
import { Menu, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-custom-darker border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand">
                VentureXpert
              </span>
            </Link>
          </div>

          <div className="flex items-center">
            <Link
              to="/dashboard"
              className="text-brand hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/explore"
              className="text-brand hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Explore
            </Link>
            <button className="ml-4 flex items-center text-brand hover:text-gray-300">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
