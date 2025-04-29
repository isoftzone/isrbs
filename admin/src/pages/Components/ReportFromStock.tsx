import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { BASE_URL } from '../../config';

interface Report {
    FormName: string;
    Control: string;
    NAME: string;
    Type: string;
    Value: string;
    SEQUENCE: string;
}
interface DropdownItem {
    NAME: string;
    Control: string;
    // Add other properties if needed
}

interface DropdownData {
    key: string;
    data: string[];
}

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

interface DropdownOptions {
    [key: string]: { FldName: string; FldCode: string; Codetype: string; NAME: string; PRIMENAME: string; WhFldName: string }[];
}

const ReportFromStock: React.FC = () => {
    const [salesDetails, setSalesDetails] = useState<Report[]>([]);
    const [dropdownData, setDropdownData] = useState<DropdownOptions>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const [names, setNames] = useState([]);
    const [agents, setAgents] = useState<Agent[]>([]);
    useEffect(() => {
        fetchSalesDetail();
    }, []);

    const fetchSalesDetail = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getrfmaster', {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('API Response:', response.data);

            if (response.data && Array.isArray(response.data.data)) {
                setSalesDetails(response.data.data);
                fetchDropdownData(response.data.data); // Fetch dropdown options after getting salesDetails
            } else {
                setSalesDetails([]);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching sales details:', error);
            setError('Failed to fetch sales details. Please try again later.');
            setSalesDetails([]);
            setLoading(false);
        }
    };

    //   const fetchDropdownData = async (details: Report[]) => {
    //     const dropdownItems = details.filter((item) => item.Control === "Dropdown");

    //     const fetchPromises = dropdownItems.map(async (item) => {
    //         try {
    //           const response = await axios.post(`${BASE_URL}/postcmbAW`, {
    //             TblName: "MASTER",
    //             FldName: "PRIMENAME",
    //             FldCode: "PRIMEKEYID",
    //             OrdBy: "SEQUENCE",
    //             WhFldName: [
    //               "Product",
    //               "Status",
    //               "Colour",
    //               "Brand",
    //               "Style",
    //               "Size",
    //               "Buyer",
    //               "Season",
    //               "Company",
    //               "Section",
    //               "Category",
    //             ], // Ensure your backend handles an array of field names properly
    //           });
    //           console.log("hello",response)

    //           return { key: item.NAME, data: response.data[item.Value] || [] };
    //         } catch (error) {
    //           console.error(`Error fetching dropdown data for ${item.NAME}:`, error);
    //           return { key: item.NAME, data: [] };
    //         }
    //       });

    //     const results = await Promise.all(fetchPromises);
    //     const dropdownOptions: DropdownOptions = {};
    //     results.forEach(({ key, data }) => {
    //       dropdownOptions[key] = data;
    //     });

    //     setDropdownData(dropdownOptions);
    //   };

    // const fetchDropdownData = async (details: Report[]) => {
    //     const dropdownItems = details.filter((item) => item.Control === 'Dropdown');

    //     const fetchPromises = dropdownItems.map(async (item) => {
    //         try {
    //             const response = await axios.post(`${BASE_URL}/postcmbAW`, {
    //                 TblName: 'MASTER',
    //                 FldName: 'PRIMENAME',
    //                 FldCode: 'PRIMEKEYID',
    //                 OrdBy: 'SEQUENCE',
    //                 // WhFldName: [
    //                 //   "Product",
    //                 //   "Status",
    //                 //   "Colour",
    //                 //   "Brand",
    //                 //   "Style",
    //                 //   "Size",
    //                 //   "Buyer",
    //                 //   "Season",
    //                 //   "Company",
    //                 //   "Section",
    //                 //   "Category",
    //                 // ], // Ensure your backend handles an array of field names properly
    //                 WhFldName: dropdownItems.map((i) => i.NAME), // Fetch only required fields
    //             });
    //             console.log('hello', response);

    //             console.log(`Dropdown data for ${item.NAME}:`, response.data);
    //             console.log('Dropdown Data:', dropdownData[item.NAME]);
    //             const data = Array.isArray(response.data) ? response.data : response.data.data ? response.data.data : response.data[item.Value] ? response.data[item.Value] : [];
    //             // return { key: item.NAME, data: response.data?.[item.Value] ?? [] };  // Ensure fallback for undefined values
    //             return { key: item.NAME, data: response.data[item.NAME]?.map((d: any) => d.PRIMENAME) || [] };
    //         } catch (error) {
    //             console.error(`Error fetching dropdown data for ${item.NAME}:`, error);
    //             return { key: item.NAME, data: [] };
    //         }
    //     });

    //     const results = await Promise.all(fetchPromises);
    //     const dropdownOptions: DropdownOptions = {};
    //     results.forEach(({ key, data }) => {
    //         dropdownOptions[key] = data;
    //     });

    //     setDropdownData(dropdownOptions);
    // };

    console.log('formname formData', formData);
    const fetchAgentsdata = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/searchMobile`, {
                params: { APCITY: formData.City, ACMOBILENO: formData.Mobile, AFIRMNAME: formData.Name },
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setAgents(response.data);
        } catch (err) {
            console.error('Failed to fetch agent data:', err);
            setError('Failed to load agent data');
        } finally {
            setLoading(false);
        }
    };
    const handleClickBtn = () => {
        fetchAgentsdata();
    };
    const fetchDropdownData = async (details: DropdownItem[]) => {
        // Filter only dropdown items
        const dropdownItems = details.filter((item) => item.Control === 'Dropdown');

        const fetchPromises = dropdownItems.map(async (item) => {
            console.log('Processing dropdown item:', item);

            try {
                const response = await axios.post<{
                    message: string;
                    data: Record<string, Array<{ PRIMENAME: string }>>;
                }>(
                    `${BASE_URL}/postcmbAW`,
                    {
                        TblName: 'MASTER',
                        FldName: 'PRIMENAME',
                        FldCode: 'PRIMEKEYID',
                        OrdBy: 'SEQUENCE',
                        WhFldName: item.NAME, // Single field name for each API call
                    },
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                console.log(`Dropdown data for ${item.NAME}:`, response.data);

                // Safely extract data with proper typing
                const items = response.data?.data?.[item.NAME] || [];
                const data = items.map((d) => d.PRIMENAME).filter(Boolean);

                return { key: item.NAME, data };
            } catch (error) {
                console.error(`Error fetching dropdown data for ${item.NAME}:`, error);
                // Return empty array for failed requests to maintain consistent structure
                return { key: item.NAME, data: [] };
            }
        });

        try {
            const dropdownData = await Promise.all(fetchPromises);
            console.log('All dropdown data:', dropdownData);
            return dropdownData;
        } catch (error) {
            console.error('Error in processing dropdown requests:', error);
            // Return empty array for each dropdown item if there's a general failure
            return dropdownItems.map((item) => ({ key: item.NAME, data: [] }));
        }
    };

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const res = await axios.get('http://localhost:3000/getMaster', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setAgents(res.data);
                const agentNames = res.data.map((agent: Agent) => agent.AFIRMNAME); // Assuming each agent has a 'name' field
                setNames(agentNames);
            } catch (err) {
                console.error('Failed to fetch agent data:', err);
                setError('Failed to load agent data');
            } finally {
                setLoading(false);
            }
        };

        fetchAgents();
    }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Sidebar */}
            <nav className={`sidebarr fixed min-h-screen h-full top-[6%] bottom-0 w-[250px] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}>
                <div className="dark:bg-black h-full">
                    <div className="flex justify-between items-center m-1 pt-5">
                        <NavLink to="" className="main-logo flex items-center shrink-0"></NavLink>
                    </div>

                    {/* Dynamic Form Section */}
                    <div className="shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] bg-white ms-3 pt-3 filter-section">
                        <table className="max-h-[840px] overflow-y-auto border border-gray-300 p-2">
                            <tbody className="overflow-y-auto block max-h-[840px]">
                                {salesDetails.map((item, ind) => (
                                    <tr key={ind} className="p-2">
                                        <td className="p-4 font-bold">{item.NAME}</td>
                                        <td>
                                            {item.Control === 'Dropdown' ? (
                                                <select className="border border-gray-300 rounded px-2 py-1">
                                                    <option value="">-- Select --</option>
                                                    {dropdownData[item.NAME] && dropdownData[item.NAME].length > 0 ? (
                                                        dropdownData[item.NAME].map((option: any, index: number) => {
                                                            console.log('Rendering option:', option); // Debugging log
                                                            return (
                                                                <option key={index} value={option}>
                                                                    {option}
                                                                </option>
                                                            );
                                                        })
                                                    ) : (
                                                        <option disabled>No options available</option>
                                                    )}
                                                </select>
                                            ) : item.Control === 'input' ? (
                                                <input type="text" className="border border-gray-300 rounded px-2 py-1" placeholder={item.NAME} />
                                            ) : item.Control === 'checkbox' ? (
                                                <input type="checkbox" />
                                            ) : (
                                                <span>Unsupported Control</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => handleClickBtn()}>
                        Search
                    </button>
                </div>
            </nav>
            {/* Right Section - Table */}
            <div className="flex-1 bg-white rounded shadow-lg ml-2 p-2 overflow-auto">
                <h2 className="text-lg font-semibold mb-2">Items Table</h2>
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Item ID</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Category</th>
                            <th className="px-4 py-2 border">MRP</th>
                            <th className="px-4 py-2 border">Sale Price</th>
                        </tr>
                    </thead>
                    {/* <tbody>

          <tr>
            <td className="px-4 py-2 border">1001</td>
            <td className="px-4 py-2 border">T-Shirt</td>
            <td className="px-4 py-2 border">Apparel</td>
            <td className="px-4 py-2 border">₹599</td>
            <td className="px-4 py-2 border">₹499</td>
          </tr>

        </tbody> */}
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
        </div>
    );
};

export default ReportFromStock;
