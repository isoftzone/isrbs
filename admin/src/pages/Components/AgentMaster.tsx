import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";

interface Agent {
  AGENTID: number;
  AFIRMNAME: string;
  ACTELEPHONENO: string;
  ACMOBILENO: string;
  STATUS: string;
  AGENTNAME: string;
  ADOB: string;
  ACADDRESSLINE1: string;
  ACADDRESSLINE2: string;
  ACADDRESSLINE3: string;
  APCITY: string;
  APSTATE: string;
  APCOUNTRY: string;
  APDISTRICT: string;
  APPINCODE: string;
  AAPERSONALIDTYPE: string;
  APERSONALID: string;
  APMOBILENO: string;
  APEMAILID: string;
  APADDRESSLINE1: string;
  APADDRESSLINE2: string;
  APADDRESSLINE3: string;
  ACCITY: string;
  ACSTATE: string;
  ACCOUNTRY: string;
  ACDISTRICT: string;
  ACPINCODE: string;
  ABANKNAME: string;
  AACCOUNTTYPE: string;
  AACCOUNTNO: string;
  AACCOUNTHOLDERNAME: string;
  ABRANCHNAME: string;
  AIFSCCODE: string;
  ACHEQUEREMARK: string;
  AMICRCODE: string;
  ATPNOBANK: string;
  CREATEDBY: string;
  CREATEDON: string;
  UPDATEDBY: string;
  UpdatedOn: string;
  REMARK: string;
  
}

