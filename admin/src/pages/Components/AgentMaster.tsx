import React from 'react';
const AgentMaster = () => {
  return (
    <div className="bg-white text-gray-900 font-sans p-4">
      <form className="w-full max-w-full mb-4">
        <div className="flex flex-wrap -mx-2 mb-2">
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="agentName" className="block font-bold text-sm mb-1">Agent Name</label>
            <select
              id="agentName"
              name="agentName"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="agentFirmName" className="block font-bold text-sm mb-1">Agent Firm Name</label>
            <select
              id="agentFirmName"
              name="agentFirmName"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="mobileNo" className="block font-bold text-sm mb-1">Mobile No.</label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm"
            />
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="city" className="block font-bold text-sm mb-1">City</label>
            <select
              id="city"
              name="city"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="state" className="block font-bold text-sm mb-1">State</label>
            <select
              id="state"
              name="state"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="status" className="block font-bold text-sm mb-1">Status</label>
            <select
              id="status"
              name="status"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded"
          >
            Add Agent
          </button>
          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-500 text-white text-sm font-semibold px-4 py-1 rounded"
          >
            Search
          </button>
        </div>
      </form>
      <div className="overflow-x-auto border border-gray-300 rounded">
        <table className="min-w-max w-full border-collapse border border-gray-300 text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-blue-700 px-2 py-1 font-semibold">AgentId</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Firm Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CTelephone No</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CMobile No</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Status</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Agent Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Date Of Birth</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CAddress Line1</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CAddress Line2</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CAddress Line3</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CCity</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CState</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CCountry</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CDistrict</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CPincode</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Personal Id Type</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Personal Id</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PMobile</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PEmail</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PAddress Line1</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PAddress Line2</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PAddress Line3</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PCity</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PState</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PCountry</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PDistrict</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PPinCode</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Bank Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Account Type</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Account No</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Account Holder Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Branch Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">IFSC Code</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Cheque Remark</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Micr Code</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Telephone No Bank</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CreatedBy</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CreatedOn</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">UpdatedBy</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">UpdatedOn</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Remark</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Pan No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1" colSpan={14}>No data available in table</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-xs text-gray-900">Showing 0 to 0 of 0 entries</div>
      <footer className="mt-6 text-xs text-gray-700">© 2025 - i-Softzone</footer>
    </div>
  );
};
export default AgentMaster;