import React, { useState } from 'react';
interface StockItem {
  qty: number;
  mrp: number;
  salePrice: number;
  barCode: string;
  itemName: string;
  company: string;
  category: string;
  purPrice: number;
  dealerName: string;
  amount: number;
  // Additional fields can be added as needed
  [key: `field${number}`]: string | number;
}
const StockView: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    dealer: '',
    barcode: '',
    category: '',
    hsnCode: '',
    barcodeFrom: '',
    barcodeTo: '',
    boxSize: '',
    mrpFrom: '',
    mrpTo: ''
  });
  const [stockItems, setStockItems] = useState<StockItem[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically fetch stock data based on form inputs
    // For now, we'll just log the form data
  };
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#4A6EA9] to-[#2A4A7D] text-white text-[13px] px-3 py-1">
        Stock View
      </div>
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-full px-4 py-6 grid grid-cols-1 sm:grid-cols-12 gap-x-4 gap-y-4 text-[13px]"
      >
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">Company</label>
        <select
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        ></select>
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">Dealer</label>
        <select
          name="dealer"
          value={formData.dealer}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        ></select>
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">Barcode</label>
        <input
          type="text"
          name="barcode"
          value={formData.barcode}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        />
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        ></select>
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">HSN Code</label>
        <input
          type="text"
          name="hsnCode"
          value={formData.hsnCode}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        />
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">Barcode From</label>
        <input
          type="text"
          name="barcodeFrom"
          value={formData.barcodeFrom}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        />
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">Barcode To</label>
        <input
          type="text"
          name="barcodeTo"
          value={formData.barcodeTo}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        />
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">Box Size</label>
        <input
          type="text"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        />
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">MRP From</label>
        <input
          type="text"
          name="mrpFrom"
          value={formData.mrpFrom}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        />
        <label className="font-bold col-span-2 sm:col-span-1 flex items-center">MRP To</label>
        <input
          type="text"
          name="mrpTo"
          value={formData.mrpTo}
          onChange={handleInputChange}
          className="col-span-10 sm:col-span-2 border border-gray-300 rounded px-2 py-1 text-[13px]"
        />
        <button
          type="submit"
          className="col-span-10 sm:col-start-12 sm:col-span-1 bg-[#7AC142] hover:bg-[#68A838] text-white rounded px-3 py-1 text-[13px] self-center w-full sm:w-auto transition-colors"
        >
          Search
        </button>
      </form>
      {/* Stock Table */}
      <div className="overflow-auto max-w-full px-4">
        <table className="table-auto border-collapse border border-gray-300 w-full text-[13px] whitespace-nowrap">
          <thead>
            <tr className="min-w-full border-collapse border border-gray-300">
              <th className="border border-gray-300 px-2 py-1 font-semibold">Qty</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Mrp</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Sale Price</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field1</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">BarCode</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field2</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">ItemName</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field3</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field4</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field5</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field6</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field7</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field8</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field9</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Company</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field10</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field11</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field12</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field13</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field14</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Category</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Field15</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Pur. Price</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Dealer Name</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">Amount</th>
              <th className="border border-gray-300 px-2 py-1 font-semibold">MRP AMOUNT</th>
            </tr>
          </thead>
          <tbody className="bg-[#E4E5DF] h-[200px]">
            {stockItems.length > 0 ? (
              stockItems.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-2 py-1 text-center">{item.qty}</td>
                  <td className="border border-gray-300 px-2 py-1 text-center">{item.mrp}</td>
                  <td className="border border-gray-300 px-2 py-1 text-center">{item.salePrice}</td>
                  <td className="border border-gray-300 px-2 py-1 text-center">{item.field1}</td>
                  <td className="border border-gray-300 px-2 py-1 text-center">{item.barCode}</td>
                  {/* Add more table cells for each field */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={26} className="h-[200px] text-center text-gray-500">
                  No stock data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Footer */}
    </div>
  );
};
export default StockView;