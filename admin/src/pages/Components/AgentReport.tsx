import React from 'react';

const AgentReport: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md max-w-screen-xl mx-auto">
      <h2 className="text-lg font-semibold text-white bg-blue-600 p-3 rounded-t">Agent Report</h2>
      <form className="bg-white p-4 rounded-b">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Agent Name */}
          <div>
            <label className="block font-medium mb-1">Agent Name</label>
            <select className="w-full border p-2 rounded">
              <option>--Select--</option>
            </select>
          </div>

          {/* Firm Name */}
          <div>
            <label className="block font-medium mb-1">Firm Name</label>
            <select className="w-full border p-2 rounded">
              <option>--Select--</option>
            </select>
          </div>

          {/* Mobile No. */}
          <div>
            <label className="block font-medium mb-1">Mobile No.</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Enter mobile no."
            />
          </div>

          {/* City */}
          <div>
            <label className="block font-medium mb-1">City</label>
            <select className="w-full border p-2 rounded">
              <option>--Select--</option>
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block font-medium mb-1">State</label>
            <select className="w-full border p-2 rounded">
              <option>--Select--</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium mb-1">Status</label>
            <select className="w-full border p-2 rounded">
              <option>--Select--</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Ok
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgentReport;
