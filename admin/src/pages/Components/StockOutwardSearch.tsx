import React from 'react';
const StockOutwardSearch: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans">
      <div className="p-4 max-w-full">
        <p className="mb-4 text-base">Stock Outward Search</p>
        <form className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <label className="flex flex-col text-sm font-semibold w-36">
            Series
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded px-2 py-1 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col text-sm font-semibold w-36">
            No. From
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded px-2 py-1 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col text-sm font-semibold w-36">
            No. To
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded px-2 py-1 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col text-sm font-semibold w-36">
            Location
            <select
              className="mt-1 border border-gray-300 rounded px-2 py-1 w-40 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>--Select--</option>
            </select>
          </label>
          <label className="flex flex-col text-sm font-semibold w-36">
            From Date
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              className="mt-1 border border-gray-300 rounded px-2 py-1 w-40 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col text-sm font-semibold w-36">
            To Date
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              className="mt-1 border border-gray-300 rounded px-2 py-1 w-40 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <button
            type="submit"
            className="mt-6 bg-sky-400 text-white text-sm font-normal rounded px-4 py-1"
          >
            Search
          </button>
          <button
            type="button"
            className="mt-6 bg-green-500 text-white text-sm font-normal rounded px-4 py-1"
          >
            Add Entry
          </button>
        </form>
        <table className="mt-6 w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-b from-blue-600 to-blue-500 text-white text-sm font-semibold">
              <th className="border border-blue-700 px-3 py-2 text-left">Series</th>
              <th className="border border-blue-700 px-3 py-2 text-left">STOMasterId</th>
              <th className="border border-blue-700 px-3 py-2 text-left">STODate</th>
              <th className="border border-blue-700 px-3 py-2 text-left">ItemQty</th>
              <th className="border border-blue-700 px-3 py-2 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 h-32">
              <td className="border border-blue-700 px-3 py-2"></td>
              <td className="border border-blue-700 px-3 py-2"></td>
              <td className="border border-blue-700 px-3 py-2"></td>
              <td className="border border-blue-700 px-3 py-2"></td>
              <td className="border border-blue-700 px-3 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StockOutwardSearch;






