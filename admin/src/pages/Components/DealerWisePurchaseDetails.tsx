import React from 'react';
const DealerWisePurchaseDetails: React.FC = () => {
  return (
    <div className="border border-blue-600 rounded-md m-4">
      <div className="bg-blue-600 text-white px-4 py-2 text-sm font-sans rounded-t-md">
        Dealer Wise Purchase Detail Report
      </div>
      <form className="px-6 py-4 font-sans text-sm text-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-4 items-center">
          <label htmlFor="dealer" className="text-right sm:text-left sm:col-span-1">
            Dealer Name
          </label>
          <select
            id="dealer"
            name="dealer"
            className="border border-gray-300 rounded px-2 py-1 sm:col-span-1 w-full max-w-[160px]"
          >
            <option>--Select--</option>
          </select>
          <label htmlFor="fromDate" className="text-right sm:text-left sm:col-span-1">
            From Date
          </label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            defaultValue="2025-04-21"
            className="border border-gray-300 rounded px-2 py-1 sm:col-span-1 w-full max-w-[160px]"
          />
          <label htmlFor="toDate" className="text-right sm:text-left sm:col-span-1">
            To Date
          </label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            defaultValue="2025-04-21"
            className="border border-gray-300 rounded px-2 py-1 sm:col-span-1 w-full max-w-[160px]"
          />
          <label htmlFor="noFrom" className="text-right sm:text-left sm:col-span-1">
            No. From
          </label>
          <input
            type="text"
            id="noFrom"
            name="noFrom"
            className="border border-gray-300 rounded px-2 py-1 sm:col-span-1 w-full max-w-[160px]"
          />
          <label htmlFor="noTo" className="text-right sm:text-left sm:col-span-1">
            No. To
          </label>
          <input
            type="text"
            id="noTo"
            name="noTo"
            className="border border-gray-300 rounded px-2 py-1 sm:col-span-1 w-full max-w-[160px]"
          />
          <label htmlFor="series" className="text-right sm:text-left sm:col-span-1">
            Series
          </label>
          <select
            id="series"
            name="series"
            className="border border-gray-300 rounded px-2 py-1 sm:col-span-1 w-full max-w-[160px]"
          ></select>
          <div className="sm:col-span-6 flex justify-end space-x-4 pt-2">
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
        </div>
      </form>
    </div>
  );
};
export default DealerWisePurchaseDetails;