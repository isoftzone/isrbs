import React, { useState } from 'react';
interface MaritalStatusEntry {
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const MaritalStatus: React.FC = () => {
  const [formData, setFormData] = useState({
    primeName: '',
    sequenceNo: 3,
    status: 'Active',
    remark: ''
  });
  const [entries, setEntries] = useState<MaritalStatusEntry[]>([
    { sequence: 1, primeName: 'married', status: 'Active', remark: '' },
    { sequence: 2, primeName: 'unmarried', status: 'Active', remark: '' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.primeName.trim()) return;
    const newEntry: MaritalStatusEntry = {
      sequence: formData.sequenceNo,
      primeName: formData.primeName.trim().toLowerCase(),
      status: formData.status,
      remark: formData.remark.trim()
    };
    setEntries([...entries, newEntry]);
    setFormData({
      primeName: '',
      sequenceNo: formData.sequenceNo + 1,
      status: 'Active',
      remark: ''
    });
  };
  const filteredEntries = entries.filter(entry =>
    Object.values(entry).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <div className="bg-white text-gray-800 max-w-full mx-auto p-4">
      <h2 className="text-lg font-normal mb-2">Marital Status</h2>
      <hr className="border-gray-300 mb-4" />
      <div className="flex flex-row space-x-8">
        {/* Form Section */}
        <form className="flex flex-col space-y-4 w-1/3" onSubmit={handleSubmit}>
          <div className="flex items-center space-x-4">
            <label htmlFor="primeName" className="w-24 text-xs text-gray-700">Prime Name</label>
            <input
              id="primeName"
              name="primeName"
              type="text"
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full max-w-xs"
              value={formData.primeName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="sequenceNo" className="w-24 text-xs text-gray-700">Sequence No.</label>
            <input
              id="sequenceNo"
              name="sequenceNo"
              type="text"
              value={formData.sequenceNo}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full max-w-xs bg-gray-100"
              readOnly
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="status" className="w-24 text-xs text-gray-700">Status</label>
            <select
              id="status"
              name="status"
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full max-w-xs"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex items-start space-x-4">
            <label htmlFor="remark" className="w-24 text-xs text-gray-700 pt-1">Remark</label>
            <textarea
              id="remark"
              name="remark"
              rows={3}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full max-w-xs resize-none"
              value={formData.remark}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className={`text-xs px-3 py-1 rounded ${
                formData.primeName.trim()
                  ? 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                  : 'bg-gray-300 text-white cursor-not-allowed'
              }`}
              disabled={!formData.primeName.trim()}
            >
              Create
            </button>
          </div>
        </form>
        {/* Table Section */}
        <div className="w-2/3">
          <div className="flex justify-between items-center mb-2 text-xs font-semibold text-gray-700">
            <div>
              Show
              <select className="border border-gray-300 rounded px-1 py-0.5 text-xs ml-1 mr-1">
                <option>10</option>
              </select>
              entries
            </div>
            <div className="flex items-center space-x-1">
              <label htmlFor="search" className="font-semibold">Search:</label>
              <input
                id="search"
                type="text"
                className="border border-gray-300 rounded px-2 py-1 text-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="cursor-pointer select-none py-1">Sequence</th>
                <th className="cursor-pointer select-none py-1">Prime Name</th>
                <th className="cursor-pointer select-none py-1">Status</th>
                <th className="cursor-pointer select-none py-1">Remark</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntries.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-1 text-center text-gray-500">
                    {entries.length === 0 ? 'No data available' : 'No matching records found'}
                  </td>
                </tr>
              ) : (
                filteredEntries.map((entry, index) => (
                  <tr key={`${entry.sequence}-${entry.primeName}`} className={index % 2 === 0 ? '' : 'bg-gray-100'}>
                    <td className="py-1">{entry.sequence}</td>
                    <td className="py-1">{entry.primeName}</td>
                    <td className="py-1">{entry.status}</td>
                    <td className="py-1">{entry.remark}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-700">
            <div>
              Showing {filteredEntries.length} of {entries.length} entries
            </div>
            <div className="pagination flex items-center space-x-2">
              <button className="text-xs">Previous</button>
              <button className="text-xs bg-gray-100 border border-gray-300 px-2 py-1">1</button>
              <button className="text-xs">Next</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-6" />
    </div>
  );
};
export default MaritalStatus;