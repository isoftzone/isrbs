import React, { useState } from 'react';
interface StockItem {
  sno: number;
  barcode: string;
  description: string;
  mrp: number;
  qty: number;
}
const StockInward: React.FC = () => {
  const [formData, setFormData] = useState({
    stiNoPrefix: 'STI',
    stiNo: '',
    stiDate: '2025-04-19',
    location: '',
    remark: '',
    barcode: '',
    lookup: '',
    itemDescription: '',
    mrp: '',
    qty: ''
  });
  const [stockItems, setStockItems] = useState<StockItem[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleAddItem = () => {
    if (formData.barcode && formData.qty) {
      const newItem: StockItem = {
        sno: stockItems.length + 1,
        barcode: formData.barcode,
        description: formData.itemDescription || 'N/A',
        mrp: parseFloat(formData.mrp) || 0,
        qty: parseFloat(formData.qty) || 0
      };
      setStockItems([...stockItems, newItem]);
      // Clear item fields
      setFormData(prev => ({
        ...prev,
        barcode: '',
        lookup: '',
        itemDescription: '',
        mrp: '',
        qty: ''
      }));
    }
  };
  const handleRemoveItem = () => {
    if (stockItems.length > 0) {
      setStockItems(stockItems.slice(0, -1));
    }
  };
  const handleClearItems = () => {
    setStockItems([]);
  };
  const handleSave = () => {
    console.log('Saving stock inward:', {
      header: {
        stiNo: `${formData.stiNoPrefix}${formData.stiNo}`,
        stiDate: formData.stiDate,
        location: formData.location,
        remark: formData.remark
      },
      items: stockItems
    });
    // Add your save logic here
  };
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="max-w-full mx-auto">
        <div className="bg-gradient-to-b from-[#4A729D] to-[#2F4F7A] text-gray-900 text-[13px] font-normal px-3 py-1 select-none">
          Stock Inward
        </div>
        <form className="px-4 py-3 space-y-4 text-[13px] text-gray-700">
          <div className="flex flex-wrap items-center gap-4">
            <label className="font-bold w-[70px]">STI No.</label>
            <input
              type="text"
              name="stiNoPrefix"
              placeholder="STI"
              value={formData.stiNoPrefix}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] text-gray-400 px-2 py-1 w-[100px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              name="stiNo"
              value={formData.stiNo}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-2 py-1 w-[70px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label className="font-bold w-[70px]">STIDate</label>
            <input
              type="date"
              name="stiDate"
              placeholder="19-04-2025"
              value={formData.stiDate}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] text-gray-400 px-2 py-1 w-[140px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label className="font-bold w-[60px]">Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] text-gray-400 px-2 py-1 w-[160px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="" disabled>--Select--</option>
            </select>
            <label className="font-bold w-[60px]">Remark</label>
            <input
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-2 py-1 w-[160px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <label className="font-bold w-[90px]">Bar Code</label>
            <input
              type="text"
              name="barcode"
              value={formData.barcode}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-2 py-1 w-[220px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label className="font-bold w-[70px]">Look Up</label>
            <input
              type="text"
              name="lookup"
              value={formData.lookup}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-2 py-1 w-[220px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label className="font-bold w-[120px]">Item Description</label>
            <input
              type="text"
              name="itemDescription"
              value={formData.itemDescription}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-2 py-1 w-[220px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label className="font-bold w-[40px]">MRP</label>
            <input
              type="text"
              name="mrp"
              value={formData.mrp}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-2 py-1 w-[80px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label className="font-bold w-[30px]">Qty</label>
            <input
              type="text"
              name="qty"
              value={formData.qty}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-2 py-1 w-[80px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAddItem}
              className="bg-green-500 hover:bg-green-600 text-white text-[13px] font-semibold rounded-full px-4 py-1"
            >
              Add
            </button>
            <button
              type="button"
              onClick={handleRemoveItem}
              className="bg-gray-400 hover:bg-gray-500 text-gray-700 text-[13px] font-semibold rounded-full px-4 py-1"
            >
              Remove
            </button>
            <button
              type="button"
              onClick={handleClearItems}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-[13px] font-semibold rounded-full px-4 py-1"
            >
              Clear
            </button>
          </div>
        </form>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-[13px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gradient-to-b from-[#4A729D] to-[#2F4F7A] text-white font-bold text-left">
                <th className="border border-gray-300 px-2 py-1 w-[60px]">SNO</th>
                <th className="border border-gray-300 px-2 py-1 w-[160px]">Barcode</th>
                <th className="border border-gray-300 px-2 py-1">Description</th>
                <th className="border border-gray-300 px-2 py-1 w-[80px]">MRP</th>
                <th className="border border-gray-300 px-2 py-1 w-[80px]">Qty</th>
              </tr>
            </thead>
            <tbody className="bg-[#E7E7E2] text-gray-900">
              {stockItems.length > 0 ? (
                stockItems.map((item) => (
                  <tr key={item.sno} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-2 py-1">{item.sno}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.barcode}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.description}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.mrp.toFixed(2)}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.qty}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border border-gray-300 px-2 py-2" colSpan={5}>
                    No data available in table
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="text-[13px] text-gray-800 mt-2 px-4">
          Showing {stockItems.length > 0 ? 1 : 0} to {stockItems.length} of {stockItems.length} entries
        </div>
        <div className="flex justify-center mt-6 mb-10">
          <button
            type="button"
            onClick={handleSave}
            className="bg-green-400 hover:bg-green-500 text-white text-[13px] font-semibold rounded px-4 py-1"
          >
            Save
          </button>
        </div>
        <div className="flex justify-between items-center px-4 mb-6">
          <a href="#" className="text-[13px] text-blue-600 hover:underline">Back to List</a>
          <button
            type="button"
            className="bg-teal-400 hover:bg-teal-500 text-white rounded px-3 py-2"
            aria-label="Next"
          >
          </button>
        </div>
        <hr className="border-t border-gray-300" />
        <footer className="text-[13px] text-gray-700 px-4 py-3 select-none">
          © 2025 - i-Softzone
        </footer>
      </div>
    </div>
  );
};
export default StockInward;