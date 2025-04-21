import React, { useState } from 'react';
const StockService: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fromYear: '',
    toYear: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    console.log('Form submitted:', formData);
  };
  const handleClose = () => {
    setShowPopup(false);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="bg-gray-600 min-h-screen flex flex-col">
      <a href="/components/stockservice" className="text-gray-500 text-sm mt-2 ml-2">
        Back to <span className="underline cursor-pointer">List</span>
      </a>
      <div className="flex-grow flex justify-center items-start pt-6">
        <div className="bg-white rounded-md shadow-md w-full max-w-lg">
          <div className="border-b border-gray-200 px-4 py-2 text-sm text-gray-700">
            Transfer Stock And Series
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-3 gap-4 items-center">
              <label htmlFor="fromYear" className="col-span-1 font-semibold text-gray-900 text-sm">
                From Year
              </label>
              <select
                id="fromYear"
                name="fromYear"
                value={formData.fromYear}
                onChange={handleInputChange}
                className="col-span-2 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">--Select Year--</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <label htmlFor="toYear" className="col-span-1 font-semibold text-gray-900 text-sm">
                To Year
              </label>
              <select
                id="toYear"
                name="toYear"
                value={formData.toYear}
                onChange={handleInputChange}
                className="col-span-2 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">--Select Year--</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="bg-green-500 text-white text-xs rounded-full px-4 py-1 mr-2 hover:bg-green-600 transition"
              >
                Transfer
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="bg-red-400 text-white text-xs rounded-full px-4 py-1 hover:bg-red-500 transition"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Popup Box */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Transfer Confirmation</h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to transfer stock and series from {formData.fromYear} to {formData.toYear}?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleClosePopup}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleClosePopup}
                className="px-4 py-2 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default StockService;