const AgentMaster = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/getMaster`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAgents(res.data);
      } catch (err) {
        console.error("Failed to fetch agent data:", err);
        setError("Failed to load agent data");
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);



  
  return (
    <div className="bg-white text-gray-900 font-sans p-4">
      <form className="w-full max-w-full mb-4">
        <div className="flex flex-wrap -mx-2 mb-2">
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="agentName" className="block font-bold text-sm mb-1">Agent Name</label>
            <select
              id="agentName"
              name="agentName"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="agentFirmName" className="block font-bold text-sm mb-1">Agent Firm Name</label>
            <select
              id="agentFirmName"
              name="agentFirmName"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="mobileNo" className="block font-bold text-sm mb-1">Mobile No.</label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm"
            />
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="city" className="block font-bold text-sm mb-1">City</label>
            <select
              id="city"
              name="city"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="state" className="block font-bold text-sm mb-1">State</label>
            <select
              id="state"
              name="state"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/6 px-2 mb-2 sm:mb-0">
            <label htmlFor="status" className="block font-bold text-sm mb-1">Status</label>
            <select
              id="status"
              name="status"
              className="w-full border border-gray-300 rounded px-3 py-1 text-sm placeholder-gray-400"
            >
              <option disabled selected>—Select—</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded"
          >
            Add Agent
          </button>
          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-500 text-white text-sm font-semibold px-4 py-1 rounded"
          >
            Search
          </button>
        </div>
      </form>
    <div className="bg-white text-gray-900 font-sans p-4">
      {/* ... your search form UI remains unchanged ... */}

      <div className="overflow-x-auto border border-gray-300 rounded mt-4">
        <table className=" w-full border-collapse border border-gray-300 text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-blue-700 px-2 py-1 font-semibold">AGENTID</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Firm Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CTelephone No</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CMobile No</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">STATUS</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Agent Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Date Of Birth</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CAddress Line1</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CAddress Line2</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">CAddress Line3</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">AACCITY</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">APSTATE</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">APCOUNTRY</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">APDISTRICT</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">APPINCODE</th>
              {/* ... more headers as needed ... */}
              <th className="border border-blue-700 px-2 py-1 font-semibold">Pan No.</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PMobile</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PEmail</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">P Adress Line 1</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">P Adress Line 2</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">P Adress Line 3</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PCity</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PState</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PCountry</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PDistrict</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">PPincode</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Bank Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Account Type</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Account No.</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Account Holder Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Branch Name</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">IFSC Code</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Cheque Code</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Cheque Remark</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Micr Code</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Telephone No Bank</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Created By</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Created On</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Updated By</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Updated On</th>
              <th className="border border-blue-700 px-2 py-1 font-semibold">Pan No.</th>










            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="border px-2 py-1 text-center" colSpan={15}>
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td className="border px-2 py-1 text-center text-red-500" colSpan={15}>
                  {error}
                </td>
              </tr>
            ) : agents.length === 0 ? (
              <tr>
                <td className="border px-2 py-1 text-center" colSpan={15}>
                  No data available in table
                </td>
              </tr>
            ) : (
              agents.map((agent) => (
                <tr key={agent.AGENTID}>
                  <td className="border px-2 py-1">{agent.AGENTID}</td>
                  <td className="border px-2 py-1">{agent.AFIRMNAME}</td>
                  <td className="border px-2 py-1">{agent.ACTELEPHONENO}</td>
                  <td className="border px-2 py-1">{agent.ACMOBILENO}</td>
                  <td className="border px-2 py-1">{agent.STATUS}</td>
                  <td className="border px-2 py-1">{agent.AGENTNAME}</td>
                  <td className="border px-2 py-1">{agent.ADOB}</td>
                  <td className="border px-2 py-1">{agent.ACADDRESSLINE1}</td>
                  <td className="border px-2 py-1">{agent.ACADDRESSLINE2}</td>
                  <td className="border px-2 py-1">{agent.ACADDRESSLINE3}</td>
                  <td className="border px-2 py-1">{agent.APCITY}</td>
                  <td className="border px-2 py-1">{agent.APSTATE}</td>
                  <td className="border px-2 py-1">{agent.APCOUNTRY}</td>
                  <td className="border px-2 py-1">{agent.APDISTRICT}</td>
                  <td className="border px-2 py-1">{agent.AAPERSONALIDTYPE}</td>
                  <td className="border px-2 py-1">{agent.APERSONALID}</td>
                  <td className="border px-2 py-1">{agent.APMOBILENO}</td>
                  <td className="border px-2 py-1">{agent.APEMAILID}</td>
                  <td className="border px-2 py-1">{agent.APADDRESSLINE1}</td>
                  <td className="border px-2 py-1">{agent.APADDRESSLINE2}</td>
                  <td className="border px-2 py-1">{agent.APADDRESSLINE3}</td>
                  <td className="border px-2 py-1">{agent.ACCITY}</td>
                  <td className="border px-2 py-1">{agent.ACSTATE}</td>
                  <td className="border px-2 py-1">{agent.ACCOUNTRY}</td>
                  <td className="border px-2 py-1">{agent.ACDISTRICT}</td>
                  <td className="border px-2 py-1">{agent.ACPINCODE}</td>
                  <td className="border px-2 py-1">{agent.ABANKNAME}</td>
                  <td className="border px-2 py-1">{agent.AACCOUNTTYPE}</td>
                  <td className="border px-2 py-1">{agent.AACCOUNTNO}</td>
                  <td className="border px-2 py-1">{agent.AACCOUNTHOLDERNAME}</td>
                  <td className="border px-2 py-1">{agent.ABRANCHNAME}</td>
                  <td className="border px-2 py-1">{agent.AIFSCCODE}</td>
                  <td className="border px-2 py-1">{agent.ACHEQUEREMARK}</td>
                  <td className="border px-2 py-1">{agent.AMICRCODE}</td>
                  <td className="border px-2 py-1">{agent.ATPNOBANK}</td>
                  <td className="border px-2 py-1">{agent.CREATEDBY}</td>
                  <td className="border px-2 py-1">{agent.CREATEDON}</td>
                  <td className="border px-2 py-1">{agent.UPDATEDBY}</td>
                  <td className="border px-2 py-1">{agent.REMARK}</td>
                  {/* <td className="border px-2 py-1">{agent.AACCOUNTHOLDERNAME}</td> */}






                  {/* ... Render more cells as needed ... */}
                  {/* <td className="border px-2 py-1">{agent.PanNo}</td> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-2 text-xs text-gray-900">
        Showing {agents.length} entries
      </div>
      <footer className="mt-6 text-xs text-gray-700">© 2025 - i-Softzone</footer>
      </div>
    </div>
  );
};

export default AgentMaster;
