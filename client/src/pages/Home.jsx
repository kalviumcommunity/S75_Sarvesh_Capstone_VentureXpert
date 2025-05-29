import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Users,
  CheckCircle,
  Rocket,
  Shield,
  Star,
} from "lucide-react";

// Small reusable components

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center">
    <h2 className="text-3xl font-extrabold text-brand sm:text-4xl">{title}</h2>
    <p className="mt-4 text-lg text-white">{subtitle}</p>
  </div>
);

const FeatureCard = ({ Icon, title, description }) => (
  <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-105">
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-md bg-brand">
        <Icon className="w-6 h-6 text-black" />
      </div>
      <h3 className="ml-3 text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

function Home() {
  const stats = [
    { number: "100+", label: "Startups Connected" },
    { number: "50+", label: "Investors Onboarded" },
    { number: "$10M+", label: "Funding Secured" },
    { number: "9.5/10", label: "Avg. User Rating" },
  ];

  const companies = [
    {
      name: "Sequoia Capital",
      logo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Leading global investment firm",
      testimonial:
        "VentureXpert has revolutionized how we discover and connect with promising startups.",
      author: "Michael Moritz",
      role: "Partner",
    },
    {
      name: "Andreessen Horowitz",
      logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Pioneering venture capital firm",
      testimonial:
        "The platform's analytics and matching capabilities are unparalleled in the industry.",
      author: "Marc Andreessen",
      role: "Co-founder",
    },
    {
      name: "Y Combinator",
      logo: "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
      description: "World's leading startup accelerator",
      testimonial:
        "VentureXpert has become an essential tool for our portfolio companies.",
      author: "Paul Graham",
      role: "Co-founder",
    },
  ];

  const features = [
    {
      Icon: Rocket,
      title: "Quick Launch",
      description:
        "Get your startup in front of top investors within minutes. Our streamlined process ensures rapid connections.",
    },
    {
      Icon: Shield,
      title: "Verified Network",
      description:
        "Connect with confidence through our thoroughly vetted network of investors and startups.",
    },
    {
      Icon: TrendingUp,
      title: "Smart Analytics",
      description:
        "Make data-driven decisions with our advanced analytics and performance tracking tools.",
    },
  ];

  const whyChooseUs = [
    {
      Icon: TrendingUp,
      title: "Smart Matching",
      description:
        "Our AI-powered algorithm ensures you connect with the most relevant partners.",
    },
    {
      Icon: Users,
      title: "Verified Connections",
      description:
        "Access a curated network of vetted investors and promising startups.",
    },
    {
      Icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of successful matches and funding rounds.",
    },
  ];

  return (
    <div className="bg-custom-darker">
      {/* Hero Section */}
      <div className="overflow-hidden relative">
        <div className="px-4 py-20 mx-auto max-w-7xl text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Connect with the right investors for your startup
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl">
            VentureXpert helps startups find the perfect investors and investors
            discover the best opportunities.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <Link
              to="/signup"
              className="px-8 py-3 text-lg font-medium text-black rounded-md bg-brand hover:bg-brand/90"
            >
              Get Started
            </Link>
            <Link
              to="/explore"
              className="px-8 py-3 text-lg font-medium text-black rounded-md bg-brand hover:bg-brand/90"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>
      </div>

      {/* Images Grid */}
      <div className="py-12">
        <div className="grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3 sm:px-6">
          {[
            {
              src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
              alt: "Platform dashboard interface",
            },
            {
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: "Startup team collaboration",
            },
            {
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: "Investment meeting",
            },
          ].map((img, index) => (
            <img
              key={index}
              className="object-cover w-full h-64 rounded-lg shadow-lg"
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-custom-darker">
        <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="py-20 bg-custom-darker">
        <div className="grid grid-cols-2 gap-8 px-4 mx-auto max-w-7xl text-center md:grid-cols-4 sm:px-6">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-extrabold text-brand">
                {stat.number}
              </div>
              <div className="mt-2 text-base text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Companies */}
      <div className="py-24 bg-custom-darker">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <SectionTitle
            title="Trusted by Leading Companies and Investors"
            subtitle="Join the world's most successful venture capital firms and startups"
          />
          <div className="grid grid-cols-1 gap-12 mt-20 lg:grid-cols-3">
            {companies.map((company, index) => (
              <div
                key={index}
                className="overflow-hidden bg-gray-900 rounded-lg border border-gray-800 transition-transform duration-200 transform hover:scale-105"
              >
                <div className="px-6 py-8">
                  <div className="flex justify-between items-center">
                    <Star className="w-6 h-6 text-brand" />
                  </div>
                  <blockquote className="mt-8">
                    <p className="relative text-lg font-medium text-gray-300">
                      {company.testimonial}
                    </p>
                    {/* Star Rating */}
                    <div className="flex mt-4 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <footer className="flex items-center mt-6 space-x-4">
                      <img
                        className="object-cover w-10 h-10 rounded-full border border-gray-700"
                        src={company.logo}
                        alt={company.author}
                      />
                      <div>
                        <p className="text-base font-semibold text-white">
                          {company.author}
                        </p>
                        <p className="text-sm text-gray-400">
                          {company.role}, {company.name}
                        </p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-custom-darker">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <SectionTitle
            title="Why Choose VentureXpert?"
            subtitle="We provide the tools and connections you need to succeed"
          />
          <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center items-center mx-auto w-12 h-12 text-black rounded-md bg-brand">
                  <item.Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
