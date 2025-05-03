import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Users,
  Calendar,
  MessageSquare,
  FileText,
  DollarSign,
  PieChart,
  Activity,
  Building2,
  Star,
  Clock,
  Bell,
  CheckCircle,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  Plus,
} from "lucide-react";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveRadar } from "@nivo/radar";
import { ResponsiveStream } from "@nivo/stream";
import { format, addDays, addHours } from "date-fns";
import { DashboardCard } from "../components/DashboardCard";
import { ChartCard } from "../components/ChartCard";
import { MeetingCard } from "../components/MeetingCard";
import { MessageThread } from "../components/MessageThread";
import { ChatWindow } from "../components/ChatWindow";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [userType] = useState("startup");

  const metrics = {
    totalFunding: {
      value: "$2.5M",
      trend: "+15%",
    },
    investorMeetings: {
      value: "45",
      trend: "+8%",
    },
    pitchDeckViews: {
      value: "128",
      trend: "+25%",
    },
    followUps: {
      value: "12",
      trend: "-5%",
    },
  };

  const fundingData = [
    {
      id: "Raised",
      color: "hsl(240, 70%, 50%)",
      data: [
        { x: "Jan", y: 0 },
        { x: "Feb", y: 200000 },
        { x: "Mar", y: 400000 },
        { x: "Apr", y: 300000 },
        { x: "May", y: 800000 },
        { x: "Jun", y: 1200000 },
      ],
    },
    {
      id: "Target",
      color: "hsl(180, 70%, 50%)",
      data: [
        { x: "Jan", y: 100000 },
        { x: "Feb", y: 300000 },
        { x: "Mar", y: 500000 },
        { x: "Apr", y: 700000 },
        { x: "May", y: 900000 },
        { x: "Jun", y: 1500000 },
      ],
    },
  ];

  const investorInterestData = [
    { sector: "AI/ML", value: 35, color: "hsl(240, 70%, 50%)" },
    { sector: "Fintech", value: 25, color: "hsl(180, 70%, 50%)" },
    { sector: "Healthcare", value: 20, color: "hsl(120, 70%, 50%)" },
    { sector: "Clean Energy", value: 15, color: "hsl(60, 70%, 50%)" },
    { sector: "EdTech", value: 5, color: "hsl(0, 70%, 50%)" },
  ];

  const radarData = [
    {
      metric: "Team",
      value: 8,
    },
    {
      metric: "Product",
      value: 9,
    },
    {
      metric: "Market",
      value: 7,
    },
    {
      metric: "Traction",
      value: 6,
    },
    {
      metric: "Business Model",
      value: 8,
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "success",
      message: "New investor meeting scheduled with Quantum Capital",
      time: "2 minutes ago",
      icon: CheckCircle,
    },
    {
      id: 2,
      type: "warning",
      message: "Pitch deck needs to be updated before next meeting",
      time: "1 hour ago",
      icon: AlertCircle,
    },
    {
      id: 3,
      type: "error",
      message: "Missed follow-up with Innovation Ventures",
      time: "2 hours ago",
      icon: XCircle,
    },
  ];

  const [selectedThread, setSelectedThread] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleJoinMeeting = (meetingId) => {
    console.log("Joining meeting:", meetingId);
  };

  const handleRescheduleMeeting = (meetingId) => {
    console.log("Rescheduling meeting:", meetingId);
  };

  const handleCancelMeeting = (meetingId) => {
    console.log("Canceling meeting:", meetingId);
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-[#111826] shadow-lg border border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Welcome back, John!
              </h1>
              <p className="mt-1 text-gray-400">
                Here's what's happening with your startup
              </p>
            </div>
            <div className="flex space-x-4 items-center">
              <button className="p-2 text-gray-400 hover:text-white">
                <Bell size={24} />
              </button>
              <button className="px-4 py-2 bg-[#189468] text-black rounded-lg hover:bg-[#189468]/90 transition-colors duration-200 font-medium">
                {userType === "startup" ? "Update Profile" : "View Portfolio"}
              </button>
            </div>
          </div>

          <div className="mt-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {["Overview"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`${
                    activeTab === tab.toLowerCase()
                      ? "border-[#189468] text-[#189468]"
                      : "border-transparent text-gray-400 hover:text-white hover:border-gray-600"
                  } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tabVariants}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DashboardCard
                  icon={DollarSign}
                  title="Total Funding"
                  value={metrics.totalFunding.value}
                  trend={metrics.totalFunding.trend}
                  color="#189468"
                />
                <DashboardCard
                  icon={Users}
                  title="Investor Meetings"
                  value={metrics.investorMeetings.value}
                  trend={metrics.investorMeetings.trend}
                  color="#189468"
                />
                <DashboardCard
                  icon={FileText}
                  title="Pitch Deck Views"
                  value={metrics.pitchDeckViews.value}
                  trend={metrics.pitchDeckViews.trend}
                  color="#189468"
                />
                <DashboardCard
                  icon={TrendingUp}
                  title="Follow-ups"
                  value={metrics.followUps.value}
                  trend={metrics.followUps.trend}
                  color="#189468"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartCard title="Funding Progress" className="h-[400px]">
                  <ResponsiveLine
                    data={fundingData}
                    margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: 0, max: "auto" }}
                    curve="monotoneX"
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      format: (value) => `$${value / 1000}k`,
                    }}
                    enablePoints={true}
                    pointSize={8}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    enableArea={true}
                    areaOpacity={0.15}
                    useMesh={true}
                    enableSlices="x"
                    theme={{
                      axis: {
                        ticks: {
                          text: {
                            fontSize: 12,
                            fill: "#6B7280",
                          },
                        },
                      },
                      grid: {
                        line: {
                          stroke: "#E5E7EB",
                          strokeWidth: 1,
                        },
                      },
                      crosshair: {
                        line: {
                          stroke: "#6B7280",
                          strokeWidth: 1,
                          strokeOpacity: 0.35,
                        },
                      },
                    }}
                  />
                </ChartCard>

                <ChartCard
                  title="Investor Interest by Sector"
                  className="h-[400px]"
                >
                  <ResponsivePie
                    data={investorInterestData}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    innerRadius={0.6}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    colors={{ scheme: "nivo" }}
                    borderWidth={1}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 0.2]],
                    }}
                    enableArcLinkLabels={true}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: "color" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                      from: "color",
                      modifiers: [["darker", 2]],
                    }}
                    motionConfig="wobbly"
                  />
                </ChartCard>

                <ChartCard title="Startup Assessment" className="h-[400px]">
                  <ResponsiveRadar
                    data={[
                      {
                        taste: "Team",
                        Current: 8,
                        Target: 10,
                      },
                      {
                        taste: "Product",
                        Current: 9,
                        Target: 10,
                      },
                      {
                        taste: "Market",
                        Current: 7,
                        Target: 9,
                      },
                      {
                        taste: "Traction",
                        Current: 6,
                        Target: 8,
                      },
                      {
                        taste: "Business Model",
                        Current: 8,
                        Target: 9,
                      },
                    ]}
                    keys={["Current", "Target"]}
                    indexBy="taste"
                    maxValue="auto"
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    curve="linearClosed"
                    borderWidth={2}
                    borderColor={{ from: "color" }}
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={36}
                    enableDots={true}
                    dotSize={8}
                    dotColor={{ theme: "background" }}
                    dotBorderWidth={2}
                    dotBorderColor={{ from: "color" }}
                    enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors={{ scheme: "nivo" }}
                    fillOpacity={0.25}
                    blendMode="multiply"
                    animate={true}
                    motionConfig="wobbly"
                    isInteractive={true}
                  />
                </ChartCard>

                <ChartCard title="Recent Activity" className="h-[400px]">
                  <ResponsiveStream
                    data={[
                      {
                        "Investor Meetings": 5,
                        "Pitch Reviews": 3,
                        "Due Diligence": 2,
                      },
                      {
                        "Investor Meetings": 7,
                        "Pitch Reviews": 5,
                        "Due Diligence": 3,
                      },
                      {
                        "Investor Meetings": 4,
                        "Pitch Reviews": 6,
                        "Due Diligence": 4,
                      },
                      {
                        "Investor Meetings": 6,
                        "Pitch Reviews": 4,
                        "Due Diligence": 3,
                      },
                      {
                        "Investor Meetings": 8,
                        "Pitch Reviews": 3,
                        "Due Diligence": 5,
                      },
                    ]}
                    keys={[
                      "Investor Meetings",
                      "Pitch Reviews",
                      "Due Diligence",
                    ]}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      orient: "bottom",
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "",
                      legendOffset: 36,
                    }}
                    axisLeft={{
                      orient: "left",
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "",
                      legendOffset: -40,
                    }}
                    offsetType="silhouette"
                    colors={{ scheme: "nivo" }}
                    fillOpacity={0.85}
                    borderColor={{ theme: "background" }}
                    dotSize={8}
                    dotColor={{ from: "color" }}
                    dotBorderWidth={2}
                    dotBorderColor={{
                      from: "color",
                      modifiers: [["darker", 0.7]],
                    }}
                    animate={true}
                    motionConfig="wobbly"
                    legends={[
                      {
                        anchor: "bottom-right",
                        direction: "column",
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: "#999999",
                        symbolSize: 12,
                        symbolShape: "circle",
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemTextColor: "#000000",
                            },
                          },
                        ],
                      },
                    ]}
                  />
                </ChartCard>
              </div>

              <ChartCard title="Recent Notifications">
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center p-4 bg-[#111826] border border-gray-800 rounded-lg"
                    >
                      <notification.icon
                        className={`h-5 w-5 ${
                          notification.type === "success"
                            ? "text-green-500"
                            : notification.type === "warning"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      />
                      <div className="ml-3">
                        <p className="text-sm text-gray-900">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500">
                          {notification.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ChartCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
