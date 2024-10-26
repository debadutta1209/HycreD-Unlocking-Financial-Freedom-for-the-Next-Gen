import React from 'react';
import { CreditCard, Wallet, TrendingUp, PiggyBank } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Your Financial Dashboard
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={<CreditCard className="h-6 w-6 text-purple-400" />}
            title="Available Credit"
            value="₹2,50,000"
            trend="+20%"
          />
          <MetricCard
            icon={<Wallet className="h-6 w-6 text-purple-400" />}
            title="Current Balance"
            value="₹84,000"
            trend="+5%"
          />
          <MetricCard
            icon={<TrendingUp className="h-6 w-6 text-purple-400" />}
            title="Credit Score"
            value="725"
            trend="+15"
          />
          <MetricCard
            icon={<PiggyBank className="h-6 w-6 text-purple-400" />}
            title="Savings Goal"
            value="₹1,20,000"
            trend="80%"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <ActivityItem
                title="Loan Payment"
                amount="₹20,000"
                date="Mar 15"
                type="payment"
              />
              <ActivityItem
                title="Rewards Earned"
                amount="+50 pts"
                date="Mar 14"
                type="reward"
              />
              <ActivityItem
                title="Savings Deposit"
                amount="₹30,000"
                date="Mar 12"
                type="savings"
              />
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Rewards Progress</h3>
            <div className="space-y-6">
              <ProgressBar title="Cashback Rewards" progress={75} />
              <ProgressBar title="Referral Bonus" progress={30} />
              <ProgressBar title="Study Points" progress={90} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon, title, value, trend }: { icon: React.ReactNode; title: string; value: string; trend: string }) => (
  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
    <div className="flex items-center justify-between mb-4">
      {icon}
      <span className="text-green-400 text-sm">{trend}</span>
    </div>
    <h3 className="text-gray-400 text-sm">{title}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

const ActivityItem = ({ title, amount, date, type }: { title: string; amount: string; date: string; type: string }) => (
  <div className="flex items-center justify-between py-2">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
    <span className={`font-medium ${type === 'payment' ? 'text-red-400' : 'text-green-400'}`}>
      {amount}
    </span>
  </div>
);

const ProgressBar = ({ title, progress }: { title: string; progress: number }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">{title}</span>
      <span className="text-sm font-medium">{progress}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

export default Dashboard;