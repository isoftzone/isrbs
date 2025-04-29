import React from 'react';
const EmployeeReport: React.FC = () => {
  return (
    <div className="max-w-full border border-blue-600 rounded-md m-4">
      <div className="bg-blue-600 text-white px-4 py-2 rounded-t-md text-sm font-sans">
        Employee Report
      </div>
      <form className="px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-4 font-sans text-sm text-gray-900">
        <div className="flex flex-col justify-center">
          <label htmlFor="employeeName" className="mb-1">
            Employee Name
          </label>
          <select
            id="employeeName"
            name="employeeName"
            className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="city" className="mb-1">
            City
          </label>
          <select
            id="city"
            name="city"
            className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="state" className="mb-1">
            State
          </label>
          <select
            id="state"
            name="state"
            className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="mobileNo" className="mb-1">
            Mobile No.
          </label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="salePrice" className="mb-1">
            Sale Price
          </label>
          <select
            id="salePrice"
            name="salePrice"
            className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex items-center space-x-3 pt-6">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-normal px-3 py-1 rounded"
          >
            Ok
          </button>
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-normal px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default EmployeeReport;