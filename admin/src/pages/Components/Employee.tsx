import React from 'react';
const Employee = () => {
  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-full mx-auto px-4 py-4">
        <form className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-gray-300 pb-4">
          <label className="font-bold text-xs w-16" htmlFor="name">Name</label>
          <select
            id="name"
            className="border border-gray-300 rounded px-3 py-1 text-xs w-48"
            aria-label="Select Name"
          >
            <option>--Select--</option>
          </select>
          <label className="font-bold text-xs w-16" htmlFor="city">City</label>
          <select
            id="city"
            className="border border-gray-300 rounded px-3 py-1 text-xs w-48"
            aria-label="Select City"
          >
            <option>--Select--</option>
          </select>
          <label className="font-bold text-xs w-16" htmlFor="state">State</label>
          <select
            id="state"
            className="border border-gray-300 rounded px-3 py-1 text-xs w-48"
            aria-label="Select State"
          >
            <option>--Select--</option>
          </select>
          <label className="font-bold text-xs w-16" htmlFor="salary">Salary</label>
          <input
            id="salary"
            type="text"
            className="border border-gray-300 rounded px-3 py-1 text-xs w-48"
            aria-label="Salary"
          />
          <label className="font-bold text-xs w-16" htmlFor="mobile">Mobile No.</label>
          <input
            id="mobile"
            type="text"
            className="border border-gray-300 rounded px-3 py-1 text-xs w-48"
            aria-label="Mobile Number"
          />
          <label className="font-bold text-xs w-16" htmlFor="status">Status</label>
          <select
            id="status"
            className="border border-gray-300 rounded px-3 py-1 text-xs w-48"
            aria-label="Select Status"
          >
            <option>--Select--</option>
          </select>
          <div className="ml-auto flex gap-3">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded px-4 py-2"
            >
              Add Employee
            </button>
            <button
              type="submit"
              className="bg-sky-400 hover:bg-sky-500 text-white text-xs font-semibold rounded px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
        <div className="overflow-x-auto mt-2 border border-gray-300 rounded">
          <table className="min-w-max w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-b from-blue-600 to-blue-400 text-white text-xs font-bold text-left">
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">EmpId</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">First Name</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Last Name</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Father's Name</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Age</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Date Of Birth</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Blood Group</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Telephone No.</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Mobile No.</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Address</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Date of joining</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Current Salary</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Advance Given</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">P.Id Type</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Shift</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Ref. Contact</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Remark</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Status</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">CreatedBy</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">CreatedOn</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">UpdatedOn</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Title</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Gender</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">City</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">State</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Conuntry</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">District</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Pin Code</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Personal Id</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Location</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Ref. Name</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Bank Name</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Account Type</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Account No.</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">AC. H Name</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Branch Name</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">IFSC Code</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">cheque No. 1</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">c.Remark</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Tel.No Bank</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Advance Given</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">PId</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Ref. Contact</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Payment</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Cursal</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Mobile</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">Telephone</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">BloodGrp</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">PIdType</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">FirstName</th>
                <th className="border border-blue-500 px-3 py-2 whitespace-nowrap">LastName</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 text-xs text-gray-700">
                <td className="border border-gray-200 px-3 py-2 whitespace-nowrap" colSpan={14}>
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gray-100 text-xs text-gray-700 px-2 py-2 mt-1">
          Showing 0 to 0 of 0 entries
        </div>
      </div>
      <footer className="border-t border-gray-300 text-xs text-gray-700 px-4 py-2">
        © 2025 - i-Softzone
      </footer>
    </div>
  );
};
export default Employee;