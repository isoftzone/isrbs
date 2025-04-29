import React from 'react';

const CustomerMaster = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Customer Form</h2>

        <form className="space-y-4">
          {/* Firm Name, Customer Name, State, City */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="firmName" className="block text-sm font-medium text-gray-700">Firm Name</label>
              <select id="firmName" className="w-full mt-2 p-2 border rounded-md">
                <option>--Select--</option>
              </select>
            </div>
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
              <select id="customerName" className="w-full mt-2 p-2 border rounded-md">
                <option>--Select--</option>
              </select>
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <select id="state" className="w-full mt-2 p-2 border rounded-md">
                <option>--Select--</option>
              </select>
            </div>
            
          </div>

          {/* GSTIN, Mobile No., Sale Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">City</label>
              <select id="state" className="w-full mt-2 p-2 border rounded-md">
                <option>--City--</option>
              </select>
            </div>
            <div>
              <label htmlFor="gstin" className="block text-sm font-medium text-gray-700">GSTIN</label>
              <input
                type="text"
                id="gstin"
                className="w-full mt-2 p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile No.</label>
              <input
                type="text"
                id="mobileNo"
                className="w-full mt-2 p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">Sale Price</label>
              <select id="salePrice" className="w-full mt-2 p-2 border rounded-md">
                <option>--Select--</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
              <select id="status" className="w-full mt-2 p-2 border rounded-md">
                <option>--Select--</option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           
            <div className="col-span-2">
              <div className="flex justify-between">
                <button className="bg-green-500 text-white p-2 rounded-md">Add Customer</button>
                <button className="bg-blue-500 text-white p-2 rounded-md">Search</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Customer Table</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300">CustomerId</th>
              <th className="px-4 py-2 border border-gray-300">Agent</th>
              <th className="px-4 py-2 border border-gray-300">Firm Name</th>
              <th className="px-4 py-2 border border-gray-300">Cust.Code</th>
              <th className="px-4 py-2 border border-gray-300">Sale Price</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Phone No.1</th>
              <th className="px-4 py-2 border border-gray-300">Phone No.2</th>
              <th className="px-4 py-2 border border-gray-300">Mobile No.</th>
              <th className="px-4 py-2 border border-gray-300">Email Id</th>
              <th className="px-4 py-2 border border-gray-300">Address 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={11} className="px-4 py-2 text-center text-gray-500">No data available in table</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CustomerMaster;