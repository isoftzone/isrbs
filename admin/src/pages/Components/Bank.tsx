import React, { useState } from 'react';
interface BankEntry {
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const Bank: React.FC = () => {
  const [formData, setFormData] = useState({
    primeName: '',
    sequence: 1,
    status: 'Active',
    remark: '',
  });
  const [entries, setEntries] = useState<BankEntry[]>([]);
  const [search, setSearch] = useState('');
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.primeName.trim()) return;
    const newEntry: BankEntry = {
      sequence: formData.sequence,
      primeName: formData.primeName.trim(),
      status: formData.status,
      remark: formData.remark.trim(),
    };
    setEntries([...entries, newEntry]);
    setFormData({
      primeName: '',
      sequence: formData.sequence + 1,
      status: 'Active',
      remark: '',
    });
  };
  const filteredEntries = entries.filter(entry =>
    Object.values(entry).some(val =>
      val.toString().toLowerCase().includes(search.toLowerCase())
    )
  );
  return (
    <div className="bg-white text-black font-sans">
      <div className="border-b border-gray-300 px-4 py-3">
        <h1 className="text-lg font-normal">Bank</h1>
      </div>
      <div className="flex flex-wrap px-4 py-6">
        <form className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="primeName" className="text-xs text-gray-700">Prime Name</label><br />
            <input
              id="primeName"
              name="primeName"
              type="text"
              value={formData.primeName}
              onChange={handleChange}
              className="mt-1 w-full max-w-xs border border-gray-300 rounded px-2 py-1 text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="sequence" className="text-xs text-gray-700">Sequence No.</label><br />
            <input
              id="sequence"
              name="sequence"
              type="text"
              value={formData.sequence}
              readOnly
              className="mt-1 w-full max-w-xs border border-gray-300 rounded px-2 py-1 text-sm text-gray-400 bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="status" className="text-xs text-gray-700">Status</label><br />
            <select
              id="status"
              name="status"
              disabled
              className="mt-1 w-full max-w-xs border border-gray-300 rounded px-2 py-1 text-sm text-gray-400 bg-white cursor-not-allowed"
              value={formData.status}
            >
              <option>Active</option>
            </select>
          </div>
          <div>
            <label htmlFor="remark" className="text-xs text-gray-700">Remark</label><br />
            <textarea
              id="remark"
              name="remark"
              rows={3}
              value={formData.remark}
              onChange={handleChange}
              className="mt-1 w-full max-w-xs border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="submit"
              disabled={!formData.primeName.trim()}
              className={`text-xs rounded px-3 py-1 ${
                formData.primeName.trim()
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-white cursor-not-allowed'
              }`}
            >
              Create
            </button>
            <input type="text" className="border border-gray-300 rounded px-2 py-1 w-16 text-sm" />
          </div>
        </form>
        <div className="flex-1 min-w-[320px] mt-6 md:mt-0 md:pl-12">
          <div className="flex justify-between items-center mb-2 text-xs font-semibold text-black">
            <div className="flex items-center space-x-1">
              <span>Show</span>
              <select className="border border-gray-300 rounded px-1 py-0.5 text-xs">
                <option>10</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center space-x-1">
              <label htmlFor="search" className="font-normal">Search:</label>
              <input
                id="search"
                type="text"
                className="border border-gray-300 rounded px-1 py-0.5 text-xs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <table className="w-full text-xs border-collapse border border-gray-300">
            <thead>
              <tr className="border-b border-gray-300 text-black font-semibold">
                <th className="border-r border-gray-300 px-2 py-1 text-left">Sequence</th>
                <th className="border-r border-gray-300 px-2 py-1 text-left">PrimeName</th>
                <th className="border-r border-gray-300 px-2 py-1 text-left">Status</th>
                <th className="px-2 py-1 text-left">Remark</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntries.length === 0 ? (
                <tr>
                  <td colSpan={4} className="border-t border-b border-gray-300 text-center py-2 text-gray-600">
                    No data available in table
                  </td>
                </tr>
              ) : (
                filteredEntries.map(entry => (
                  <tr key={entry.sequence}>
                    <td className="border-t border-gray-300 px-2 py-1">{entry.sequence}</td>
                    <td className="border-t border-gray-300 px-2 py-1">{entry.primeName}</td>
                    <td className="border-t border-gray-300 px-2 py-1">{entry.status}</td>
                    <td className="border-t border-gray-300 px-2 py-1">{entry.remark}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="flex justify-between text-xs text-black mt-2">
            <div>Showing 1 to {filteredEntries.length} of {entries.length} entries</div>
            <div className="space-x-4">
              <button className="text-black">Previous</button>
              <button className="text-black">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 px-4 py-3 text-xs text-black">
        © 2025 - i-Softzone
      </div>
    </div>
  );
};
export default Bank;