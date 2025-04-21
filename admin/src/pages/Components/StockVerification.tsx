import React, { useState } from 'react';
interface StockItem {
  sno: number;
  barcode: string;
  description: string;
  qty: number;
  stockQty: number;
  remaining: number;
}
const StockVerification: React.FC = () => {
  const [formData, setFormData] = useState({
    number: 0,
    vtype: '',
    product: '',
    brand: '',
    vdate: '2025-04-19',
    barcode: '',
    lookup: '',
    itemdesc: '',
    qty: ''
  });
  const [stockItems, setStockItems] = useState<StockItem[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: id === 'number' || id === 'qty' ? Number(value) : value
    }));
  };
  const handleStart = () => {
    console.log('Start verification:', formData);
    // Add your start verification logic here
  };
  const handleAdd = () => {
    if (formData.barcode && formData.qty) {
      const newItem: StockItem = {
        sno: stockItems.length + 1,
        barcode: formData.barcode,
        description: formData.itemdesc || 'N/A',
        qty: Number(formData.qty),
        stockQty: 0, // This would come from your API
        remaining: 0  // This would be calculated
      };
      setStockItems([...stockItems, newItem]);
      // Clear the form fields
      setFormData(prev => ({
        ...prev,
        barcode: '',
        lookup: '',
        itemdesc: '',
        qty: ''
      }));
    }
  };
  const handleRemove = () => {
    if (stockItems.length > 0) {
      setStockItems(stockItems.slice(0, -1));
    }
  };
  const handleClear = () => {
    setStockItems([]);
  };
  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-full mx-auto">
        <div className="bg-gradient-to-b from-[#C7D6EF] to-[#2F4F7F] text-black text-[14px] font-normal px-3 py-2">
          Stock Verification
        </div>
        <form className="px-4 py-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 items-center text-[13px] font-semibold text-black">
            <label htmlFor="number" className="text-right">Number</label>
            <input
              id="number"
              type="number"
              value={formData.number}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-3 py-2 w-full max-w-xs"
            />
            <div></div>
            <label htmlFor="vtype" className="text-right">VType</label>
            <select
              id="vtype"
              value={formData.vtype}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-3 py-2 w-full max-w-xs text-gray-400"
            >
              <option value=""> - - - - - Select - - - - - </option>
            </select>
            <div></div>
            <label htmlFor="product" className="text-right">Product</label>
            <select
              id="product"
              value={formData.product}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-3 py-2 w-full max-w-xs text-gray-400"
            >
              <option value=""> - - - - - ALL - - - - - </option>
            </select>
            <button
              type="button"
              onClick={handleStart}
              className="bg-[#7AC142] hover:bg-[#6AA832] text-white text-[13px] font-normal rounded px-4 py-2 ml-4 self-start"
            >
              Start
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 items-center text-[13px] font-semibold text-black">
            <label htmlFor="brand" className="text-right">Brand</label>
            <select
              id="brand"
              value={formData.brand}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-3 py-2 w-full max-w-xs text-gray-400"
            >
              <option value=""> - - - - - ALL - - - - - </option>
            </select>
            <div></div>
            <label htmlFor="vdate" className="text-right">VDate</label>
            <input
              id="vdate"
              type="date"
              value={formData.vdate}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-3 py-2 w-full max-w-xs text-gray-400"
            />
            <div></div>
          </div>
          <hr className="border-t border-gray-300" />
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-6 gap-y-4 items-center text-[13px] font-semibold text-black">
            <label htmlFor="barcode" className="text-left sm:text-right">Bar Code</label>
            <input
              id="barcode"
              type="text"
              value={formData.barcode}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-3 py-2 w-full max-w-xs"
            />
            <label htmlFor="lookup" className="text-left sm:text-right">Look Up</label>
            <input
              id="lookup"
              type="text"
              value={formData.lookup}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-3 py-2 w-full max-w-xs"
            />
            <label htmlFor="itemdesc" className="text-left sm:text-right">Item Description</label>
            <input
              id="itemdesc"
              type="text"
              value={formData.itemdesc}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-3 py-2 w-full max-w-xs"
            />
            <label htmlFor="qty" className="text-left sm:text-right">Qty</label>
            <input
              id="qty"
              type="text"
              value={formData.qty}
              onChange={handleInputChange}
              className="border border-gray-300 rounded text-[13px] px-3 py-2 w-full max-w-[80px]"
            />
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={handleAdd}
                className="bg-[#7AC142] hover:bg-[#6AA832] text-white text-[13px] font-normal rounded px-4 py-1 self-center"
              >
                Add
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className="bg-gray-400 hover:bg-gray-500 text-black text-[13px] font-normal rounded px-4 py-1 self-center"
              >
                Remove
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="bg-[#F5B800] hover:bg-[#D9A400] text-black text-[13px] font-normal rounded px-4 py-1 self-center"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
        <table className="w-full border-collapse border border-gray-300 mt-4 text-[13px]">
          <thead>
            <tr className="bg-gradient-to-b from-[#4A6EA9] to-[#2F4F7F] text-white font-semibold text-[13px]">
              <th className="border border-gray-300 px-2 py-1 text-left">SNo.</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Barcode</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Description</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Qty</th>
              <th className="border border-gray-300 px-2 py-1 text-left">StockQty</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Remaining</th>
            </tr>
          </thead>
          <tbody>
            {stockItems.length > 0 ? (
              stockItems.map((item) => (
                <tr key={item.sno} className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-2 py-1">{item.sno}</td>
                  <td className="border border-gray-300 px-2 py-1">{item.barcode}</td>
                  <td className="border border-gray-300 px-2 py-1">{item.description}</td>
                  <td className="border border-gray-300 px-2 py-1">{item.qty}</td>
                  <td className="border border-gray-300 px-2 py-1">{item.stockQty}</td>
                  <td className="border border-gray-300 px-2 py-1">{item.remaining}</td>
                </tr>
              ))
            ) : (
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-2 py-1" colSpan={6}>No data available in table</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="bg-[#E6E6E1] text-[13px] p-4 mt-2">
          Showing {stockItems.length > 0 ? 1 : 0} to {stockItems.length} of {stockItems.length} entries
        </div>
       
      </div>
    </div>
  );
};
export default StockVerification;