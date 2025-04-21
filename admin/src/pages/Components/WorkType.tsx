import React, { useState } from 'react';
interface WorkTypeData {
  primeName: string;
  sequenceNo: string;
  status: string;
  remark: string;
}
const WorkType: React.FC = () => {
  const [formData, setFormData] = useState<WorkTypeData>({
    primeName: '',
    sequenceNo: '1',
    status: 'Active',
    remark: ''
  });
  const [search, setSearch] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
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
    <div className="bg-white text-gray-900 font-sans">
      <div className="max-w-full mx-auto p-4">
        <h2 className="text-xl font-normal mb-4 border-b border-gray-200 pb-2">Work Type</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <form
            className="flex flex-col space-y-3 w-full max-w-xs"
            onSubmit={handleCreate}
          >
            <label className="text-xs text-gray-700" htmlFor="primeName">Prime Name</label>
            <input
              id="primeName"
              type="text"
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              value={formData.primeName}
              onChange={handleInputChange}
            />
            <label className="text-xs text-gray-700" htmlFor="sequenceNo">Sequence No.</label>
            <input
              id="sequenceNo"
              type="text"
              value={formData.sequenceNo}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <label className="text-xs text-gray-700" htmlFor="status">Status</label>
            <select
              id="status"
              disabled
              className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-400 bg-gray-100 cursor-not-allowed"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option>Active</option>
            </select>
            <label className="text-xs text-gray-700" htmlFor="remark">Remark</label>
            <textarea
              id="remark"
              rows={3}
              className="border border-gray-300 rounded px-2 py-1 text-sm resize-y"
              value={formData.remark}
              onChange={handleInputChange}
            ></textarea>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white text-xs rounded px-3 py-1 cursor-pointer"
              >
                Create
              </button>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-16 text-sm"
              />
            </div>
          </form>
          <div className="flex-1 mt-6 md:mt-0">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-semibold">
                Show
                <select
                  className="border border-gray-300 rounded px-1 py-0.5 text-xs ml-1 mr-1"
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
              <div className="text-sm font-semibold flex items-center">
                <label htmlFor="search" className="mr-1">Search:</label>
                <input
                  id="search"
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 text-xs"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <table className="w-full text-xs border-collapse border border-gray-300">
              <thead>
                <tr className="border-b border-gray-300 text-gray-700 font-semibold text-left">
                  <th className="border-r border-gray-300 px-2 py-1 cursor-pointer select-none">
                    Sequence <span className="inline-block text-blue-600">&#9650;</span>
                  </th>
                  <th className="border-r border-gray-300 px-2 py-1 cursor-pointer select-none">
                    PrimeName <span className="text-gray-400">&#9650;</span>
                  </th>
                  <th className="border-r border-gray-300 px-2 py-1 cursor-pointer select-none">
                    Status <span className="text-gray-400">&#9650;</span>
                  </th>
                  <th className="px-2 py-1 cursor-pointer select-none">
                    Remark <span className="text-gray-400">&#9650;</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="text-center py-3 text-gray-500">
                    No data available in table
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className="border-t border-gray-300 text-xs text-gray-700 px-2 py-1">
                    <div className="flex justify-between">
                      <div>Showing 0 to 0 of 0 entries</div>
                      <div className="space-x-4">
                        <button
                          className="text-gray-700 text-xs hover:text-blue-600"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        <button
                          className="text-gray-700 text-xs hover:text-blue-600"
                          onClick={handleNext}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <footer className="border-t border-gray-200 text-xs text-gray-700 p-3">
        © 2025 - i-Softzone
      </footer>
    </div>
  );
};
export default WorkType;