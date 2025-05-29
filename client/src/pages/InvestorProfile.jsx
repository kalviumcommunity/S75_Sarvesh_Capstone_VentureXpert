import React from 'react';
import { useParams } from 'react-router-dom';
import { Briefcase, Users, DollarSign, Globe, Award, Building2 } from 'lucide-react';
import { mockInvestors } from '../data/mockData';

export function InvestorProfile() {
  const { id } = useParams();
  const investor = mockInvestors[parseInt(id, 10) || 0];

  return (
    <div className="min-h-screen bg-custom-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
          <div className="px-6 py-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white">{investor.name}</h1>
                <div className="flex items-center mt-2 text-gray-400">
                  <Briefcase size={20} className="mr-2" />
                  <span>{investor.type}</span>
                  <span className="mx-2">•</span>
                  <Globe size={20} className="mr-2" />
                  <span>{investor.location}</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-brand text-black rounded-md hover:bg-brand/90">
                Connect
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white">Investment Focus</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Focus Area</div>
                    <div className="text-base font-medium text-white">{investor.focus}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Investment Range</div>
                    <div className="text-base font-medium text-white">{investor.investmentRange}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white">Portfolio</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Companies</div>
                    <div className="text-base font-medium text-white">{investor.portfolio}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Success Stories</div>
                    <div className="text-base font-medium text-white">{investor.successStories}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white">Team</h3>
                <div className="mt-4">
                  <div className="flex items-center text-gray-300">
                    <Users size={20} className="mr-2" />
                    <span>{investor.team}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">Investment Preferences</h3>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Stages</h4>
                <div className="flex flex-wrap gap-2">
                  {investor.preferences.stages.map((stage, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand/20 text-brand"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
                <h4 className="text-sm font-medium text-gray-300 mt-4 mb-2">Industries</h4>
                <div className="flex flex-wrap gap-2">
                  {investor.preferences.industries.map((industry, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand/20 text-brand"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}