import { useState } from "react";

const PrinterSettings = () => {
  const [selectedPrinter, setSelectedPrinter] = useState("A4 Size");
  const [tokenPrint, setTokenPrint] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-md">
      {/* Header */}
      <h1 className="text-xl font-bold mb-6 border-b pb-2">Printer Setting</h1>
      
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Printer Options */}
        <div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Printer Margin</p>
            <div className="space-y-2 pl-4">
              {["A4 Size", "A5 Size", "Thermal Printer", "Custom"].map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    id={option.replace(/\s+/g, '-')}
                    name="printer"
                    checked={selectedPrinter === option}
                    onChange={() => setSelectedPrinter(option)}
                    className="h-4 w-4"
                  />
                  <label htmlFor={option.replace(/\s+/g, '-')} className="ml-2 text-sm">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Margins */}
        <div>
          <div className="space-y-3 pl-4">
            <div>
              <p className="text-sm mb-1">Top Margin</p>
              <input 
                type="text" 
                className="w-full p-1 border rounded text-sm" 
                placeholder="Enter value"
              />
            </div>
            <div>
              <p className="text-sm mb-1">Bottom Margin</p>
              <input 
                type="text" 
                className="w-full p-1 border rounded text-sm" 
                placeholder="Enter value"
              />
            </div>
            <div>
              <p className="text-sm mb-1">Left Margin</p>
              <input 
                type="text" 
                className="w-full p-1 border rounded text-sm" 
                placeholder="Enter value"
              />
            </div>
            <div>
              <p className="text-sm mb-1">Right Margin</p>
              <input 
                type="text" 
                className="w-full p-1 border rounded text-sm" 
                placeholder="Enter value"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-4"></div>

      {/* Token Print Checkbox */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="token-print"
          checked={tokenPrint}
          onChange={(e) => setTokenPrint(e.target.checked)}
          className="h-4 w-4"
          disabled={selectedPrinter !== "Thermal Printer"}
        />
        <label htmlFor="token-print" className="ml-2 text-sm">
          Token Print (Support Only On Thermal Printer)
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-3">
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          Update
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default PrinterSettings;