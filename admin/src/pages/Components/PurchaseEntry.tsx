import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

interface Purchase {
  COMPANYID: string;
  FINYEAR: string;
  SERIES: string;
  PURCHASEID:string;
  PURCHASEDATE: string;
  TMODE: string;
  DEALERID: string;
  BILLNO: string;
  BILLDATE: string;
  ORDERNO: string;
  ORDERDATE: string;
  LRNO: string;
  LRDATE: string;
  DCNO: string;
  DCDATE: string;
  TRANSPORT: string;
  REMARK: string;
  ITEMQTY:string;
  DISCOUNT:string;
  DISCAMOUNT:string;
  CGST:string;
  IGST:string;
  OTHERAMOUNT:string;
  FREIGHTAMOUNT:string;
  ROUNDOFF:string;
  NETAMOUNT:string;
  AMOUNTPAID:string;
  BALANCE:string;
  COMISSION:string;
  GRAMOUNT:string;
  CASHAMOUNT:number;
  CARDAMOUNT: number,
  CHEQUEAMOUNT:number,
  TAXABLE_VALUE:number,
  GST5:number;
  GST12:number;
  GST18:number;
  GST28:number;
  CGSTP5:number;
  CGSTA5:number;
  SGSTP5:number;
  SGSTA5:number;
  IGSTP5:number;
  IGSTA5:number;
  CGSTP12:number;
  CGSTA12:number;
  SGSTP12:number;
  SGSTA12:number;
  IGSTP12:number;
  IGSTA12:number;
  CGSTP18:number;
  CGSTA18:number;
  SGSTP18:number;
  SGSTA18:number;
  IGSTP18:number;
  IGSTA18:number;
  CGSTP28:number;
  CGSTA28:number;
  SGSTP28:number;
  SGSTA28:number;
  IGSTP28:number;
  IGSTA28:number;
  CREATEDBY:string;
  CREATEDON:string;
  UPDATEDBY:string;
  UPDATEDON:string;
  CUSTOME:string;
  CUSTOME2:string;
  GST3:string;
  CGSTP3:string;
  SGSTP3:string;
  IGSTP3:string;
  CGSTA3:string;
  SGSTA3:string;
  IGSTA3:string;
  GST0:string;
  DS_ON:string;
  DS_OFF:string
  quantity: number;
  totalAmount: number;
  discount: number;
}

