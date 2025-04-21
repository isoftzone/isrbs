import React, { useState } from 'react';
interface City {
  id: number;
  sequence: number;
  primeName: string;
  status: string;
  remark: string;
}
const City: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    primeName: '',
    sequenceNo: '',
    status: 'Active',
    remark: ''
  });
  const [error, setError] = useState('');
  const [cities, setCities] = useState<City[]>([
    { id: 1, sequence: 1, primeName: 'JABALPUR', status: 'Active', remark: '' },
    { id: 2, sequence: 2, primeName: 'INDORE', status: 'Active', remark: '' },
  ]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.sequenceNo.trim()) {
      setError('The Sequence No. field is required.');
      return;
    }
    if (isNaN(Number(formData.sequenceNo))) {
      setError('Sequence No. must be a number.');
      return;
    }
    setError('');
    const newCity: City = {
      id: Date.now(),
      sequence: Number(formData.sequenceNo),
      primeName: formData.primeName.toUpperCase(),
      status: formData.status,
      remark: formData.remark
    };
    setCities([...cities, newCity]);
    // Reset form
    setFormData({
      primeName: '',
      sequenceNo: '',
      status: 'Active',
      remark: ''
    });
  };
  return (
    <div className="bg-white text-black font-sans p-4">
      <h1 className="text-xl font-normal mb-2 border-b border-gray-200 pb-2">City</h1>
      <div className="flex">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-1/2 pr-4">
          <div className="flex items-center mb-3">
            <label className="w-28 text-xs text-gray-700">Prime Name</label>
            <input
              name="primeName"
              type="text"
              value={formData.primeName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="w-28 text-xs text-gray-700 mb-1">Sequence No.</label>
            <input
              name="sequenceNo"
              type="text"
              value={formData.sequenceNo}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
            {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
          </div>
          <div className="flex items-center mb-3">
            <label className="w-28 text-xs text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex items-start mb-3">
            <label className="w-28 text-xs text-gray-700 pt-1">Remark</label>
            <textarea
              name="remark"
              rows={3}
              value={formData.remark}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-2 py-1 w-full resize-none"
            />
          </div>
          <div className="flex items-center space-x-2 pt-1">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded px-3 py-1"
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
        <div className="w-1/2">
          <div className="flex justify-between items-center mb-2 text-xs font-semibold text-gray-700">
            <div>
              Show
              <select className="border border-gray-300 rounded px-1 py-0.5 ml-1 mr-1">
                <option>10</option>
              </select>
              entries
            </div>
            <div>
              Search:
              <input
                type="search"
                className="border border-gray-300 rounded px-1 py-0.5 ml-1"
              />
            </div>
          </div>
          <table className="w-full text-xs border-collapse border border-gray-300">
            <thead>
              <tr className="border-b border-gray-300 text-gray-700 font-semibold">
                <th className="border-r border-gray-300 px-2 py-1 text-left">Sequence</th>
                <th className="border-r border-gray-300 px-2 py-1 text-left">PrimeName</th>
                <th className="border-r border-gray-300 px-2 py-1 text-left">Status</th>
                <th className="px-2 py-1 text-left">Remark</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((city, index) => (
                <tr
                  key={city.id}
                  className={`border-b border-gray-300 ${index % 2 === 1 ? 'bg-gray-100' : ''}`}
                >
                  <td className="border-r border-gray-300 px-2 py-1">{city.sequence}</td>
                  <td className="border-r border-gray-300 px-2 py-1">{city.primeName}</td>
                  <td className="border-r border-gray-300 px-2 py-1">{city.status}</td>
                  <td className="px-2 py-1">{city.remark || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-700">
            <div>
              Showing 1 to {cities.length} of {cities.length} entries
            </div>
            <div className="flex items-center space-x-2">
              <span>Previous</span>
              <button
                className="border border-gray-300 rounded px-2 py-1 text-xs bg-white cursor-default"
                disabled
              >
                1
              </button>
              <span>Next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default City;