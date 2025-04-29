import React from 'react';
const DealerWisePurchaseComparison: React.FC = () => {
  return (
    <div className="border border-blue-600 rounded-sm m-2">
      <div className="bg-blue-600 text-white px-3 py-2 text-sm font-sans">
        Dealer Wise Purchase Comparison Report
      </div>
      <form className="flex flex-wrap items-center px-4 py-4 gap-x-6 gap-y-4 font-sans text-sm text-gray-900">
        <label className="flex items-center gap-2 whitespace-nowrap">
          <span>Dealer Name</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            name="dealerName"
            aria-label="Dealer Name"
          >
            <option>--Select--</option>
          </select>
        </label>
        <label className="flex items-center gap-2 whitespace-nowrap">
          <span>From Date</span>
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            defaultValue="2025-04-21"
            name="fromDate"
            aria-label="From Date"
          />
        </label>
        <label className="flex items-center gap-2 whitespace-nowrap">
          <span>To Date</span>
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            defaultValue="2025-04-21"
            name="toDate"
            aria-label="To Date"
          />
        </label>
        <label className="flex items-center gap-2 whitespace-nowrap">
          <span>Series</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            name="series"
            aria-label="Series"
          >
            <option value="">--Select--</option>
          </select>
        </label>
        <div className="ml-auto flex gap-3">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700 transition-colors"
          >
            Ok
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default DealerWisePurchaseComparison;