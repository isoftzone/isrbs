import React, { useState } from 'react';


interface FormData {
  dealer: string;
  date: string;
  // Opening Stock fields
  barcode: string;
  lookup: string;
  itemdesc: string;
  category: string;
  rate: string;
  taxpercent: string;
  taxinr: string;
  purprice: string;
  mrp: string;
  salesprice: string;
  qty: string;
  discpercent: string;
  discinr: string;
  amount: string;
  // Bill Details fields
  afterDiscount: string;
  sgst: string;
  igst: string;
  frightAmount: string;
  roundOff: string;
  tadAmount: string;
  cgst: string;
  discPercent: string;
  discRs: string;
  otherAmount: string;
  netAmount: string;
}

const OpeningStock: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    dealer: '',
    date: '2018-07-18',
    barcode: '',
    lookup: '',
    itemdesc: '',
    category: '',
    rate: '',
    taxpercent: '',
    taxinr: '',
    purprice: '',
    mrp: '',
    salesprice: '',
    qty: '',
    discpercent: '',
    discinr: '',
    amount: '',
    afterDiscount: '',
    sgst: '',
    igst: '',
    frightAmount: '',
    roundOff: '',
    tadAmount: '',
    cgst: '',
    discPercent: '',
    discRs: '',
    otherAmount: '',
    netAmount: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  // Render Master Details step
  const renderMasterDetails = () => (
    <div className="max-w-5xl mx-auto">
      <div className="bg-blue-700 bg-gradient-to-b from-blue-600 to-blue-700 text-black text-xs font-semibold px-4 py-2">
        <span className="text-black">Master Details</span>
      </div>

      <form className="px-4 py-6 flex flex-wrap items-center gap-y-6">
        <label htmlFor="dealer" className="font-bold text-xs w-20 min-w-[80px]">Dealer</label>
        <select
          id="dealer"
          name="dealer"
          className="border border-gray-300 rounded text-xs text-gray-400 w-48 h-8 px-2"
          value={formData.dealer}
          onChange={handleInputChange}
        >
          <option value="" disabled>--Select--</option>
        </select>

        <label htmlFor="date" className="font-bold text-xs w-20 min-w-[80px] ml-auto">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 rounded text-xs text-gray-400 w-40 h-8 px-2"
          value={formData.date}
          onChange={handleInputChange}
        />
      </form>

      <div className="px-4 py-4 flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          className="bg-teal-400 hover:bg-teal-500 text-white w-8 h-8 rounded flex items-center justify-center"
        >
          
        </button>
      </div>
    </div>
  );

  // Render Opening Stock step
  const renderOpeningStock = () => (
    <div className="max-w-full mx-auto px-4 py-4">
      <div className="border border-gray-300 rounded-t-sm mb-2">
        <nav className="flex border-b border-gray-300">
          <button
            className="px-4 py-2 text-gray-700 border-b-2 border-gray-300 bg-white text-xs font-normal"
            type="button"
          >
            Scan Item
          </button>
          <button
            className="px-4 py-2 text-gray-500 text-xs font-normal"
            type="button"
          >
            New Item
          </button>
        </nav>
      </div>

      <form className="mb-2">
        <div className="grid grid-cols-12 gap-x-4 gap-y-2 items-center">
          <label htmlFor="barcode" className="col-span-2 font-semibold text-xs">Bar Code</label>
          <input
            id="barcode"
            name="barcode"
            type="text"
            className="col-span-3 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.barcode}
            onChange={handleInputChange}
          />
          <label htmlFor="lookup" className="col-span-2 font-semibold text-xs">Look Up</label>
          <input
            id="lookup"
            name="lookup"
            type="text"
            className="col-span-3 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.lookup}
            onChange={handleInputChange}
          />
          <label htmlFor="itemdesc" className="col-span-2 font-semibold text-xs">Item Description</label>
          <input
            id="itemdesc"
            name="itemdesc"
            type="text"
            className="col-span-3 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.itemdesc}
            onChange={handleInputChange}
          />
          <label htmlFor="category" className="col-span-2 font-semibold text-xs">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            className="col-span-3 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-12 gap-x-4 gap-y-2 items-center mt-2">
          <label htmlFor="rate" className="col-span-1 font-semibold text-xs">Rate</label>
          <input
            id="rate"
            name="rate"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.rate}
            onChange={handleInputChange}
          />
          <label htmlFor="taxpercent" className="col-span-1 font-semibold text-xs">Tax(%)</label>
          <input
            id="taxpercent"
            name="taxpercent"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.taxpercent}
            onChange={handleInputChange}
          />
          <label htmlFor="taxinr" className="col-span-1 font-semibold text-xs">Tax(₹)</label>
          <input
            id="taxinr"
            name="taxinr"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.taxinr}
            onChange={handleInputChange}
          />
          <label htmlFor="purprice" className="col-span-1 font-semibold text-xs">Pur.Price</label>
          <input
            id="purprice"
            name="purprice"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.purprice}
            onChange={handleInputChange}
          />
          <label htmlFor="mrp" className="col-span-1 font-semibold text-xs">MRP</label>
          <input
            id="mrp"
            name="mrp"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.mrp}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-12 gap-x-4 gap-y-2 items-center mt-2">
          <label htmlFor="salesprice" className="col-span-1 font-semibold text-xs">Sales Price</label>
          <input
            id="salesprice"
            name="salesprice"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.salesprice}
            onChange={handleInputChange}
          />
          <label htmlFor="qty" className="col-span-1 font-semibold text-xs">Qty</label>
          <input
            id="qty"
            name="qty"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.qty}
            onChange={handleInputChange}
          />
          <label htmlFor="discpercent" className="col-span-1 font-semibold text-xs">Disc(%)</label>
          <input
            id="discpercent"
            name="discpercent"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.discpercent}
            onChange={handleInputChange}
          />
          <label htmlFor="discinr" className="col-span-1 font-semibold text-xs">Disc(₹)</label>
          <input
            id="discinr"
            name="discinr"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.discinr}
            onChange={handleInputChange}
          />
          <label htmlFor="amount" className="col-span-1 font-semibold text-xs">Amount</label>
          <input
            id="amount"
            name="amount"
            type="text"
            className="col-span-2 border border-gray-300 rounded px-2 py-1 text-xs"
            value={formData.amount}
            onChange={handleInputChange}
          />
          <div className="col-span-1 flex space-x-2 justify-end">
            <button
              type="button"
              className="bg-[#7fc241] text-white rounded px-4 py-1 text-xs font-semibold hover:bg-[#6aa832]"
            >
              Add
            </button>
            <button
              type="button"
              className="bg-gray-400 text-gray-700 rounded px-4 py-1 text-xs font-semibold hover:bg-gray-500"
            >
              Remove
            </button>
            <button
              type="button"
              className="bg-[#f0b500] text-white rounded px-4 py-1 text-xs font-semibold hover:bg-[#d19a00]"
            >
              Clear
            </button>
          </div>
        </div>
      </form>

      <div className="flex justify-end mt-6 space-x-4">
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-gray-400 text-gray-700 rounded px-4 py-2 text-sm font-semibold hover:bg-gray-500"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-[#7fc241] text-white rounded px-4 py-2 text-sm font-semibold hover:bg-[#6aa832]"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-[#4dc1c1] text-white rounded px-4 py-2 text-sm font-semibold hover:bg-[#3ba9a9] flex items-center justify-center"
        >
         
        </button>
      </div>
    </div>
  );

  // Render Bill Details step
  const renderBillDetails = () => (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-b from-blue-700 to-blue-600 text-black text-sm px-3 py-2 mb-4">
        Stock
      </div>

      <div className="border border-t-0 border-gray-300 rounded-b">
        <div className="border-b border-gray-300">
          <ul className="flex text-sm text-gray-700">
            <li className="border border-b-0 border-gray-300 rounded-t px-4 py-2 cursor-default bg-white">
              Bill Details
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-800">
          <div className="space-y-4">
            <div className="flex items-center">
              <label htmlFor="qty" className="w-36">Qty</label>
              <input
                id="qty"
                name="qty"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.qty}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="afterDiscount" className="w-36">After Discount Amount</label>
              <input
                id="afterDiscount"
                name="afterDiscount"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.afterDiscount}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="sgst" className="w-36">SGST</label>
              <input
                id="sgst"
                name="sgst"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.sgst}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="igst" className="w-36">IGST</label>
              <input
                id="igst"
                name="igst"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.igst}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="frightAmount" className="w-36">FrightAmount</label>
              <input
                id="frightAmount"
                name="frightAmount"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.frightAmount}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="roundOff" className="w-36">RoundOff</label>
              <input
                id="roundOff"
                name="roundOff"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.roundOff}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <label htmlFor="amount" className="w-36">Amount</label>
              <input
                id="amount"
                name="amount"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="tadAmount" className="w-36">T./AD. Amount + Tax</label>
              <input
                id="tadAmount"
                name="tadAmount"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.tadAmount}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="cgst" className="w-36">CGST</label>
              <input
                id="cgst"
                name="cgst"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.cgst}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center space-x-2 w-full max-w-xs">
              <label htmlFor="disc" className="w-36">Disc</label>
              <input
                id="discPercent"
                name="discPercent"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-16"
                value={formData.discPercent}
                onChange={handleInputChange}
              />
              <span>%</span>
              <input
                id="discRs"
                name="discRs"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-24 bg-gray-100"
                readOnly
                value={formData.discRs}
              />
              <span>Rs.</span>
            </div>
            <div className="flex items-center">
              <label htmlFor="otherAmount" className="w-36">OtherAmount</label>
              <input
                id="otherAmount"
                name="otherAmount"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.otherAmount}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="netAmount" className="w-36">NetAmount</label>
              <input
                id="netAmount"
                name="netAmount"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs"
                value={formData.netAmount}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-span-full flex justify-end items-center space-x-4 mt-6">
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-400 hover:bg-gray-500 text-gray-700 text-sm font-normal px-4 py-2 rounded"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white text-sm font-normal px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Render stepper
  const renderStepper = () => {
    if (activeStep === 1) {
      return (
        <div className="flex items-center max-w-5xl mx-auto px-4 py-6 select-none">
          <div className="flex items-center flex-1 min-w-0">
            <div className="stepper-circle bg-green-500">1</div>
            <div className="text-center text-xs text-gray-600 ml-2 w-20 truncate">Master Details</div>
          </div>
          <div className="stepper-line"></div>
          <div className="flex items-center flex-1 min-w-0">
            <div className="stepper-circle bg-gray-300 text-gray-600">2</div>
            <div className="text-center text-xs text-gray-600 ml-2 w-20 truncate">Opening Stock</div>
          </div>
          <div className="stepper-line"></div>
          <div className="flex items-center flex-1 min-w-0">
            <div className="stepper-circle bg-gray-300 text-gray-600">3</div>
            <div className="text-center text-xs text-gray-600 ml-2 w-20 truncate">Bill Details</div>
          </div>
        </div>
      );
    } else if (activeStep === 2) {
      return (
        <div className="flex items-center justify-between text-center mb-6 select-none">
          <div className="flex-1 relative">
            <div className="border-t border-gray-300 absolute top-1/2 left-0 right-0 -z-10"></div>
            <div className="inline-flex flex-col items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-700 mx-auto">
              1
            </div>
            <div className="mt-1 text-xs text-gray-500">Master Details</div>
          </div>
          <div className="flex-1 relative">
            <div className="border-t border-gray-300 absolute top-1/2 left-0 right-0 -z-10"></div>
            <div className="inline-flex flex-col items-center justify-center w-8 h-8 rounded-full bg-[#7fc241] text-white mx-auto">
              2
            </div>
            <div className="mt-1 text-xs text-gray-500">Opening Stock</div>
          </div>
          <div className="flex-1 relative">
            <div className="border-t border-gray-300 absolute top-1/2 left-0 right-0 -z-10"></div>
            <div className="inline-flex flex-col items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-700 mx-auto">
              3
            </div>
            <div className="mt-1 text-xs text-gray-500">Bill Details</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-between items-center mt-6 mb-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center relative w-1/3">
            <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 flex items-center justify-center text-white text-sm font-semibold z-10">
              1
            </div>
            <div className="absolute top-4 left-1/2 w-full border-t border-gray-300 -translate-x-1/2 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
            <span className="mt-2 text-xs text-gray-600">Master Details</span>
          </div>
          <div className="flex flex-col items-center relative w-1/3">
            <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 flex items-center justify-center text-white text-sm font-semibold z-10">
              2
            </div>
            <div className="absolute top-4 left-1/2 w-full border-t border-gray-300 -translate-x-1/2 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
            <span className="mt-2 text-xs text-gray-600">Opening Stock</span>
          </div>
          <div className="flex flex-col items-center relative w-1/3">
            <div className="w-8 h-8 rounded-full bg-green-500 border border-green-600 flex items-center justify-center text-white text-sm font-semibold z-10">
              3
            </div>
            <span className="mt-2 text-xs text-gray-600">Bill Details</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      {renderStepper()}

      {activeStep === 1 && renderMasterDetails()}
      {activeStep === 2 && renderOpeningStock()}
      {activeStep === 3 && renderBillDetails()}

    </div>
  );
};

export default OpeningStock;