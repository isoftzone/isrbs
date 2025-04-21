import React, { useState } from 'react';
const StockInwardSearch: React.FC = () => {
  const [formData, setFormData] = useState({
    series: '',
    noFrom: '',
    noTo: '',
    fromDate: '',
    toDate: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching with:', formData);
    // Add search logic here
  };
  const handleAddEntry = () => {
    console.log('Redirecting to add entry');
    // Add navigation or modal logic here
  };
  return (
    <div className="bg-white text-black font-sans">
      <div className="p-4">
        <p className="mb-4 text-base font-normal">Stock Inward Search</p>
        <form
          onSubmit={handleSearch}
          className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm font-semibold text-gray-900"
        >
          <label className="flex items-center gap-2 whitespace-nowrap">
            <span>Series</span>
            <input
              type="text"
              name="series"
              value={formData.series}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-36"
            />
          </label>
          <label className="flex items-center gap-2 whitespace-nowrap">
            <span>No. From</span>
            <input
              type="text"
              name="noFrom"
              value={formData.noFrom}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-36"
            />
          </label>
          <label className="flex items-center gap-2 whitespace-nowrap">
            <span>No. To</span>
            <input
              type="text"
              name="noTo"
              value={formData.noTo}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-36"
            />
          </label>
          <label className="flex items-center gap-2 whitespace-nowrap">
            <span>Location</span>
            <select
              disabled
              className="border border-gray-300 rounded px-2 py-1 text-sm w-44 text-gray-400 bg-white cursor-not-allowed"
            >
              <option>--Select--</option>
            </select>
          </label>
          <label className="flex items-center gap-2 whitespace-nowrap">
            <span>From Date</span>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-36"
            />
          </label>
          <label className="flex items-center gap-2 whitespace-nowrap">
            <span>To Date</span>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-36"
            />
          </label>
          <button
            type="submit"
            className="bg-sky-400 text-white rounded px-3 py-1 text-sm font-normal"
          >
            Search
          </button>
          <button
            type="button"
            onClick={handleAddEntry}
            className="bg-lime-600 text-white rounded px-3 py-1 text-sm font-normal"
          >
            Add Entry
          </button>
        </form>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gradient-to-b from-blue-600 to-blue-500 text-white text-sm font-semibold">
            <th className="border border-blue-700 px-2 py-1 text-left">Series</th>
            <th className="border border-blue-700 px-2 py-1 text-left">STIMasterID</th>
            <th className="border border-blue-700 px-2 py-1 text-left">STIDate</th>
            <th className="border border-blue-700 px-2 py-1 text-left">ItemQty</th>
            <th className="border border-blue-700 px-2 py-1 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 h-32">
            <td className="border border-gray-300 px-2 py-1"></td>
            <td className="border border-gray-300 px-2 py-1"></td>
            <td className="border border-gray-300 px-2 py-1"></td>
            <td className="border border-gray-300 px-2 py-1"></td>
            <td className="border border-gray-300 px-2 py-1"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default StockInwardSearch;
