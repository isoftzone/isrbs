import React, { useState } from 'react';
interface BankRecord {
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const BankName: React.FC = () => {
  const [formData, setFormData] = useState({
    primeName: '',
    sequenceNo: '3',
    status: 'Active',
    remark: '',
    search: '',
  });
  const [records, setRecords] = useState<BankRecord[]>([
    { sequence: 1, primeName: 'SBI', status: 'Active', remark: '' },
    { sequence: 2, primeName: 'HDFC', status: 'Active', remark: '' },
  ]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.primeName.trim()) return;
    const newRecord: BankRecord = {
      sequence: parseInt(formData.sequenceNo),
      primeName: formData.primeName,
      status: formData.status,
      remark: formData.remark,
    };
    setRecords([...records, newRecord]);
    setFormData({
      primeName: '',
      sequenceNo: (records.length + 1).toString(),
      status: 'Active',
      remark: '',
      search: formData.search,
    });
  };
  const filteredRecords = records.filter(record =>
    record.primeName.toLowerCase().includes(formData.search.toLowerCase())
  );
  return (
    <div className="bg-white text-black font-sans">
      <div className="border-b border-gray-300 px-4 py-3">
        <h1 className="text-xl font-normal">Bank Name</h1>
      </div>
      <main className="flex flex-col md:flex-row px-4 py-6 gap-8 max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-1/2 max-w-md">
          <div className="flex items-center gap-4">
            <label htmlFor="primeName" className="w-28 text-xs text-gray-700">
              Prime Name
            </label>
            <input
              id="primeName"
              type="text"
              value={formData.primeName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="sequenceNo" className="w-28 text-xs text-gray-700">
              Sequence No.
            </label>
            <input
              id="sequenceNo"
              type="text"
              value={formData.sequenceNo}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="status" className="w-28 text-xs text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-full bg-white"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="flex items-start gap-4">
            <label htmlFor="remark" className="w-28 text-xs text-gray-700 pt-1">
              Remark
            </label>
            <textarea
              id="remark"
              rows={3}
              value={formData.remark}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-full resize-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded cursor-pointer"
            >
              Create
            </button>
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 text-sm w-16"
            />
          </div>
        </form>
        <section className="w-full md:w-1/2 overflow-x-auto">
          <div className="flex justify-between items-center mb-2 text-xs font-semibold text-gray-700">
            <div>
              Show
              <select className="border border-gray-300 rounded px-1 py-0.5 text-xs">
                <option>10</option>
              </select>
              entries
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="search" className="font-normal">
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
          <table className="w-full border-collapse text-xs text-gray-700">
            <thead>
              <tr className="border-b border-gray-400">
                <th className="text-left font-semibold px-2 py-1 cursor-pointer select-none">
                  Sequence
                </th>
                <th className="text-left font-semibold px-2 py-1 cursor-pointer select-none">
                  PrimeName
                </th>
                <th className="text-left font-semibold px-2 py-1 cursor-pointer select-none">
                  Status
                </th>
                <th className="text-left font-semibold px-2 py-1 cursor-pointer select-none">
                  Remark
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record, index) => (
                <tr
                  key={record.sequence}
                  className={`border-b border-gray-300 ${index % 2 === 1 ? 'bg-gray-100' : ''}`}
                >
                  <td className="px-2 py-1">{record.sequence}</td>
                  <td className="px-2 py-1">{record.primeName}</td>
                  <td className="px-2 py-1">{record.status}</td>
                  <td className="px-2 py-1">{record.remark || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-700">
            <div>
              Showing 1 to {filteredRecords.length} of {filteredRecords.length} entries
            </div>
            <div className="flex items-center gap-2">
              <span>Previous</span>
              <button className="border border-gray-400 rounded px-2 py-1 text-xs bg-gray-100">
                1
              </button>
              <span>Next</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default BankName;