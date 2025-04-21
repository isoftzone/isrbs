import React, { useState } from 'react';
const Title: React.FC = () => {
  const [primeName, setPrimeName] = useState('');
  const [status, setStatus] = useState('Active');
  const [remark, setRemark] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const handleCreate = () => {
    // Add your create logic here
    console.log('Creating with:', { primeName, status, remark });
    alert(`Created: ${primeName} (Status: ${status})`);
  };
  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-full p-4">
        <h1 className="text-lg font-normal mb-2">Title</h1>
        <hr className="border-t border-gray-300 mb-4" />
        <div className="flex flex-col md:flex-row md:space-x-20">
          <form className="flex flex-col space-y-3 w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>
            <label className="text-xs font-normal" htmlFor="primeName">Prime Name</label>
            <input
              id="primeName"
              type="text"
              className="border border-gray-300 rounded px-2 py-1 text-xs"
              value={primeName}
              onChange={(e) => setPrimeName(e.target.value)}
            />
            <label className="text-xs font-normal" htmlFor="sequenceNo">Sequence No.</label>
            <input
              id="sequenceNo"
              type="number"
              value="2"
              readOnly
              className="border border-gray-300 rounded px-2 py-1 text-xs bg-white text-gray-400 cursor-not-allowed"
            />
            <label className="text-xs font-normal" htmlFor="status">Status</label>
            <select
              id="status"
              className="border border-gray-300 rounded px-2 py-1 text-xs bg-white"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
            <label className="text-xs font-normal" htmlFor="remark">Remark</label>
            <textarea
              id="remark"
              rows={3}
              className="border border-gray-300 rounded px-2 py-1 text-xs"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            ></textarea>
            <div className="flex space-x-2">
              <button
                type="button"
                className={`text-xs rounded px-3 py-1 ${primeName ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-white cursor-not-allowed'}`}
                onClick={handleCreate}
                disabled={!primeName}
              >
                Create
              </button>
              <input type="text" className="border border-gray-300 rounded px-2 py-1 w-16 text-xs" />
            </div>
          </form>
          <div className="flex-1 mt-6 md:mt-0">
            <div className="flex justify-between items-center mb-2 text-xs font-semibold">
              <div>
                Show
                <select className="border border-gray-300 rounded px-1 py-0.5 ml-1 mr-1 text-xs">
                  <option>10</option>
                </select>
                entries
              </div>
              <div className="flex items-center space-x-1">
                <label htmlFor="search" className="font-semibold">Search:</label>
                <input
                  id="search"
                  type="text"
                  className="border border-gray-300 rounded px-1 py-0.5 text-xs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <table className="w-full text-xs border-collapse border border-gray-300">
              <thead>
                <tr className="border-b border-gray-400">
                  <th className="border-r border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">Sequence <span className="inline-block transform rotate-45 text-gray-400">▲</span></th>
                  <th className="border-r border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">PrimeName <span className="inline-block text-gray-400">▲</span></th>
                  <th className="border-r border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">Status <span className="inline-block text-gray-400">▲</span></th>
                  <th className="px-2 py-1 text-left font-semibold cursor-pointer select-none">Remark <span className="inline-block text-gray-400">▲</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="border-r border-gray-400 px-2 py-1">1</td>
                  <td className="border-r border-gray-400 px-2 py-1">MR.</td>
                  <td className="border-r border-gray-400 px-2 py-1">Active</td>
                  <td className="px-2 py-1"></td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-2 text-xs">
              <div>Showing 1 to 1 of 1 entries</div>
              <div className="flex items-center space-x-2">
                <span>Previous</span>
                <button className="border border-gray-300 rounded px-3 py-1 bg-gray-100 text-xs">1</button>
                <span>Next</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 mt-6 mb-2" />
        <div className="text-xs">© 2025 - i-Softzone</div>
      </div>
    </div>
  );
};
export default Title;