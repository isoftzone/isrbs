import React from "react";
const District: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans max-w-full p-4">
      <h1 className="text-lg font-normal mb-4 border-b border-gray-200 pb-2">
        District
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <form className="flex flex-col space-y-3 w-full max-w-xs">
          <label className="text-xs text-gray-700" htmlFor="primeName">Prime Name</label>
          <input id="primeName" type="text" className="border border-gray-300 rounded px-2 py-1 text-sm" />
          <label className="text-xs text-gray-700" htmlFor="sequenceNo">Sequence No.</label>
          <input id="sequenceNo" type="text" defaultValue="1" className="border border-gray-300 rounded px-2 py-1 text-sm" />
          <label className="text-xs text-gray-700" htmlFor="status">Status</label>
          <select
            id="status"
            disabled
            className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-400 bg-gray-100 cursor-not-allowed"
          >
            <option>Active</option>
          </select>
          <label className="text-xs text-gray-700" htmlFor="remark">Remark</label>
          <textarea
            id="remark"
            rows={3}
            className="border border-gray-300 rounded px-2 py-1 text-sm resize-y"
          ></textarea>
          <div className="flex space-x-2">
            <button
              type="button"
              disabled
              className="bg-gray-300 text-white text-xs rounded px-3 py-1 cursor-not-allowed"
            >
              Create
            </button>
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 text-sm w-16"
            />
          </div>
        </form>
        <div className="flex-1 mt-6 md:mt-0">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xs font-semibold">
              Show
              <select className="border border-gray-300 rounded px-1 py-0.5 text-xs ml-1 mr-1">
                <option>10</option>
              </select>
              entries
            </div>
            <div className="text-xs font-semibold">
              Search:
              <input
                type="text"
                className="border border-gray-300 rounded px-1 py-0.5 text-xs ml-1"
              />
            </div>
          </div>
          <table className="w-full text-xs border-collapse border border-gray-300">
            <thead>
              <tr className="border-b border-gray-300 text-gray-700">
                <th className="border border-gray-300 px-2 py-1 text-left cursor-pointer select-none">
                  Sequence <span className="inline-block transform rotate-45">▲</span>
                </th>
                <th className="border border-gray-300 px-2 py-1 text-left cursor-pointer select-none">
                  PrimeName
                </th>
                <th className="border border-gray-300 px-2 py-1 text-left cursor-pointer select-none">
                  Status
                </th>
                <th className="border border-gray-300 px-2 py-1 text-left cursor-pointer select-none">
                  Remark
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={4}
                  className="border border-gray-300 px-2 py-3 text-center text-gray-500"
                >
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between text-xs text-gray-700 mt-2">
            <div>Showing 0 to 0 of 0 entries</div>
            <div>
              <button className="hover:underline">Previous</button>
              <button className="ml-4 hover:underline">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default District;