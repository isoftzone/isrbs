import React from 'react';
const StockOutward: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-full mx-auto">
        <div className="bg-gradient-to-b from-[#4A6A9B] to-[#2F4F7F] text-black text-[13px] px-3 py-1">
          Stock Outward
        </div>
        <form className="px-3 py-4 space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-[13px] font-semibold">
            <label className="flex items-center gap-2 min-w-[90px]">
              STO No.
              <input
                type="text"
                placeholder="STO"
                className="border border-gray-300 rounded text-[13px] px-2 py-1 w-20"
              />
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded text-[13px] px-2 py-1 w-14"
            />
            <label className="flex items-center gap-2 min-w-[50px]">
              Date
              <input
                type="date"
                defaultValue="2025-04-20"
                className="border border-gray-300 rounded text-[13px] px-2 py-1 w-36"
              />
              <i className="far fa-calendar-alt text-black"></i>
            </label>
            <label className="flex items-center gap-2 min-w-[70px]">
              Location
              <select
                className="border border-gray-300 rounded text-[13px] px-2 py-1 w-48 text-gray-400"
              >
                <option disabled selected>--Select Location--</option>
              </select>
            </label>
            <label className="flex items-center gap-2 min-w-[60px]">
              Remark
              <input
                type="text"
                className="border border-gray-300 rounded text-[13px] px-2 py-1 w-48"
              />
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[13px] font-semibold">
            <label className="flex flex-col min-w-[120px]">
              Bar Code
              <input
                type="text"
                className="border border-gray-300 rounded text-[13px] px-2 py-1 mt-1"
              />
            </label>
            <label className="flex flex-col min-w-[140px]">
              Look Up
              <input
                type="text"
                className="border border-gray-300 rounded text-[13px] px-2 py-1 mt-1"
              />
            </label>
            <label className="flex flex-col min-w-[220px]">
              Item Description
              <input
                type="text"
                className="border border-gray-300 rounded text-[13px] px-2 py-1 mt-1"
              />
            </label>
            <label className="flex flex-col min-w-[80px]">
              MRP
              <input
                type="text"
                className="border border-gray-300 rounded text-[13px] px-2 py-1 mt-1 w-20"
              />
            </label>
            <label className="flex flex-col min-w-[80px]">
              Qty
              <input
                type="text"
                className="border border-gray-300 rounded text-[13px] px-2 py-1 mt-1 w-20"
              />
            </label>
            <div className="flex items-end gap-3">
              <button
                type="button"
                className="bg-green-500 text-white text-[13px] font-normal rounded px-3 py-1"
              >
                Add
              </button>
              <button
                type="button"
                className="bg-gray-400 text-gray-700 text-[13px] font-normal rounded px-3 py-1"
              >
                Remove
              </button>
              <button
                type="button"
                className="bg-yellow-400 text-gray-900 text-[13px] font-normal rounded px-3 py-1"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gradient-to-b from-[#4A6A9B] to-[#2F4F7F] text-white text-left">
                <th className="border border-gray-300 px-2 py-1 w-[8%] font-semibold">SNO</th>
                <th className="border border-gray-300 px-2 py-1 w-[20%] font-semibold">Barcode</th>
                <th className="border border-gray-300 px-2 py-1 w-[50%] font-semibold">Description</th>
                <th className="border border-gray-300 px-2 py-1 w-[12%] font-semibold">MRP</th>
                <th className="border border-gray-300 px-2 py-1 w-[10%] font-semibold">Qty</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-2 py-1" colSpan={5}>No data available in table</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#E6E6E1] text-[13px] px-2 py-3">
          Showing 0 to 0 of 0 entries
        </div>
        <div className="flex justify-center my-6">
          <button
            type="button"
            className="bg-green-500 text-white text-[13px] font-normal rounded px-4 py-2"
          >
            Save
          </button>
        </div>
        <div className="px-3 mb-6">
          <a href="/components/stockoutward" className="text-[13px] text-[#4A6A9B]">Back to List</a>
        </div>
      </div>
    </div>
  );
};
export default StockOutward;