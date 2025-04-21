import React, { useState } from 'react';
interface CompanyData {
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const Company: React.FC = () => {
  const [formData, setFormData] = useState({
    primeName: '',
    sequenceNo: '1',
    status: 'Active',
    remark: '',
    search: '',
  });
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.primeName.trim()) return;
    const newCompany: CompanyData = {
      sequence: parseInt(formData.sequenceNo),
      primeName: formData.primeName,
      status: formData.status,
      remark: formData.remark,
    };
    setCompanies([...companies, newCompany]);
    setFormData({
      ...formData,
      primeName: '',
      sequenceNo: (companies.length + 1).toString(),
      remark: '',
    });
  };
  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  const sortedCompanies = React.useMemo(() => {
    if (!sortConfig) return companies;
    return [...companies].sort((a, b) => {
      // @ts-ignore
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      // @ts-ignore
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [companies, sortConfig]);
  const filteredCompanies = sortedCompanies.filter(company =>
    company.primeName.toLowerCase().includes(formData.search.toLowerCase())
  );
  return (
    <div className="bg-white text-gray-900 font-sans max-w-full mx-auto p-6">
      <h1 className="text-lg font-normal mb-4">Company</h1>
      <hr className="border-gray-300 mb-6" />
      <div className="flex flex-col md:flex-row md:space-x-12">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-xs">
          <label className="text-xs text-gray-700" htmlFor="primeName">
            Prime Name
          </label>
          <input
            id="primeName"
            type="text"
            value={formData.primeName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            required
          />
          <label className="text-xs text-gray-700" htmlFor="sequenceNo">
            Sequence No.
          </label>
          <input
            id="sequenceNo"
            type="text"
            value={formData.sequenceNo}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <label className="text-xs text-gray-700" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            value={formData.status}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm bg-white"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <label className="text-xs text-gray-700" htmlFor="remark">
            Remark
          </label>
          <textarea
            id="remark"
            rows={3}
            value={formData.remark}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded cursor-pointer"
            >
              Create
            </button>
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-1 w-20 text-sm"
            />
          </div>
        </form>
        <div className="flex-1 mt-8 md:mt-0">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xs font-semibold">
              Show
              <select className="border border-gray-300 rounded px-1 py-0.5 text-xs ml-1 mr-1">
                <option>10</option>
              </select>
              entries
            </div>
            <div className="text-xs font-semibold">
              Search:
              <input
                type="text"
                value={formData.search}
                onChange={handleInputChange}
                id="search"
                className="border border-gray-300 rounded px-2 py-1 text-xs ml-1"
              />
            </div>
          </div>
          <table className="w-full text-xs border-collapse border border-gray-400">
            <thead>
              <tr className="border-b border-gray-400 text-gray-700 font-semibold">
                <th
                  className="border-r border-gray-400 px-2 py-1 text-left cursor-pointer select-none"
                  onClick={() => requestSort('sequence')}
                >
                  Sequence
                  {sortConfig?.key === 'sequence' && (
                    <span className="inline-block align-middle text-blue-600">
                      {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                    </span>
                  )}
                </th>
                <th
                  className="border-r border-gray-400 px-2 py-1 text-left cursor-pointer select-none"
                  onClick={() => requestSort('primeName')}
                >
                  PrimeName
                </th>
                <th
                  className="border-r border-gray-400 px-2 py-1 text-left cursor-pointer select-none"
                  onClick={() => requestSort('status')}
                >
                  Status
                </th>
                <th className="px-2 py-1 text-left cursor-pointer select-none">
                  Remark
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center text-gray-500 py-3">
                    No data available in table
                  </td>
                </tr>
              ) : (
                filteredCompanies.map((company, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border-r border-gray-400 px-2 py-1">{company.sequence}</td>
                    <td className="border-r border-gray-400 px-2 py-1">{company.primeName}</td>
                    <td className="border-r border-gray-400 px-2 py-1">{company.status}</td>
                    <td className="px-2 py-1">{company.remark || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className="border-t border-gray-400 text-xs text-gray-700 px-2 py-1">
                  Showing {filteredCompanies.length > 0 ? 1 : 0} to {filteredCompanies.length} of {filteredCompanies.length} entries
                  <span className="float-right space-x-4">
                    <button className="text-xs text-gray-700 hover:text-blue-600">Previous</button>
                    <button className="text-xs text-gray-700 hover:text-blue-600">Next</button>
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <footer className="text-xs text-gray-700 mt-4">© 2025 - i-Softzone</footer>
    </div>
  );
};
export default Company;