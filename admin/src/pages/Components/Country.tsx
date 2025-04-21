import React, { useState } from 'react';
interface Country {
  id: number;
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const Country: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    primeName: '',
    sequenceNo: '2',
    status: 'Active',
    remark: ''
  });
  // Table data
  const [countries, setCountries] = useState<Country[]>([
    { id: 1, sequence: 1, primeName: 'INDIA', status: 'Active', remark: '' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.primeName.trim()) {
      return;
    }
    const newCountry: Country = {
      id: Date.now(),
      sequence: Number(formData.sequenceNo),
      primeName: formData.primeName.toUpperCase(),
      status: formData.status,
      remark: formData.remark
    };
    setCountries([...countries, newCountry]);
    // Reset form and increment sequence number
    setFormData({
      primeName: '',
      sequenceNo: (Number(formData.sequenceNo) + 1).toString(),
      status: 'Active',
      remark: ''
    });
  };
  return (
    <div className="bg-white text-gray-900 font-sans">
      <div className="max-w-full mx-auto p-4">
        <h2 className="text-lg font-normal mb-4 border-b border-gray-300 pb-2">Country</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Form Section */}
          <form className="flex flex-col space-y-3 w-full max-w-xs" onSubmit={handleCreate}>
            <label className="text-xs text-gray-700" htmlFor="primeName">
              Prime Name
            </label>
            <input
              id="primeName"
              name="primeName"
              type="text"
              value={formData.primeName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <label className="text-xs text-gray-700" htmlFor="sequenceNo">
              Sequence No.
            </label>
            <input
              id="sequenceNo"
              name="sequenceNo"
              type="text"
              value={formData.sequenceNo}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              readOnly
            />
            <label className="text-xs text-gray-700" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
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
              className="border border-gray-300 rounded px-3 py-1 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="flex space-x-2 pt-1">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded transition-colors"
              >
                Create
              </button>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-1 text-sm w-16"
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
                  <th className="border-r border-gray-300 px-2 py-1 text-left font-semibold select-none">
                    Sequence
                    <span className="inline-block align-middle text-blue-600">▲</span>
                  </th>
                  <th className="border-r border-gray-300 px-2 py-1 text-left font-semibold select-none">
                    PrimeName
                  </th>
                  <th className="border-r border-gray-300 px-2 py-1 text-left font-semibold select-none">
                    Status
                  </th>
                  <th className="px-2 py-1 text-left font-semibold select-none">Remark</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country) => (
                  <tr key={country.id} className="border-b border-gray-300">
                    <td className="border-r border-gray-300 px-2 py-1">{country.sequence}</td>
                    <td className="border-r border-gray-300 px-2 py-1">{country.primeName}</td>
                    <td className="border-r border-gray-300 px-2 py-1">{country.status}</td>
                    <td className="px-2 py-1">{country.remark || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-2 text-xs text-gray-700">
              <div>Showing 1 to {countries.length} of {countries.length} entries</div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-700">Previous</button>
                <button className="bg-gray-200 border border-gray-300 px-2 py-1 rounded shadow-sm">1</button>
                <button className="text-gray-700">Next</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <footer className="text-xs text-gray-700">© 2025 - i-Softzone</footer>
      </div>
    </div>
  );
};
export default Country;