import React from 'react';
const DealerReport: React.FC = () => {
  return (
    <div className="border border-blue-600 rounded-md m-4">
      <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-t-md">Dealer Report</div>
      <form className="p-6 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 items-center">
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <label htmlFor="dealer" className="text-sm w-20 text-right">
            Dealer
          </label>
          <select
            id="dealer"
            name="dealer"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-40"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <label htmlFor="dealerFirm" className="text-sm w-32 text-right">
            Dealer Firm Name
          </label>
          <select
            id="dealerFirm"
            name="dealerFirm"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-40"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <label htmlFor="mobileNo" className="text-sm w-24 text-right">
            Mobile No.
          </label>
          <input
            id="mobileNo"
            name="mobileNo"
            type="text"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-40"
          />
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <label htmlFor="city" className="text-sm w-20 text-right">
            City
          </label>
          <select
            id="city"
            name="city"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-40"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <label htmlFor="state" className="text-sm w-32 text-right">
            State
          </label>
          <select
            id="state"
            name="state"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-40"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <label htmlFor="gstNo" className="text-sm w-24 text-right">
            GST No.
          </label>
          <input
            id="gstNo"
            name="gstNo"
            type="text"
            className="border border-gray-300 rounded px-2 py-1 text-sm w-40"
          />
        </div>
        <div className="col-span-3 flex justify-end space-x-4 pt-2">
          <button type="submit" className="bg-green-600 text-white text-sm px-4 py-1 rounded">
            Ok
          </button>
          <button type="button" className="bg-blue-600 text-white text-sm px-4 py-1 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default DealerReport;