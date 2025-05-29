// Mock data for startups and investors
export const mockStartups = [
  {
    name: "TechFlow AI",
    industry: "AI/ML",
    stage: "Series A",
    description: "Revolutionary AI platform for business process automation",
    fundingNeeded: "$5M - $10M",
    location: "San Francisco, CA",
    metrics: {
      revenue: "$1.2M ARR",
      growth: "150% YoY",
      customers: "50+ Enterprise"
    },
    team: "Ex-Google, Stanford PhDs",
    traction: "Featured in TechCrunch, 4.8/5 Customer Rating",
    availability: {
      nextSlot: "2024-03-25T10:00:00",
      timeZone: "PT",
      duration: "30min"
    }
  },
  {
    name: "GreenEnergy Solutions",
    industry: "Clean Energy",
    stage: "Seed",
    description: "Innovative solar energy storage technology",
    fundingNeeded: "$2M - $3M",
    location: "Austin, TX",
    metrics: {
      revenue: "$500K ARR",
      growth: "200% YoY",
      customers: "10 Pilot Programs"
    },
    team: "MIT Engineers, Tesla Alumni",
    traction: "2 Patents Pending, DOE Grant Recipient",
    availability: {
      nextSlot: "2024-03-26T14:00:00",
      timeZone: "CT",
      duration: "45min"
    }
  },
  {
    name: "CyberShield Pro",
    industry: "Cybersecurity",
    stage: "Series B",
    description: "Next-generation cybersecurity platform using quantum-resistant encryption",
    fundingNeeded: "$15M - $20M",
    location: "Seattle, WA",
    metrics: {
      revenue: "$4.5M ARR",
      growth: "180% YoY",
      customers: "75+ Enterprise"
    },
    team: "Former NSA, Microsoft Security Experts",
    traction: "ISO 27001 Certified, Featured in WSJ",
    availability: {
      nextSlot: "2024-03-27T11:00:00",
      timeZone: "PT",
      duration: "45min"
    }
  },
  {
    name: "BioTech Innovations",
    industry: "Biotech",
    stage: "Series A",
    description: "Revolutionary gene therapy delivery platform",
    fundingNeeded: "$12M - $15M",
    location: "Boston, MA",
    metrics: {
      revenue: "$2.8M ARR",
      growth: "160% YoY",
      customers: "15 Research Institutions"
    },
    team: "Harvard Medical School, Genentech Alumni",
    traction: "3 Patents Granted, NIH Grant Recipient",
    availability: {
      nextSlot: "2024-03-28T09:00:00",
      timeZone: "ET",
      duration: "60min"
    }
  },
  {
    name: "AgriTech Solutions",
    industry: "AgTech",
    stage: "Seed",
    description: "AI-powered precision farming platform",
    fundingNeeded: "$3M - $5M",
    location: "Des Moines, IA",
    metrics: {
      revenue: "$800K ARR",
      growth: "220% YoY",
      customers: "500+ Farms"
    },
    team: "Ex-John Deere, Cornell AgTech",
    traction: "USDA Innovation Award Winner",
    availability: {
      nextSlot: "2024-03-29T10:00:00",
      timeZone: "CT",
      duration: "30min"
    }
  },
  {
    name: "SpaceX Analytics",
    industry: "Space Tech",
    stage: "Series B",
    description: "Satellite data analytics for climate monitoring",
    fundingNeeded: "$25M - $30M",
    location: "Houston, TX",
    metrics: {
      revenue: "$6.2M ARR",
      growth: "190% YoY",
      customers: "30 Government Agencies"
    },
    team: "NASA Veterans, SpaceX Alumni",
    traction: "ESA Partnership, 2 Satellite Launches",
    availability: {
      nextSlot: "2024-03-30T14:00:00",
      timeZone: "CT",
      duration: "45min"
    }
  },
  {
    name: "QuantumCompute",
    industry: "Quantum Computing",
    stage: "Series A",
    description: "Quantum computing solutions for financial modeling",
    fundingNeeded: "$18M - $22M",
    location: "Chicago, IL",
    metrics: {
      revenue: "$3.5M ARR",
      growth: "170% YoY",
      customers: "10 Financial Institutions"
    },
    team: "IBM Quantum Alumni, MIT PhDs",
    traction: "Partnership with Major Banks",
    availability: {
      nextSlot: "2024-03-31T11:00:00",
      timeZone: "CT",
      duration: "60min"
    }
  },
  {
    name: "RoboLogistics",
    industry: "Robotics",
    stage: "Series B",
    description: "Autonomous warehouse robotics solutions",
    fundingNeeded: "$20M - $25M",
    location: "Pittsburgh, PA",
    metrics: {
      revenue: "$5.8M ARR",
      growth: "210% YoY",
      customers: "25 Distribution Centers"
    },
    team: "Carnegie Mellon Robotics, Amazon Alumni",
    traction: "Featured in Forbes, 12 Patents",
    availability: {
      nextSlot: "2024-04-01T13:00:00",
      timeZone: "ET",
      duration: "45min"
    }
  },
  {
    name: "NeuroTech Health",
    industry: "Healthcare",
    stage: "Series A",
    description: "Brain-computer interface for paralysis treatment",
    fundingNeeded: "$15M - $18M",
    location: "San Diego, CA",
    metrics: {
      revenue: "$2.2M ARR",
      growth: "140% YoY",
      customers: "8 Major Hospitals"
    },
    team: "Stanford Neuroscience, Medtronic Alumni",
    traction: "FDA Fast Track Designation",
    availability: {
      nextSlot: "2024-04-02T10:00:00",
      timeZone: "PT",
      duration: "60min"
    }
  },
  {
    name: "MetaverseEdu",
    industry: "EdTech",
    stage: "Seed",
    description: "Virtual reality platform for medical training",
    fundingNeeded: "$4M - $6M",
    location: "Miami, FL",
    metrics: {
      revenue: "$900K ARR",
      growth: "250% YoY",
      customers: "20 Medical Schools"
    },
    team: "Unity3D Veterans, Harvard Med Faculty",
    traction: "AMA Innovation Award Winner",
    availability: {
      nextSlot: "2024-04-03T14:00:00",
      timeZone: "ET",
      duration: "30min"
    }
  }
];

