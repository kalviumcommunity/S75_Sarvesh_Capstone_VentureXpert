import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Explore } from "./pages/Explore";
import { StartupProfile } from "./pages/StartupProfile";
import { InvestorProfile } from "./pages/InvestorProfile";
import { Dashboard } from "./pages/Dashboard";
import { Messaging } from "./pages/Messaging";
import { Deals } from "./pages/Deals";
import { Analytics } from "./pages/Analytics";
import { Events } from "./pages/Events";
import { Resources } from "./pages/Resources";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/explore" element={<Explore />} /> */}
          <Route path="/explore" element={<Explore viewType="startups" />} />
          <Route
            path="/explore/investors"
            element={<Explore viewType="investors" />}
          />

          <Route path="/startup/:id" element={<StartupProfile />} />
          <Route path="/investor/:id" element={<InvestorProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
