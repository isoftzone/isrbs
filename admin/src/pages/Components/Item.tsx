import React from 'react';
const Item = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="p-4">
        <h2 className="text-lg font-normal mb-2">Item Details</h2>
        <hr className="border-gray-300 mb-6" />
        <form className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex flex-col">
            <label htmlFor="itemName" className="text-xs font-semibold mb-1">Item Name</label>
            <input
              id="itemName"
              type="text"
              className="rounded border border-gray-300 px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="barcode" className="text-xs font-semibold mb-1">BarCode</label>
            <input
              id="barcode"
              type="text"
              className="rounded border border-gray-300 px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="hsn" className="text-xs font-semibold mb-1">HSN</label>
            <input
              id="hsn"
              type="text"
              className="rounded border border-gray-300 px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mrpFrom" className="text-xs font-semibold mb-1">MRP From</label>
            <input
              id="mrpFrom"
              type="text"
              className="rounded border border-gray-300 px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mrpTo" className="text-xs font-semibold mb-1">MRP To</label>
            <input
              id="mrpTo"
              type="text"
              className="rounded border border-gray-300 px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded px-3 py-2 ml-auto"
          >
            Add Item
          </button>
          <button
            type="button"
            className="bg-sky-400 hover:bg-sky-500 text-white text-xs font-semibold rounded px-3 py-2"
          >
            Search
          </button>
        </form>
        <div className="overflow-x-auto border border-gray-300 rounded">
          <table className="min-w-max w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">ItemId</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Image File Name</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">BarCode</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">ItemName</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Look Up</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Category</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Rate</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Tax</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Pur. Price</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Mrp</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Sale Price</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Sp1</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Sp2</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Sp3</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Sp4</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Status</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">CreatedBy</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">CreatedOn</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">UpdatedBy</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">UpdatedOn</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Custome</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Dealer Name</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Box Size</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">HSN Code</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field1</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field2</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field3</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field4</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field5</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field6</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field7</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field8</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field9</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field10</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field11</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field12</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field13</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field14</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field15</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field16</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field17</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field18</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field19</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field20</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field21</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field22</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field23</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field24</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field25</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field26</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field27</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field28</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field29</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field30</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field31</th>
                <th className="border border-blue-700 px-2 py-1 whitespace-nowrap">Field32</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xs text-gray-700">
                <td className="border border-gray-300 px-2 py-1 whitespace-nowrap" colSpan={26}>
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-xs text-gray-700">Showing 0 to 0 of 0 entries</div>
      </div>
     </div>
  );
};
export default Item;