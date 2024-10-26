import React from 'react';
import { TrendingUp, Shield, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Hero = () => {
  const { setShowLoanForm, setShowLoginModal } = useApp();

  return (
    <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Smart Finance
            </span>
            <br />
            <span className="text-white">for Smart Students</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Quick microloans, smart savings, and rewards designed specifically for university students.
            Take control of your finances today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowLoanForm(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Apply Now
            </button>
            <button
              onClick={() => setShowLoginModal(true)}
              className="border border-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-500/10 transition-colors"
            >
              Login
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-purple-400" />}
            title="Quick Approval"
            description="Get your loan approved in minutes, not days. Perfect for urgent student needs."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-purple-400" />}
            title="Secure & Safe"
            description="Bank-level security ensures your data and transactions are always protected."
          />
          <FeatureCard
            icon={<TrendingUp className="h-8 w-8 text-purple-400" />}
            title="Build Credit"
            description="Start building your credit history early with our student-focused programs."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  </div>
);

export default Hero;