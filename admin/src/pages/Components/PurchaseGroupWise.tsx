import React from 'react';
const PurchaseGroupWise: React.FC = () => {
  return (
    <div className="border border-blue-600 rounded-md m-4">
      <div className="bg-blue-600 text-white px-4 py-2 text-sm font-sans">
        Purchase Group Wise Report
      </div>
      <form className="flex flex-wrap items-center justify-between px-12 py-6 gap-4">
        <div className="flex flex-col text-sm font-sans text-gray-900">
          <label htmlFor="fromDate" className="mb-1">
            From Date
          </label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            defaultValue="2025-04-21"
            className="border border-gray-300 rounded px-3 py-2 w-40"
          />
        </div>
        <div className="flex flex-col text-sm font-sans text-gray-900">
          <label htmlFor="toDate" className="mb-1">
            To Date
          </label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            defaultValue="2025-04-21"
            className="border border-gray-300 rounded px-3 py-2 w-40"
          />
        </div>
        <div className="flex flex-col text-sm font-sans text-gray-900">
          <label htmlFor="series" className="mb-1">
            Series
          </label>
          <select
            id="series"
            name="series"
            className="border border-gray-300 rounded px-3 py-2 w-40"
          >
            <option value=""></option>
          </select>
        </div>
        <div className="flex space-x-4 ml-auto">
          <button
            type="submit"
            className="bg-green-600 text-white text-sm font-sans rounded px-4 py-2"
          >
            Ok
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white text-sm font-sans rounded px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default PurchaseGroupWise;