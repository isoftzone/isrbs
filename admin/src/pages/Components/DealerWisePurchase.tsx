import React from 'react';
const DealerWisePurchase: React.FC = () => {
  return (
    <div className="border border-blue-600 m-4 rounded">
      <div className="bg-blue-600 text-white px-4 py-2 text-sm font-sans">
        Dealer Wise Purchase Report
      </div>
      <form className="px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-8 font-sans text-sm text-gray-900">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label htmlFor="dealer" className="w-28 whitespace-nowrap">
            Dealer Name
          </label>
          <select
            id="dealer"
            name="dealer"
            className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label htmlFor="fromDate" className="w-20 whitespace-nowrap">
            From Date
          </label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
            defaultValue="2025-04-21"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label htmlFor="toDate" className="w-16 whitespace-nowrap">
            To Date
          </label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
            defaultValue="2025-04-21"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label htmlFor="noFrom" className="w-28 whitespace-nowrap">
            No. From
          </label>
          <input
            type="text"
            id="noFrom"
            name="noFrom"
            className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label htmlFor="noTo" className="w-20 whitespace-nowrap">
            No. To
          </label>
          <input
            type="text"
            id="noTo"
            name="noTo"
            className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label htmlFor="series" className="w-16 whitespace-nowrap">
            Series
          </label>
          <select
            id="series"
            name="series"
            className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
          ></select>
        </div>
        <div className="sm:col-span-3 flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-1 rounded text-sm"
          >
            Ok
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-1 rounded text-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default DealerWisePurchase;