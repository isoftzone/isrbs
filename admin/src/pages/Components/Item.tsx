import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";

interface ItemType {
  COMPANYID:number;
  ITEMID: number;
  PHOTO: string;
  BARCODE: string;
  ITEMNAME: string;
  LOOKUP: string;
  PRODUCT:string;
  BRAND:string;
  DESCRIPTION:string;
  I_SIZE:string;
  COLOR:string;
  STYLE:string;
  UNIT:string;
  CATEGORY: string;
  RATE: number;
  TAX: number;
  PURPRICE: number;
  MRP: number;
  SALEPRICE: number;
  SP1: number;
  SP2: number;
  SP3: number;
  SP4: number;
  STATUS: string;
  REMARK:string;
  CREATEDBY: string;
  CREATEDON: string;
  UPDATEDBY: string;
  UPDATEDON: string;
  CUSTOME: string;
  DEALERID:number;
  DEALERNAME: string;
  BUYER:string;
  SEASON:string;
  GENDER:string;
  SCOLOR:string;
  MATERIAL:string;
  COMPANY:string;
  SUBGROUP:string;
  BOXSIZE: string;
  HSNCODE: string;
  // Add other fields as needed
}

const Item = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/getItem`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // If you are using JWT
          },
        });
        setItems(res.data);
      } catch (error) {
        console.error("Failed to fetch items", error);
      }
    };

    fetchItems();
  }, []);

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

        {/* Search Form (remains the same) */}

        <div className="overflow-x-auto border border-gray-300 rounded">
          <table className="min-w-max w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
              <th className="border border-blue-700 px-2 py-1">Company Id</th>

                <th className="border border-blue-700 px-2 py-1">ItemId</th>
                {/* <th className="border border-blue-700 px-2 py-1">Image</th> */}
                <th className="border border-blue-700 px-2 py-1">BarCode</th>
                <th className="border border-blue-700 px-2 py-1">ItemName</th>
                <th className="border border-blue-700 px-2 py-1">Lookup</th>
                <th className="border border-blue-700 px-2 py-1">Product</th>
                <th className="border border-blue-700 px-2 py-1">Brand</th>
                <th className="border border-blue-700 px-2 py-1">Description</th>
                <th className="border border-blue-700 px-2 py-1">Size</th>
                <th className="border border-blue-700 px-2 py-1">Colour</th>
                <th className="border border-blue-700 px-2 py-1">Style</th>
                <th className="border border-blue-700 px-2 py-1">Unit</th>
                <th className="border border-blue-700 px-2 py-1">Category</th>
                <th className="border border-blue-700 px-2 py-1">Rate</th>
                <th className="border border-blue-700 px-2 py-1">Tax</th>
                <th className="border border-blue-700 px-2 py-1">PurPrice</th>
                <th className="border border-blue-700 px-2 py-1">MRP</th>
                <th className="border border-blue-700 px-2 py-1">Status</th>
                <th className="border border-blue-700 px-2 py-1">Remark</th>
                <th className="border border-blue-700 px-2 py-1">Created By</th>
                <th className="border border-blue-700 px-2 py-1">Created On</th>
                <th className="border border-blue-700 px-2 py-1">Updated By</th>
                <th className="border border-blue-700 px-2 py-1">Updated On</th>
                <th className="border border-blue-700 px-2 py-1">CUSTOME</th>
                <th className="border border-blue-700 px-2 py-1">Dealer Id</th>
                <th className="border border-blue-700 px-2 py-1">Dealer Name</th>
                <th className="border border-blue-700 px-2 py-1">Buyer</th>
                <th className="border border-blue-700 px-2 py-1">Season</th>
                <th className="border border-blue-700 px-2 py-1">Gender</th>
                <th className="border border-blue-700 px-2 py-1">SColour</th>
                <th className="border border-blue-700 px-2 py-1">Material</th>
                <th className="border border-blue-700 px-2 py-1">Company</th>
                <th className="border border-blue-700 px-2 py-1">SubGroup</th>



















                <th className="border border-blue-700 px-2 py-1">Sale Price</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center text-sm py-2">
                    No data available
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.ITEMID} className="text-xs text-gray-700">
                    <td className="border border-gray-300 px-2 py-1">{item.COMPANYID}</td>
                    
                    <td className="border border-gray-300 px-2 py-1">{item.ITEMID}</td>
                    {/* <td className="border border-gray-300 px-2 py-1">
                      {item.PHOTO ? (
                        <img
                          src={item.PHOTO}
                          alt="item"
                          className="h-10 w-10 object-cover"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td> */}
                    <td className="border border-gray-300 px-2 py-1">{item.BARCODE}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.ITEMNAME}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.LOOKUP}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.PRODUCT}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.BRAND}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.DESCRIPTION}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.I_SIZE}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.COLOR}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.STYLE}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.UNIT}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.CATEGORY}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.RATE}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.TAX}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.PURPRICE}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.MRP}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.STATUS}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.REMARK}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.CREATEDBY}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.CREATEDON}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.UPDATEDBY}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.UPDATEDON}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.CUSTOME}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.DEALERID}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.DEALERNAME}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.BUYER}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.SEASON}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.GENDER}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.SCOLOR}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.MATERIAL}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.COMPANY}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.SUBGROUP}</td>
















                    <td className="border border-gray-300 px-2 py-1">{item.SALEPRICE}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-2 text-xs text-gray-700">
          Showing {items.length} entries
        </div>
      </div>
    </div>
  );
};

export default Item;
