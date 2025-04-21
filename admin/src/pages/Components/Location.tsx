import React, { useState } from 'react';
interface LocationEntry {
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const Location: React.FC = () => {
  const [primeName, setPrimeName] = useState('');
  const [sequenceNo, setSequenceNo] = useState(1);
  const [remark, setRemark] = useState('');
  const [entries, setEntries] = useState<LocationEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!primeName.trim()) return;
    const newEntry: LocationEntry = {
      sequence: sequenceNo,
      primeName: primeName.trim(),
      status: 'Active',
      remark: remark.trim()
    };
    setEntries([...entries, newEntry]);
    setPrimeName('');
    setRemark('');
    setSequenceNo(prev => prev + 1);
  };
  const filteredEntries = entries.filter(entry =>
    Object.values(entry).some(
      value => value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  ));
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">
      <div className="border-b border-gray-300 px-4 py-3">
        <h1 className="text-lg font-normal">Location</h1>
      </div>
      <div className="flex flex-col md:flex-row px-4 py-6 space-y-6 md:space-y-0 md:space-x-12 flex-1">
        <form
          className="flex flex-col space-y-4 w-full max-w-xs"
          onSubmit={handleSubmit}
        >
          <label className="text-xs font-normal" htmlFor="primeName">Prime Name</label>
          <input
            id="primeName"
            type="text"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            autoComplete="off"
            value={primeName}
            onChange={(e) => setPrimeName(e.target.value)}
            required
          />
          <label className="text-xs font-normal" htmlFor="sequenceNo">Sequence No.</label>
          <input
            id="sequenceNo"
            type="number"
            value={sequenceNo}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            autoComplete="off"
            readOnly
          />
          <label className="text-xs font-normal" htmlFor="status">Status</label>
          <select
            id="status"
            className="border border-gray-300 rounded px-3 py-2 text-sm bg-white cursor-not-allowed"
            disabled
          >
            <option>Active</option>
          </select>
          <label className="text-xs font-normal" htmlFor="remark">Remark</label>
          <textarea
            id="remark"
            rows={3}
            className="border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          ></textarea>
          <div className="flex space-x-2">
            <button
              type="submit"
              className={`text-xs rounded px-3 py-1 ${
                primeName.trim()
                  ? 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                  : 'bg-gray-300 text-white cursor-not-allowed'
              }`}
              disabled={!primeName.trim()}
            >
              Create
            </button>
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-1 w-16 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </form>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xs font-semibold">
              Show
              <select
                className="border border-gray-300 rounded px-1 py-0.5 text-xs ml-1 mr-1"
              >
                <option>10</option>
              </select>
              entries
            </div>
            <div className="text-xs font-semibold">
              Search:
              <input
                type="search"
                className="border border-gray-300 rounded px-2 py-1 text-xs ml-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <table className="w-full text-xs border-collapse border border-gray-300">
            <thead>
              <tr className="border-b border-gray-300 text-gray-700 font-semibold">
                <th className="border-r border-gray-300 px-2 py-1 text-left cursor-pointer select-none">
                  Sequence
                  <i className="fas fa-sort-up ml-1"></i>
                </th>
                <th className="border-r border-gray-300 px-2 py-1 text-left cursor-pointer select-none">
                  PrimeName
                  <i className="fas fa-sort ml-1"></i>
                </th>
                <th className="border-r border-gray-300 px-2 py-1 text-left cursor-pointer select-none">
                  Status
                  <i className="fas fa-sort ml-1"></i>
                </th>
                <th className="px-2 py-1 text-left cursor-pointer select-none">
                  Remark
                  <i className="fas fa-sort ml-1"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEntries.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-3 text-gray-500">
                    {entries.length === 0 ? 'No data available in table' : 'No matching records found'}
                  </td>
                </tr>
              ) : (
                filteredEntries.map((entry, index) => (
                  <tr key={entry.sequence} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                    <td className="border-r border-gray-300 px-2 py-1">{entry.sequence}</td>
                    <td className="border-r border-gray-300 px-2 py-1">{entry.primeName}</td>
                    <td className="border-r border-gray-300 px-2 py-1">{entry.status}</td>
                    <td className="px-2 py-1">{entry.remark}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="flex justify-between text-xs text-gray-700 mt-2">
            <div>
              Showing {filteredEntries.length === 0 ? 0 : 1} to {filteredEntries.length} of {entries.length} entries
            </div>
            <div className="space-x-4">
              <button className="hover:underline cursor-pointer">Previous</button>
              <button className="hover:underline cursor-pointer">Next</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-gray-300 px-4 py-3 text-xs text-gray-700">
        © 2025 - i-Softzone
      </footer>
    </div>
  );
};
export default Location;