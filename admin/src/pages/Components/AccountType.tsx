import React, { useState } from 'react';
interface AccountType {
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const AccountType: React.FC = () => {
  const [formData, setFormData] = useState({
    primeName: '',
    sequenceNo: '3',
    status: 'Active',
    remark: '',
    search: '',
  });
  const [accountTypes, setAccountTypes] = useState<AccountType[]>([
    { sequence: 1, primeName: 'SAVING', status: 'Active', remark: '' },
    { sequence: 2, primeName: 'CURRENT', status: 'Active', remark: '' },
  ]);
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
    const newAccountType: AccountType = {
      sequence: parseInt(formData.sequenceNo),
      primeName: formData.primeName,
      status: formData.status,
      remark: formData.remark,
    };
    setAccountTypes([...accountTypes, newAccountType]);
    setFormData({
      ...formData,
      primeName: '',
      sequenceNo: (accountTypes.length + 1).toString(),
      remark: '',
    });
  };
  const filteredAccountTypes = accountTypes.filter(account =>
    account.primeName.toLowerCase().includes(formData.search.toLowerCase())
  );
  return (
    <div className="bg-white text-black font-sans max-w-full p-6">
      <h2 className="text-xl font-normal mb-4 border-b border-gray-300 pb-2">Account Type</h2>
      <div className="flex flex-col md:flex-row md:space-x-12">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-xs">
          <div className="flex items-center space-x-4">
            <label htmlFor="primeName" className="w-24 text-xs text-gray-700">
              Prime Name
            </label>
            <input
              id="primeName"
              type="text"
              value={formData.primeName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-1 text-xs w-full max-w-[180px]"
              required
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="sequenceNo" className="w-24 text-xs text-gray-700">
              Sequence No.
            </label>
            <input
              id="sequenceNo"
              type="text"
              value={formData.sequenceNo}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-1 text-xs w-full max-w-[180px] bg-gray-50"
              disabled
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="status" className="w-24 text-xs text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-1 text-xs w-full max-w-[180px] bg-gray-50"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="flex items-start space-x-4">
            <label htmlFor="remark" className="w-24 text-xs text-gray-700 pt-1">
              Remark
            </label>
            <textarea
              id="remark"
              rows={3}
              value={formData.remark}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-1 text-xs w-full max-w-[180px]"
            />
          </div>
          <div className="flex space-x-2 pt-1">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs rounded px-3 py-1 cursor-pointer"
            >
              Create
            </button>
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-1 w-12"
            />
          </div>
        </form>
        <div className="flex-1 mt-8 md:mt-0">
          <div className="flex justify-between items-center mb-2 text-xs font-semibold text-gray-700">
            <div>
              Show
              <select className="border border-gray-300 rounded px-1 py-0.5 text-xs">
                <option>10</option>
              </select>
              entries
            </div>
            <div className="flex items-center space-x-1">
              <label htmlFor="search" className="font-semibold">
                Search:
              </label>
              <input
                id="search"
                type="text"
                value={formData.search}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-2 py-1 text-xs"
              />
            </div>
          </div>
          <table className="w-full text-xs border-collapse border border-gray-300">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="border-r border-gray-300 px-2 py-1 text-left font-semibold">
                  Sequence
                </th>
                <th className="border-r border-gray-300 px-2 py-1 text-left font-semibold">
                  PrimeName
                </th>
                <th className="border-r border-gray-300 px-2 py-1 text-left font-semibold">
                  Status
                </th>
                <th className="px-2 py-1 text-left font-semibold">Remark</th>
              </tr>
            </thead>
            <tbody>
              {filteredAccountTypes.map((account, index) => (
                <tr
                  key={account.sequence}
                  className={`border-b border-gray-300 ${index % 2 === 1 ? 'bg-gray-100' : ''}`}
                >
                  <td className="border-r border-gray-300 px-2 py-1">{account.sequence}</td>
                  <td className="border-r border-gray-300 px-2 py-1">{account.primeName}</td>
                  <td className="border-r border-gray-300 px-2 py-1">{account.status}</td>
                  <td className="px-2 py-1">{account.remark || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-700">
            <div>
              Showing 1 to {filteredAccountTypes.length} of {filteredAccountTypes.length} entries
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-700">Previous</button>
              <button className="bg-gray-200 border border-gray-300 rounded px-2 py-1 text-xs">
                1
              </button>
              <button className="text-gray-700">Next</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
  </div>
  );
};
export default AccountType;