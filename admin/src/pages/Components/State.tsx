import React, { useState } from 'react';
interface State {
  id: number;
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const State: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    primeName: '',
    sequenceNo: '31',
    status: 'Active',
    remark: ''
  });
  // Table data
  const [states, setStates] = useState<State[]>([
    { id: 1, sequence: 21, primeName: 'MIZORAM', status: 'Active', remark: '' },
    { id: 2, sequence: 22, primeName: 'NAGALAND', status: 'Active', remark: '' },
    { id: 3, sequence: 23, primeName: 'ODISHA', status: 'Active', remark: '' },
    { id: 4, sequence: 24, primeName: 'PUNJAB', status: 'Active', remark: '' },
    { id: 5, sequence: 25, primeName: 'SIKKIM', status: 'Active', remark: '' },
    { id: 6, sequence: 26, primeName: 'TELANGANA', status: 'Active', remark: '' },
    { id: 7, sequence: 27, primeName: 'TRIPURA', status: 'Active', remark: '' },
    { id: 8, sequence: 28, primeName: 'UTTARKHAND', status: 'Active', remark: '' },
    { id: 9, sequence: 29, primeName: 'UTTAR PRADESH', status: 'Active', remark: '' },
    { id: 10, sequence: 30, primeName: 'DELHI', status: 'Active', remark: '' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newState: State = {
      id: Date.now(),
      sequence: Number(formData.sequenceNo),
      primeName: formData.primeName.toUpperCase(),
      status: formData.status,
      remark: formData.remark
    };
    setStates([...states, newState]);
    // Reset form
    setFormData({
      primeName: '',
      sequenceNo: (Number(formData.sequenceNo) + 1).toString(),
      status: 'Active',
      remark: ''
    });
  };
  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-lg font-normal mb-4 border-b border-gray-300 pb-2">State</h1>
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full max-w-xs">
            <label className="text-xs text-gray-700" htmlFor="primeName">
              Prime Name
            </label>
            <input
              id="primeName"
              name="primeName"
              type="text"
              value={formData.primeName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <label className="text-xs text-gray-700" htmlFor="sequenceNo">
              Sequence No.
            </label>
            <input
              id="sequenceNo"
              name="sequenceNo"
              type="number"
              value={formData.sequenceNo}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <label className="text-xs text-gray-700" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <label className="text-xs text-gray-700" htmlFor="remark">
              Remark
            </label>
            <textarea
              id="remark"
              name="remark"
              rows={3}
              value={formData.remark}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm resize-none"
            />
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-gray-300 text-white text-xs rounded px-3 py-1"
              >
                Create
              </button>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-16"
                placeholder="Search..."
              />
            </div>
          </form>
          {/* Table Section */}
          <div className="flex-1 mt-6 md:mt-0">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-semibold">
                Show
                <select className="border border-gray-300 rounded px-1 py-0.5 text-xs ml-1 mr-1">
                  <option>10</option>
                </select>
                entries
              </div>
              <div className="text-xs font-semibold flex items-center">
                <label htmlFor="search" className="mr-1">Search:</label>
                <input
                  id="search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-xs"
                />
              </div>
            </div>
            <table className="w-full text-xs border-collapse border border-gray-300">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="border-b border-gray-300 text-left px-2 py-1 cursor-pointer select-none">
                    Sequence
                    <span className="inline-block transform rotate-45 text-blue-600">▲</span>
                  </th>
                  <th className="border-b border-gray-300 text-left px-2 py-1 cursor-pointer select-none">PrimeName</th>
                  <th className="border-b border-gray-300 text-left px-2 py-1 cursor-pointer select-none">Status</th>
                  <th className="border-b border-gray-300 text-left px-2 py-1 cursor-pointer select-none">Remark</th>
                </tr>
              </thead>
              <tbody>
                {states.map((state, index) => (
                  <tr key={state.id} className={index % 2 === 1 ? 'bg-gray-100' : ''}>
                    <td className="border-b border-gray-300 px-2 py-1">{state.sequence}</td>
                    <td className="border-b border-gray-300 px-2 py-1">{state.primeName}</td>
                    <td className="border-b border-gray-300 px-2 py-1">{state.status}</td>
                    <td className="border-b border-gray-300 px-2 py-1">{state.remark || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between text-xs mt-1">
              <div>Showing 21 to 30 of {states.length} entries</div>
              <div className="flex space-x-1 items-center">
                <button type="button" className="text-gray-700">Previous</button>
                <button type="button" className="text-gray-700">1</button>
                <button type="button" className="text-gray-700">2</button>
                <button type="button" className="bg-gray-200 border border-gray-400 px-2 py-1 rounded">3</button>
                <button type="button" className="text-gray-700">Next</button>
              </div>
            </div>
          </div>
        </div>
  </div>
    </div>
  );
};
export default State;