export const mockInvestors = [
  {
    name: "Innovation Ventures",
    type: "Venture Capital",
    focus: "Early Stage Technology",
    portfolio: "25+ Companies",
    investmentRange: "$1M - $5M",
    location: "New York, NY",
    preferences: {
      stages: ["Seed", "Series A"],
      industries: ["AI/ML", "Enterprise Software", "Fintech"]
    },
    successStories: "3 Unicorns, 5 Successful Exits",
    team: "20+ Years Combined Experience",
    availability: {
      nextSlot: "2024-03-24T15:00:00",
      timeZone: "ET",
      duration: "60min"
    }
  },
  {
    name: "Impact Angels Network",
    type: "Angel Investor Group",
    focus: "Sustainable Technology",
    portfolio: "40+ Companies",
    investmentRange: "$250K - $1M",
    location: "Boston, MA",
    preferences: {
      stages: ["Pre-seed", "Seed"],
      industries: ["Clean Energy", "Healthcare", "Education"]
    },
    successStories: "8 Successful Exits",
    team: "Network of 50+ Active Angels",
    availability: {
      nextSlot: "2024-03-25T11:00:00",
      timeZone: "ET",
      duration: "45min"
    }
  },
  {
    name: "Quantum Capital Partners",
    type: "Venture Capital",
    focus: "Deep Tech",
    portfolio: "30+ Companies",
    investmentRange: "$5M - $15M",
    location: "San Francisco, CA",
    preferences: {
      stages: ["Series A", "Series B"],
      industries: ["Quantum Computing", "AI/ML", "Robotics"]
    },
    successStories: "2 IPOs, 6 Acquisitions",
    team: "PhDs in Physics and Computer Science",
    availability: {
      nextSlot: "2024-03-26T10:00:00",
      timeZone: "PT",
      duration: "45min"
    }
  },
  {
    name: "BioFuture Fund",
    type: "Venture Capital",
    focus: "Life Sciences",
    portfolio: "20+ Companies",
    investmentRange: "$10M - $30M",
    location: "Cambridge, MA",
    preferences: {
      stages: ["Series B", "Series C"],
      industries: ["Biotech", "Healthcare", "Medical Devices"]
    },
    successStories: "4 IPOs, 3 Acquisitions",
    team: "Leading Scientists and Healthcare Executives",
    availability: {
      nextSlot: "2024-03-27T14:00:00",
      timeZone: "ET",
      duration: "60min"
    }
  },
  {
    name: "Space Ventures Group",
    type: "Venture Capital",
    focus: "Space Technology",
    portfolio: "15+ Companies",
    investmentRange: "$3M - $20M",
    location: "Houston, TX",
    preferences: {
      stages: ["Series A", "Series B"],
      industries: ["Space Tech", "Satellite", "Aviation"]
    },
    successStories: "1 IPO, 4 Acquisitions",
    team: "Former NASA Executives",
    availability: {
      nextSlot: "2024-03-28T11:00:00",
      timeZone: "CT",
      duration: "45min"
    }
  },
  {
    name: "Green Future Capital",
    type: "Impact Investment Fund",
    focus: "Climate Tech",
    portfolio: "35+ Companies",
    investmentRange: "$2M - $10M",
    location: "Seattle, WA",
    preferences: {
      stages: ["Seed", "Series A"],
      industries: ["Clean Energy", "Sustainability", "AgTech"]
    },
    successStories: "7 Successful Exits",
    team: "Environmental Scientists and Tech Veterans",
    availability: {
      nextSlot: "2024-03-29T09:00:00",
      timeZone: "PT",
      duration: "30min"
    }
  },
  {
    name: "AI Frontiers Fund",
    type: "Venture Capital",
    focus: "Artificial Intelligence",
    portfolio: "45+ Companies",
    investmentRange: "$1M - $8M",
    location: "Palo Alto, CA",
    preferences: {
      stages: ["Seed", "Series A"],
      industries: ["AI/ML", "Computer Vision", "NLP"]
    },
    successStories: "5 Unicorns, 8 Exits",
    team: "AI Researchers and Serial Entrepreneurs",
    availability: {
      nextSlot: "2024-03-30T13:00:00",
      timeZone: "PT",
      duration: "45min"
    }
  },
  {
    name: "Cyber Defense Ventures",
    type: "Venture Capital",
    focus: "Cybersecurity",
    portfolio: "25+ Companies",
    investmentRange: "$4M - $12M",
    location: "Washington, DC",
    preferences: {
      stages: ["Series A", "Series B"],
      industries: ["Cybersecurity", "Privacy", "Blockchain"]
    },
    successStories: "3 Unicorns, 5 Exits",
    team: "Former Intelligence and Security Officials",
    availability: {
      nextSlot: "2024-03-31T10:00:00",
      timeZone: "ET",
      duration: "60min"
    }
  },
  {
    name: "Digital Health Collective",
    type: "Healthcare VC",
    focus: "Digital Health",
    portfolio: "30+ Companies",
    investmentRange: "$3M - $15M",
    location: "Nashville, TN",
    preferences: {
      stages: ["Series A", "Series B"],
      industries: ["Healthcare IT", "Telemedicine", "Medical Devices"]
    },
    successStories: "2 IPOs, 6 Acquisitions",
    team: "Healthcare Executives and Physicians",
    availability: {
      nextSlot: "2024-04-01T14:00:00",
      timeZone: "CT",
      duration: "45min"
    }
  },
  {
    name: "Robotics Growth Fund",
    type: "Venture Capital",
    focus: "Robotics and Automation",
    portfolio: "20+ Companies",
    investmentRange: "$5M - $20M",
    location: "Boston, MA",
    preferences: {
      stages: ["Series B", "Series C"],
      industries: ["Robotics", "Automation", "Manufacturing"]
    },
    successStories: "4 Successful Exits",
    team: "Robotics Engineers and Industry Veterans",
    availability: {
      nextSlot: "2024-04-02T11:00:00",
      timeZone: "ET",
      duration: "60min"
    }
  }
];