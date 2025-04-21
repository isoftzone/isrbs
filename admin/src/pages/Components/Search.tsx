import React, { useState } from 'react';
interface SearchData {
  primeName: string;
  sequenceNo: number;
  status: string;
  remark: string;
}
const Searchs: React.FC = () => {
  const [formData, setFormData] = useState<SearchData>({
    primeName: '',
    sequenceNo: 1,
    status: 'Active',
    remark: ''
  });
  const [searchTable, setSearchTable] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: id === 'sequenceNo' ? Number(value) : value
    }));
  };
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your create logic here
  };
  const handlePrevious = () => {
    console.log('Previous clicked');
    // Add pagination logic
  };
  const handleNext = () => {
    console.log('Next clicked');
    // Add pagination logic
  };
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">
      <div className="border-b border-gray-300 mb-4">
        <h1 className="text-lg font-normal p-4">Search</h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between px-4 flex-1">
        <form
          className="flex flex-col space-y-4 max-w-xs w-full"
          onSubmit={handleCreate}
        >
          <div className="flex items-center">
            <label htmlFor="primeName" className="w-24 text-xs">Prime Name</label>
            <input
              id="primeName"
              type="text"
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full max-w-xs"
              value={formData.primeName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="sequenceNo" className="w-24 text-xs">Sequence No.</label>
            <input
              id="sequenceNo"
              type="number"
              value={formData.sequenceNo}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full max-w-xs"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="status" className="w-24 text-xs">Status</label>
            <select
              id="status"
              disabled
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full max-w-xs text-gray-400 cursor-not-allowed"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option>Active</option>
            </select>
          </div>
          <div className="flex items-start">
            <label htmlFor="remark" className="w-24 text-xs pt-1">Remark</label>
            <textarea
              id="remark"
              rows={3}
              className="border border-gray-300 rounded px-2 py-1 text-xs w-full max-w-xs resize-none"
              value={formData.remark}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded cursor-pointer"
            >
              Create
            </button>
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 text-xs w-20"
            />
          </div>
        </form>
        <div className="w-full md:w-3/5 mt-6 md:mt-0">
          <div className="flex justify-between items-center mb-2 text-xs font-semibold">
            <div>
              Show
              <select
                className="border border-gray-400 rounded px-1 py-0.5 ml-1 mr-1 text-xs"
                value={entriesToShow}
                onChange={(e) => setEntriesToShow(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              entries
            </div>
            <div className="flex items-center">
              <label htmlFor="searchTable" className="font-semibold mr-1">Search:</label>
              <input
                id="searchTable"
                type="text"
                className="border border-gray-400 rounded px-1 py-0.5 text-xs"
                value={searchTable}
                onChange={(e) => setSearchTable(e.target.value)}
              />
            </div>
          </div>
          <table className="w-full border-collapse border border-gray-400 text-xs">
            <thead>
              <tr>
                <th className="border border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">
                  Sequence
                  <span className="inline-block align-middle text-blue-600">&#9650;</span>
                </th>
                <th className="border border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">
                  PrimeName
                </th>
                <th className="border border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">
                  Status
                </th>
                <th className="border border-gray-400 px-2 py-1 text-left font-semibold cursor-pointer select-none">
                  Remark
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="border border-gray-400 px-2 py-1 text-center text-gray-600">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between text-xs mt-2">
            <div>Showing 0 to 0 of 0 entries</div>
            <div>
              <button
                className="text-blue-600 hover:underline mr-4"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="text-blue-600 hover:underline"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-gray-300 mt-8 p-4 text-xs">
        © 2025 - i-Softzone
      </footer>
    </div>
  );
};
export default Searchs;