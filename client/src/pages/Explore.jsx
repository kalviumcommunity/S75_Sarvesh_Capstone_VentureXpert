import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Building2,
  Users,
  Briefcase,
  TrendingUp,
  DollarSign,
  Globe,
  Award,
  Clock,
  Calendar,
  X,
  Mail,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { mockStartups, mockInvestors } from "../data/mockData";
import { useNavigate, useLocation } from "react-router-dom";
import { init, send } from "emailjs-com";

export function Explore({ viewType }) {
  // Initialize EmailJS with your user ID
  useEffect(() => {
    init("SyWmFGRGJ5QCFl4NU");
  }, []);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedStage, setSelectedStage] = useState("all");
  const [page, setPage] = useState(1);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const itemsPerPage = 10;

  const industries = [
    "All Industries",
    "Technology",
    "Healthcare",
    "Fintech",
    "E-commerce",
    "AI/ML",
    "Clean Energy",
    "Education",
    "Enterprise Software",
    "Biotech",
    "Digital Health",
    "Blockchain",
    "InsurTech",
    "AgTech",
    "SaaS",
    "Cloud Infrastructure",
  ];

  const stages = [
    { label: "All Stages", value: "all" },
    { label: "Pre-seed", value: "pre-seed" },
    { label: "Seed", value: "seed" },
    { label: "Series A", value: "series a" },
    { label: "Series B", value: "series b" },
    { label: "Series C", value: "series c" },
  ];

  // --- Booking Modal Logic ---
  const handleBookSlot = (item) => {
    setSelectedItem(item);
    setShowBookingModal(true);
    setEmail("");
    setEmailError("");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Only show error if input is non-empty and invalid
    if (e.target.value === "") {
      setEmailError("");
    } else if (!validateEmail(e.target.value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const sendConfirmationEmail = async () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setEmailError("");

    try {
      const templateParams = {
        to_email: email, // This must match what's in the EmailJS template
        user_name: email.split("@")[0],
        meeting_with: selectedItem?.name || "Startup",
        meeting_date: formatDate(selectedItem?.availability?.nextSlot),
        meeting_duration: selectedItem?.availability?.duration || "30 mins",
      };

      const result = await send(
        "service_l39mel2",
        "template_km8rwka",
        templateParams,
        "SyWmFGRGJ5QCFl4NU"
      );

      if (result.status === 200) {
        setShowBookingModal(false);
        setShowSuccessPopup(true);
        setTimeout(() => setShowSuccessPopup(false), 3000);
      } else {
        throw new Error("Email failed to send.");
      }
    } catch (error) {
      console.error("Email send error:", error);
      setShowErrorPopup(true);
      setTimeout(() => setShowErrorPopup(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  const filterData = (data) => {
    return data.filter((item) => {
      const matchesSearch =
        searchQuery.toLowerCase() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.industry?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesIndustry =
        selectedIndustry === "all" ||
        item.industry?.toLowerCase() === selectedIndustry.toLowerCase() ||
        item.preferences?.industries.some(
          (ind) => ind.toLowerCase() === selectedIndustry.toLowerCase()
        );

      const matchesStage =
        selectedStage === "all" ||
        (viewType === "startups" &&
          item.stage?.toLowerCase() === selectedStage.toLowerCase()) ||
        (viewType === "investors" &&
          item.preferences?.stages.some(
            (stage) => stage.toLowerCase() === selectedStage.toLowerCase()
          ));

      return matchesSearch && matchesIndustry && matchesStage;
    });
  };

  const filteredData =
    viewType === "startups"
      ? filterData(mockStartups)
      : filterData(mockInvestors);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="py-8 min-h-screen bg-custom-darker">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Explore {viewType === "startups" ? "Startups" : "Investors"}
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/explore")}
              className={`px-4 py-2 rounded-md transition-colors ${
                viewType === "startups"
                  ? "bg-brand text-white"
                  : "bg-black text-white"
              }`}
            >
              View Startups
            </button>
            <button
              onClick={() => navigate("/explore/investors")}
              className={`px-4 py-2 rounded-md ${
                viewType === "investors"
                  ? "bg-brand text-white"
                  : "bg-black text-white"
              }`}
            >
              View Investors
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="p-6 mb-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2"
                size={20}
              />
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pr-4 pl-10 w-full text-white placeholder-gray-400 rounded-xl border border-[#00A58A] bg-transparent focus:ring-2 focus:ring-[#00A58A] focus:border-[#00A58A]"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <div>
              <select
                className="py-2 pr-10 pl-3 w-full text-white rounded-xl border border-[#00A58A] bg-transparent focus:ring-2 focus:ring-[#111826] focus:border-[#00A58A] hover:bg-[#111826]"
                value={selectedIndustry}
                onChange={(e) => {
                  setSelectedIndustry(e.target.value.toLowerCase());
                  setPage(1);
                }}
              >
                {industries.map((industry) => (
                  <option
                    key={industry}
                    value={industry.toLowerCase()}
                    className="text-white"
                  >
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                className="py-2 pr-10 pl-3 w-full text-white rounded-xl border border-[#00A58A] bg-transparent focus:ring-2 focus:ring-[#111826] focus:border-[#00A58A] hover:bg-[#111826]"
                value={selectedStage}
                onChange={(e) => {
                  setSelectedStage(e.target.value);
                  setPage(1);
                }}
              >
                {stages.map((stage) => (
                  <option
                    key={stage.value}
                    value={stage.value}
                    className="text-white"
                  >
                    {stage.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {paginatedData.map((item, index) =>
            viewType === "startups" ? (
              <div
                key={index}
                className="overflow-hidden bg-gray-900 rounded-2xl border border-gray-800 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.name}
                      </h3>
                      <div className="flex items-center mt-1 text-sm text-gray-400">
                        <Building2 size={16} className="mr-1" />
                        <span>{item.industry}</span>
                        <span className="mx-2">•</span>
                        <Globe size={16} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-black rounded-full bg-brand">
                      {item.stage}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-300">{item.description}</p>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-sm">
                      <div className="font-medium text-gray-400">Revenue</div>
                      <div className="mt-1 font-semibold text-white">
                        {item.metrics.revenue}
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-400">Growth</div>
                      <div className="mt-1 font-semibold text-white">
                        {item.metrics.growth}
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-400">Customers</div>
                      <div className="mt-1 font-semibold text-white">
                        {item.metrics.customers}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-400">
                        <Users size={16} className="mr-1" />
                        <span>{item.team}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm font-medium text-brand">
                          <DollarSign size={16} className="mr-1" />
                          <span>{item.fundingNeeded}</span>
                        </div>
                        <button
                          onClick={() => handleBookSlot(item)}
                          className="flex items-center px-3 py-1 text-black rounded-md transition-colors bg-brand hover:bg-brand/90"
                        >
                          <Calendar size={16} className="mr-1" />
                          Book a Slot
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="overflow-hidden bg-[#111826] rounded-lg shadow-md"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.name}
                      </h3>
                      <div className="flex items-center mt-1 text-sm text-gray-300">
                        <Briefcase size={16} className="mr-1" />
                        <span>{item.type}</span>
                        <span className="mx-2">•</span>
                        <Globe size={16} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                      {item.portfolio}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-600">Focus: {item.focus}</p>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-300">
                      Investment Preferences
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.preferences.stages.map((stage, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {stage}
                        </span>
                      ))}
                      {item.preferences.industries.map((industry, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-sm">
                      <div className="font-medium text-gray-00">
                        Investment Range
                      </div>
                      <div className="mt-1 font-semibold text-white">
                        {item.investmentRange}
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-300">
                        Success Stories
                      </div>
                      <div className="mt-1 font-semibold text-white">
                        {item.successStories}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users size={16} className="mr-1" />
                        <span>{item.team}</span>
                      </div>
                      <button
                        onClick={() => handleBookSlot(item)}
                        className="flex items-center px-3 py-1 text-white rounded-md transition-colors bg-brand hover:bg-brand/90"
                      >
                        <Calendar size={16} className="mr-1" />
                        Book a Slot
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Booking Modal */}
        {showBookingModal && selectedItem && (
          <div className="flex overflow-auto fixed inset-0 z-50 justify-center items-center bg-[#111826] bg-opacity-50">
            <div className="relative p-6 mx-4 my-8 w-full max-w-md bg-[#111826] rounded-lg shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">
                  Book a Meeting with {selectedItem.name}
                </h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-white hover:text-gray-500 focus:outline-none"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-300">Next Available Slot:</p>
                <div className="flex items-center mt-2 text-white">
                  <Calendar size={18} className="mr-2" />
                  <span>{formatDate(selectedItem.availability.nextSlot)}</span>
                  <span className="ml-2 text-gray-300">
                    ({selectedItem.availability.duration})
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Enter your email to confirm booking
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <Mail size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="py-2 pr-3 pl-10 w-full text-gray-900 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    style={{ backgroundColor: "white" }}
                    placeholder="you@example.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {emailError && (
                  <p className="mt-1 text-sm text-red-600">{emailError}</p>
                )}
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={sendConfirmationEmail}
                  disabled={!email || emailError || isSubmitting}
                  className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                    !email || emailError || isSubmitting
                      ? "bg-brand cursor-not-allowed"
                      : "bg-brand hover:bg-brand/90"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Book Slot"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
            <div className="p-6 mx-4 w-full max-w-md bg-white rounded-lg shadow-2xl animate-fade-in">
              <div className="flex justify-center items-center mb-4 text-green-500">
                <CheckCircle size={48} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-center text-gray-900">
                ✅ Slot booked! Confirmation email sent to your inbox.
              </h3>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Great!
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error Popup */}
        {showErrorPopup && (
          <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
            <div className="p-6 mx-4 w-full max-w-md bg-white rounded-lg shadow-2xl animate-fade-in">
              <div className="flex justify-center items-center mb-4 text-red-500">
                <AlertTriangle size={48} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-center text-gray-900">
                ❌ Something went wrong. Failed to send confirmation email.
                Please try again.
              </h3>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowErrorPopup(false)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
