import React from 'react';
import { useParams } from 'react-router-dom';
import { Building2, Users, DollarSign, TrendingUp, Award, Globe, Link, Mail } from 'lucide-react';
import { mockStartups } from '../data/mockData';

export function StartupProfile() {
  const { id } = useParams();
  const startup = mockStartups[parseInt(id, 10) || 0];

  return (
    <div className="min-h-screen bg-custom-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
          <div className="px-6 py-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white">{startup.name}</h1>
                <div className="flex items-center mt-2 text-gray-400">
                  <Building2 size={20} className="mr-2" />
                  <span>{startup.industry}</span>
                  <span className="mx-2">•</span>
                  <Globe size={20} className="mr-2" />
                  <span>{startup.location}</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-brand text-black rounded-md hover:bg-brand/90">
                Connect
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white">Funding Details</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Stage</div>
                    <div className="text-base font-medium text-white">{startup.stage}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Funding Needed</div>
                    <div className="text-base font-medium text-white">{startup.fundingNeeded}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white">Metrics</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Revenue</div>
                    <div className="text-base font-medium text-white">{startup.metrics.revenue}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Growth</div>
                    <div className="text-base font-medium text-white">{startup.metrics.growth}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Customers</div>
                    <div className="text-base font-medium text-white">{startup.metrics.customers}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white">Team</h3>
                <div className="mt-4">
                  <div className="flex items-center text-gray-300">
                    <Users size={20} className="mr-2" />
                    <span>{startup.team}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">About</h3>
              <p className="mt-4 text-gray-300">{startup.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">Traction</h3>
              <div className="mt-4 flex items-center text-gray-300">
                <Award size={20} className="mr-2" />
                <span>{startup.traction}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}