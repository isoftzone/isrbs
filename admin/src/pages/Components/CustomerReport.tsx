import React from 'react';

const CustomerReport: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold bg-blue-500 text-white p-3 rounded-t-md">Customer Report</h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Row 1 */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Customer Name</label>
          <select className="border rounded p-2">
            <option>--Select--</option>
            {/* Options dynamically */}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Firm Name</label>
          <select className="border rounded p-2">
            <option>--Select--</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Mobile No.</label>
          <input type="text" className="border rounded p-2" />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">City</label>
          <select className="border rounded p-2">
            <option>--Select--</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">State</label>
          <select className="border rounded p-2">
            <option>--Select--</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">GST No.</label>
          <input type="text" className="border rounded p-2" />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Sale Price</label>
          <select className="border rounded p-2">
            <option>--Select--</option>
          </select>
        </div>
      </form>

      <div className="flex gap-3 px-4 pb-4">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded">
          Ok
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CustomerReport;
