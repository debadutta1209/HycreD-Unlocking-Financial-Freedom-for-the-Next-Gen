import React from 'react';
import Modal from './Modal';
import { useApp } from '../context/AppContext';

const LoanForm = () => {
  const { showLoanForm, setShowLoanForm } = useApp();

  return (
    <Modal
      isOpen={showLoanForm}
      onClose={() => setShowLoanForm(false)}
      title="Apply for a Loan"
    >
      <form className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-300 mb-1">
            Purpose
          </label>
          <select
            id="purpose"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="education">Education Fees</option>
            <option value="books">Books & Supplies</option>
            <option value="accommodation">Accommodation</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Submit Application
        </button>
      </form>
    </Modal>
  );
};

export default LoanForm;