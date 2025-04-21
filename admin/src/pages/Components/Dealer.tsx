import React from 'react';
const Dealer = () => {
  return (
    <div className="bg-white text-black font-sans">
      <div className="p-4">
        <form className="w-full max-w-full">
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full sm:w-1/4 px-2 mb-4 sm:mb-0">
              <label htmlFor="firmName" className="block font-semibold text-sm mb-1">Firm Name</label>
              <select
                id="firmName"
                name="firmName"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-400 text-sm cursor-pointer"
              >
                <option>--Select--</option>
              </select>
            </div>
            <div className="w-full sm:w-1/4 px-2 mb-4 sm:mb-0">
              <label htmlFor="dealerName" className="block font-semibold text-sm mb-1">Dealer Name</label>
              <select
                id="dealerName"
                name="dealerName"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-400 text-sm cursor-pointer"
              >
                <option>--Select--</option>
              </select>
            </div>
            <div className="w-full sm:w-1/4 px-2 mb-4 sm:mb-0">
              <label htmlFor="city" className="block font-semibold text-sm mb-1">City</label>
              <select
                id="city"
                name="city"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-400 text-sm cursor-pointer"
              >
                <option>--Select--</option>
              </select>
            </div>
            <div className="w-full sm:w-1/4 px-2">
              <label htmlFor="state" className="block font-semibold text-sm mb-1">State</label>
              <select
                id="state"
                name="state"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-400 text-sm cursor-pointer"
              >
                <option>--Select--</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-6">
            <div className="w-full sm:w-1/4 px-2 mb-4 sm:mb-0">
              <label htmlFor="mobileNo" className="block font-semibold text-sm mb-1">Mobile No.</label>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>
            <div className="w-full sm:w-1/4 px-2 mb-4 sm:mb-0">
              <label htmlFor="gstin" className="block font-semibold text-sm mb-1">GSTIN</label>
              <input
                type="text"
                id="gstin"
                name="gstin"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>
            <div className="w-full sm:w-1/4 px-2 mb-4 sm:mb-0">
              <label htmlFor="status" className="block font-semibold text-sm mb-1">Status</label>
              <select
                id="status"
                name="status"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-400 text-sm cursor-pointer"
              >
                <option>--Select--</option>
              </select>
            </div>
            <div className="w-full sm:w-1/4 px-2 flex items-end space-x-3">
              <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded px-4 py-2"
              >
                Add Dealer
              </button>
              <button
                type="submit"
                className="bg-sky-400 hover:bg-sky-500 text-white text-sm font-semibold rounded px-4 py-2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="overflow-x-auto border border-gray-300 rounded">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gradient-to-b from-blue-600 to-blue-400 text-white text-xs font-bold text-left">
                <th className="border border-blue-700 px-2 py-1 text-left">DealerId</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Firm Name</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Telephone No. 1</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Telephone No. 2</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Mobile No</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Address Line 1</th>
                <th className="border border-blue-700 px-2 py-1 text-left">City</th>
                <th className="border border-blue-700 px-2 py-1 text-left">State</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Country</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Tin No</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Status</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Name</th>
                <th className="border border-blue-700 px-2 py-1 text-left">RName</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Contact No</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Email Id</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Remark</th>
                <th className="border border-blue-700 px-2 py-1 text-left">CreatedBy</th>
                <th className="border border-blue-700 px-2 py-1 text-left">CreatedOn</th>
                <th className="border border-blue-700 px-2 py-1 text-left">UpdatedBy</th>
                <th className="border border-blue-700 px-2 py-1 text-left">UpdateOn</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Dealer Code</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Agent</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Address Line2</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Address Line3</th>
                <th className="border border-blue-700 px-2 py-1 text-left">District</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Pin Code</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Date Of Birth</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Email Id</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Mobile</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Address Line 1</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Address Line 2</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Address Line 3</th>
                <th className="border border-blue-700 px-2 py-1 text-left">City</th>
                <th className="border border-blue-700 px-2 py-1 text-left">State</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Country</th>
                <th className="border border-blue-700 px-2 py-1 text-left">District </th>
                <th className="border border-blue-700 px-2 py-1 text-left">Pin Code</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Marital Status</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Annivarsary</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Agent Comission</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Bank Name</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Account Type</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Account No</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Account Holder Name</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Branch Name</th>
                <th className="border border-blue-700 px-2 py-1 text-left">IFSC Code</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Cheque No</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Cheque Remark</th>
                <th className="border border-blue-700 px-2 py-1 text-left">MICR Code</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Tpno Bnak</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Credits Limits</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Dealy Days</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Discount</th>
                <th className="border border-blue-700 px-2 py-1 text-left">State Code</th>
                <th className="border border-blue-700 px-2 py-1 text-left">GST In</th>
                <th className="border border-blue-700 px-2 py-1 text-left">AgentState</th>
                <th className="border border-blue-700 px-2 py-1 text-left">AgentCountry</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Mobile No.</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Address</th>
                <th className="border border-blue-700 px-2 py-1 text-left">Email Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-2 text-sm" colSpan={20}>No data available in table</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-700">Showing 0 to 0 of 0 entries</p>
      </div>
      {/* <footer className="p-4 text-xs text-gray-700">
        © 2025 - i-Softzone
      </footer> */}
    </div>
  );
};
export default Dealer;