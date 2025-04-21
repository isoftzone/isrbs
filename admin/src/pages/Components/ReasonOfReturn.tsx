import React, { useState, useEffect, useRef } from 'react';
interface ReasonEntry {
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const ReasonOfReturn: React.FC = () => {
  const [primeName, setPrimeName] = useState('');
  const [status, setStatus] = useState('');
  const [remark, setRemark] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState<ReasonEntry[]>([
    { sequence: 1, primeName: 'FITTING', status: 'Active', remark: '' },
    { sequence: 2, primeName: 'WRONG ITEM', status: 'Active', remark: '' },
    { sequence: 3, primeName: 'DEFECTIVE', status: 'Active', remark: '' }
  ]);
  const [sequenceNumber, setSequenceNumber] = useState(4);
  const formRef = useRef<HTMLFormElement>(null);
  const filteredEntries = entries.filter(entry =>
    Object.values(entry).some(
      value => value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  ));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!primeName || !status) return;
    const newEntry: ReasonEntry = {
      sequence: sequenceNumber,
      primeName: primeName.toUpperCase(),
      status,
      remark
    };
    setEntries([...entries, newEntry]);
    setSequenceNumber(sequenceNumber + 1);
    // Reset form
    setPrimeName('');
    setStatus('');
    setRemark('');
    formRef.current?.reset();
  };
  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-full mx-auto p-4">
        <h2 className="text-xl font-normal mb-2">Reason Of Return</h2>
        <hr className="border-t border-gray-300 mb-6" />
        <div className="flex flex-wrap gap-8">
          <form
            ref={formRef}
            className="flex flex-col gap-4 w-full max-w-xs"
            onSubmit={handleSubmit}
          >
            <label className="text-xs text-gray-700" htmlFor="primeName">Prime Name</label>
            <input
              id="primeName"
              type="text"
              className="border border-gray-300 rounded px-2 py-1 text-xs"
              required
              value={primeName}
              onChange={(e) => setPrimeName(e.target.value)}
            />
            <label className="text-xs text-gray-700" htmlFor="sequenceNo">Sequence No.</label>
            <input
              id="sequenceNo"
              type="text"
              value={sequenceNumber}
              disabled
              className="border border-gray-300 rounded px-2 py-1 text-xs bg-white text-gray-400 cursor-not-allowed"
              readOnly
            />
            <label className="text-xs text-gray-700" htmlFor="status">Status</label>
            <select
              id="status"
              className="border border-gray-300 rounded px-2 py-1 text-xs"
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <label className="text-xs text-gray-700" htmlFor="remark">Remark</label>
            <textarea
              id="remark"
              rows={3}
              className="border border-gray-300 rounded px-2 py-1 text-xs resize-none"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            ></textarea>
            <div className="flex gap-1">
              <button
                type="submit"
                className={`text-xs rounded px-3 py-1 ${
                  primeName && status
                    ? 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                    : 'bg-gray-300 text-white cursor-not-allowed'
                }`}
                disabled={!primeName || !status}
              >
                Create
              </button>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-12"
                disabled
              />
            </div>
          </form>
          <div className="flex-1 min-w-[320px] overflow-x-auto">
            <div className="flex justify-between items-center mb-2 text-xs font-semibold">
              <div>
                Show
                <select className="border border-gray-300 rounded px-1 py-0.5 ml-1 mr-1 text-xs">
                  <option>10</option>
                </select>
                entries
              </div>
              <div>
                Search:
                <input
                  id="searchInput"
                  type="text"
                  className="border border-gray-300 rounded px-1 py-0.5 ml-1 text-xs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <table className="w-full text-xs border-collapse border border-gray-400">
              <thead>
                <tr className="border-b border-gray-400">
                  <th className="border-r border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">
                    Sequence
                    <i className="fas fa-sort-up ml-1 text-gray-500"></i>
                  </th>
                  <th className="border-r border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">
                    PrimeName
                    <i className="fas fa-sort text-gray-400 ml-1"></i>
                  </th>
                  <th className="border-r border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">
                    Status
                    <i className="fas fa-sort text-gray-400 ml-1"></i>
                  </th>
                  <th className="px-2 py-1 text-left font-semibold cursor-pointer select-none">
                    Remark
                    <i className="fas fa-sort text-gray-400 ml-1"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((entry, index) => (
                  <tr
                    key={entry.sequence}
                    className={`border-b border-gray-400 ${
                      index % 2 === 1 ? 'bg-gray-100' : ''
                    }`}
                  >
                    <td className="border-r border-gray-400 px-2 py-1">{entry.sequence}</td>
                    <td className="border-r border-gray-400 px-2 py-1">{entry.primeName}</td>
                    <td className="px-2 py-1">{entry.status}</td>
                    <td className="px-2 py-1">{entry.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-2 text-xs">
              <div>
                Showing 1 to {filteredEntries.length} of {entries.length} entries
              </div>
              <div className="flex items-center gap-2">
                <span className="cursor-pointer select-none">Previous</span>
                <button
                  className="border border-gray-400 bg-gray-100 px-3 py-1 rounded text-xs cursor-default"
                  disabled
                >
                  1
                </button>
                <span className="cursor-pointer select-none">Next</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 mt-6 mb-4" />
        <footer className="text-xs text-gray-700">© 2025 - i-Softzone</footer>
      </div>
    </div>
  );
};
export default ReasonOfReturn;