const PurchaseEntry: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const token = localStorage.getItem("token"); // assuming JWT is stored here
        const response = await axios.get(`${BASE_URL}/getPurchase`, {
            withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("__________",response)
        setPurchases(response.data);
      } catch (error) {
        console.error("Error fetching purchases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <div className="p-4 md:p-6 w-full max-w-screen-xl mx-auto">
      {/* Title and Create Link */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Index</h1>
        <a href="#" className="text-blue-500 hover:underline">Create New</a>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Dealer Name</label>
          <select className="w-full border rounded px-3 py-2 text-sm">
            <option>isoft air</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bill No.</label>
          <input type="text" className="w-full border rounded px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">From Date</label>
          <input type="date" className="w-full border rounded px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">To Date</label>
          <input type="date" className="w-full border rounded px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">SERIES</label>
          <input type="text" className="w-full border rounded px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">No. From</label>
          <input type="text" className="w-full border rounded px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">To</label>
          <input type="text" className="w-full border rounded px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">BarCode</label>
          <input type="text" className="w-full border rounded px-3 py-2 text-sm" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          PReturn Entry
        </button>
        <button className="bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-500">
          Search
        </button>
      </div>
      {/* Form and buttons unchanged... */}

      <div className="overflow-x-auto">
        <table className="min-w-[1000px] w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-b from-blue-500 to-blue-700 text-white text-sm">
              {[
                "COMPANYID", "FINYEAR", "SERIES","PURCHASEID", "Purchase Date", "TMODE", "DEALERID", "Bill No.",
                "Bill Date", "Order No.", "Order Date", "LR No.", "LR Date", "DC No.", "DC Date",
                "TRANSPORT", "REMARK","ITEMQTY","DISCOUNT","DISCAMOUNT","CGST","IGST","OTHERAMOUNT",
                "FREIGHTAMOUNT","ROUNDOFF","NETAMOUNT","BALANCE","COMISSION","GRAMOUNT","CASHAMOUNT",
                "CARDAMOUNT","CHEQUEAMOUNT", "TAXABLE_VALUE","GST5","GST12","GST18","GST28",
                "CGSTP5","CGSTA5","SGSTP5","SGSTA5","IGSTP5","IGSTA5","CGSTP12","CGSTA12","SGSTP12",
                "SGSTA12","IGSTP12","IGSTA12","CGSTP18","CGSTA18","SGSTP18","SGSTA18","IGSTP18",
                "IGSTA18","CGSTP28","CGSTA28","SGSTP28","SGSTA28","IGSTP28","CREATEDBY","CREATEDON",
                "UPDATEDBY","UPDATEDON","CUSTOME","CUSTOME2","GST3","CGSTP3","SGSTP3","IGSTP3",
                "CGSTA3","SGSTA3","IGSTA3","GST0","DS_ON","DS_OFF",
                "Quantity", "Total Amount", "Discount"
              ].map((col, index) => (
                <th key={index} className="border px-3 py-2 whitespace-nowrap text-center">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={19} className="text-center py-6">Loading...</td>
              </tr>
            ) : purchases.length === 0 ? (
              <tr className="bg-gray-100">
                <td colSpan={19} className="text-center py-8 text-gray-500">
                  No records found
                </td>
              </tr>
            ) : (
              purchases.map((item, index) => (
                <tr key={index} className="border-t text-sm text-center">
                  <td>{item.COMPANYID}</td>
                  <td>{item.FINYEAR}</td>
                  <td>{item.SERIES}</td>   
                  <td>{item.PURCHASEID}</td>
                  <td>{item.PURCHASEDATE}</td>
                  <td>{item.TMODE}</td>
                  <td>{item.DEALERID}</td>
                  <td>{item.BILLNO}</td>
                  <td>{item.BILLDATE}</td>
                  <td>{item.ORDERNO}</td>
                  <td>{item.ORDERDATE}</td>
                  <td>{item.LRNO}</td>
                  <td>{item.LRDATE}</td>
                  <td>{item.DCNO}</td>
                  <td>{item.DCDATE}</td>
                  <td>{item.TRANSPORT}</td>
                  <td>{item.REMARK}</td>
                  <td>{item.ITEMQTY}</td>
                  <td>{item.DISCOUNT}</td>
                  <td>{item.DISCAMOUNT}</td>
                  <td>{item.CGST}</td>
                  <td>{item.IGST}</td>
                  <td>{item.OTHERAMOUNT}</td>
                  <td>{item.FREIGHTAMOUNT}</td>
                <td>{item.ROUNDOFF}</td>
                <td>{item.NETAMOUNT}</td>
                <td>{item.AMOUNTPAID}</td>
                <td>{item.BALANCE}</td>
                <td>{item.COMISSION}</td>
                <td>{item.GRAMOUNT}</td>
                <td>{item.CASHAMOUNT}</td>
                <td>{item.CARDAMOUNT}</td>
                <td>{item.CHEQUEAMOUNT}</td>
                <td>{item.TAXABLE_VALUE}</td>
                <td>{item.GST5}</td>
                <td>{item.GST12}</td>
                <td>{item.GST18}</td>
                <td>{item.GST28}</td>
                <td>{item.CGSTP5}</td>
                <td>{item.CGSTA5}</td>
                <td>{item.SGSTP5}</td>
                <td>{item.SGSTA5}</td>
                <td>{item.IGSTP5}</td>
                <td>{item.IGSTA5}</td>
                <td>{item.CGSTP12}</td>
                <td>{item.CGSTA12}</td>
                <td>{item.SGSTP12}</td>
                <td>{item.SGSTA12}</td>
                <td>{item.IGSTP12}</td>
                <td>{item.IGSTA12}</td>
                <td>{item.CGSTP18}</td>
                <td>{item.CGSTA18}</td>
                <td>{item.SGSTP18}</td>
                <td>{item.SGSTA18}</td>
                <td>{item.IGSTP18}</td>
                <td>{item.IGSTA18}</td>
                <td>{item.CGSTP28}</td>
                <td>{item.CGSTA28}</td>
                <td>{item.SGSTP28}</td>
                <td>{item.SGSTA28}</td>
                <td>{item.IGSTP28}</td>
                <td>{item.CREATEDBY}</td>
                <td>{item.CREATEDON}</td>
                <td>{item.UPDATEDBY}</td>
                <td>{item.UPDATEDON}</td>
                <td>{item.CUSTOME}</td>
                <td>{item.CUSTOME2}</td>
                <td>{item.GST3}</td>
                <td>{item.CGSTP3}</td>
                <td>{item.SGSTP3}</td>
                <td>{item.IGSTP3}</td>
                <td>{item.CGSTA3}</td>
                <td>{item.SGSTA3}</td>
                <td>{item.IGSTA3}</td>
                <td>{item.GST0}</td>
                <td>{item.DS_ON}</td>
                <td>{item.DS_OFF}</td>

                  <td>{item.quantity}</td>
                  <td>{item.totalAmount}</td>
                  <td>{item.discount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseEntry;
