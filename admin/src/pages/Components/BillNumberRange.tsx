import React, { useState } from 'react';
interface BillFilterPanelProps {}
const BillNumberRange: React.FC<BillFilterPanelProps> = () => {
  const [billNoFrom, setBillNoFrom] = useState('');
  const [billNoTo, setBillNoTo] = useState('');
  const handleUpdate = () => {
    console.log('Filter Bill No. From:', billNoFrom, 'To:', billNoTo);
    alert(`Filtering bills from: ${billNoFrom} to ${billNoTo}`);
    // In a real application, you would trigger your filtering logic here.
  };
  const handleCancel = () => {
    setBillNoFrom('');
    setBillNoTo('');
    alert('Filter criteria cleared.');
    // In a real application, you might reset any applied filters.
  };
  const handleClose = () => {
    alert('Closing filter panel.');
    // In a real application, you might close a modal or navigate away.
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-4 flex items-center space-x-2">
        <label htmlFor="billNoFrom" className="block text-gray-700 text-sm font-bold">
          From
        </label>
        <select
          id="billNoFromSelect"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option>Select</option>
          {/* Add your dropdown options here */}
        </select>
        <input
          type="text"
          id="billNoFrom"
          className="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={billNoFrom}
          onChange={(e) => setBillNoFrom(e.target.value)}
        />
        <span className="text-gray-700 text-sm font-bold">To</span>
        <input
          type="text"
          id="billNoTo"
          className="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={billNoTo}
          onChange={(e) => setBillNoTo(e.target.value)}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
const BillFilterTabPanel = () => {
  const [activeTab, setActiveTab] = useState('Bill_Filter');
  const tabs = [{ id: 'Bill_Filter', label: 'Bill Filter' }];
  return (
    <div className="p-4">
      <div className="flex border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-medium text-sm focus:outline-none ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === 'Bill_Filter' && <BillNumberRange />}
    </div>
  );
};
export default BillNumberRange;