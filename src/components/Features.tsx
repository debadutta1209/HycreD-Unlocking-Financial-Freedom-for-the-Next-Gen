import React from 'react';
import { CreditCard, PiggyBank, Trophy, BookOpen } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Why Choose HycreD?
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We're more than just a loan platform. We're your partner in building a strong financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<CreditCard className="h-8 w-8" />}
            title="Smart Loans"
            description="Quick access to microloans with competitive rates designed for students"
          />
          <FeatureCard
            icon={<PiggyBank className="h-8 w-8" />}
            title="Goal-Based Savings"
            description="Set and track your savings goals with automated tools"
          />
          <FeatureCard
            icon={<Trophy className="h-8 w-8" />}
            title="Rewards Program"
            description="Earn points for responsible financial behavior and good grades"
          />
          <FeatureCard
            icon={<BookOpen className="h-8 w-8" />}
            title="Financial Education"
            description="Access to resources and tools to improve your financial literacy"
          />
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Take Control of Your Finances?
              </h3>
              <p className="text-white/90 mb-8">
                Join thousands of students who are already building their financial future with HycreD.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
    <div className="text-purple-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Features;