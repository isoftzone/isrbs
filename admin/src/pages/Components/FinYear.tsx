import React, { useState } from 'react';
interface FinancialYear {
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const FinYear: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    primeName: '',
    sequenceNo: '',
    status: 'Active',
    remark: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [financialYears, setFinancialYears] = useState<FinancialYear[]>([
    { sequence: 1, primeName: '2017-18', status: 'Active', remark: '' },
    { sequence: 2, primeName: '2018-19', status: 'Active', remark: '' },
  ]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.primeName) return;
    const newFinancialYear: FinancialYear = {
      sequence: financialYears.length + 1,
      primeName: formData.primeName,
      status: formData.status,
      remark: formData.remark
    };
    setFinancialYears([...financialYears, newFinancialYear]);
    // Reset form
    setFormData({
      primeName: '',
      sequenceNo: (financialYears.length + 2).toString(),
      status: 'Active',
      remark: ''
    });
  };
  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-full mx-auto p-4">
        <h1 className="text-lg font-normal mb-4">FinYear</h1>
        <hr className="border-t border-gray-200 mb-6" />
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Form Section */}
          <form className="flex flex-col space-y-4 w-full max-w-xs" onSubmit={handleCreate}>
            <label className="text-xs text-gray-700" htmlFor="primeName">
              Prime Name
            </label>
            <input
              id="primeName"
              name="primeName"
              type="text"
              value={formData.primeName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              className="border border-gray-300 rounded px-2 py-1 text-sm bg-gray-100 cursor-not-allowed"
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
              className="border border-gray-300 rounded px-2 py-1 text-sm"
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
              className="border border-gray-300 rounded px-2 py-1 text-sm resize-y"
            />
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white text-xs rounded px-3 py-1"
              >
                Create
              </button>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-16 text-sm"
                placeholder="Search..."
              />
            </div>
          </form>
          {/* Table Section */}
          <div className="flex-1 mt-8 md:mt-0">
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
                <tr className="border-b border-gray-300 text-gray-700 font-semibold">
                  <th className="border-r border-gray-300 px-2 py-1 text-left">
                    Sequence <span className="inline-block text-blue-600">▲</span>
                  </th>
                  <th className="border-r border-gray-300 px-2 py-1 text-left">PrimeName</th>
                  <th className="border-r border-gray-300 px-2 py-1 text-left">Status</th>
                  <th className="px-2 py-1 text-left">Remark</th>
                </tr>
              </thead>
              <tbody>
                {financialYears.map((year) => (
                  <tr key={year.sequence} className="border-b border-gray-300">
                    <td className="border-r border-gray-300 px-2 py-1">{year.sequence}</td>
                    <td className="border-r border-gray-300 px-2 py-1">{year.primeName}</td>
                    <td className="border-r border-gray-300 px-2 py-1">{year.status}</td>
                    <td className="px-2 py-1">{year.remark || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-2 text-xs text-gray-700">
              <div>Showing 1 to {financialYears.length} of {financialYears.length} entries</div>
              <div className="flex items-center space-x-2">
                <span>Previous</span>
                <button className="border border-gray-300 rounded px-2 py-1 bg-gray-100 cursor-default">
                  1
                </button>
                <span>Next</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-200 mt-6 mb-4" />
      </div>
    </div>
  );
};
export default FinYear;