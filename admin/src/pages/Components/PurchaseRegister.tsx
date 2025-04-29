import React from 'react';

const PurchaseRegister: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold bg-blue-500 text-white p-3 rounded-t-md">
        Purchase Register Report
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Row 1 */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Dealer Name</label>
          <select className="border rounded p-2">
            <option>--Select--</option>
            {/* More options */}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">From Date</label>
          <input type="date" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">To Date</label>
          <input type="date" className="border rounded p-2" />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">No. From</label>
          <input type="text" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">No. To</label>
          <input type="text" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Series</label>
          <select className="border rounded p-2">
            <option>--Select--</option>
          </select>
        </div>
      </form>

      {/* Buttons */}
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

export default PurchaseRegister;
