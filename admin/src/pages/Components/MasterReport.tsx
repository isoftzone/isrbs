import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { BASE_URL } from '../../config';
import { useDispatch } from 'react-redux';
import { setPageTitle, toggleRTL } from '../../store/themeConfigSlice';

interface Report {
    formName: string;
    control: string;
    name: string;
    type: string;
    value: string;
    sequence: string;
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

interface UserData {
    primekeyid: number;
    primename: string;
    id: number;
    sequence: number;
    status: string;
    remark: string;
}
interface UsersData {
    PRIMENAME: string;
    PRIMEKEYID: number;
}

interface DropdownOptions {
    [key: string]: { FldName: string; FldCode: string; Codetype: string; NAME: string; PRIMENAME: string; WhFldName: string }[];
}

const ReportFromStock: React.FC = () => {
    const [salesDetails, setSalesDetails] = useState<Report[]>([]);
    const [agents, setAgents] = useState<Agent[]>([]);
    const [names, setNames] = useState([]);
    const [name, setName] = useState<Record<string, string[]>>({});

    const [dropdownData, setDropdownData] = useState<DropdownOptions>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pagename = searchParams.get('page');
    const [status, setStatus] = useState('Active');
    const [sequence, setSequence] = useState('');
    const [primename, setPrimename] = useState('');
    const [initialRecords, setInitialRecords] = useState<UserData[]>([]);
    const [myStatus, setMyStatus] = useState<UsersData[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [remark, setRemark] = useState('');
    const [currentPage, setCurrentPage] = useState('');
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [user, setUser] = useState<{ name: string; email: string; companyid: string } | null>(null);
    const [primekeyid, setPrimekeyid] = useState('');
    const [productData, setProductData] = useState<UserData[]>([]);
    const [newRecordsData, setNewRecordsData] = useState<UserData[]>([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [table, setTable] = useState<string>('');

    useEffect(() => {
        fetchSalesDetail();
    }, [pagename]);

    const fetchSalesDetail = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getrfmaster', {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
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

    useEffect(() => {
        if (salesDetails.length) {
          const defaultFormData = salesDetails.reduce((acc, cur) => {
            acc[cur.name] = '';
            return acc;
          }, {} as Record<string, any>);
          setFormData(defaultFormData);
        }
      }, [salesDetails]);
      

    useEffect(() => {
        let tableName = '';
        switch (pagename) {
            case 'agent':
                tableName = 'agentmaster';
                break;
            case 'customer':
                tableName = 'customermaster';
                break;
            case 'product':
                tableName = 'Product';
                break;
            case 'buyer':
                tableName = 'Buyer';
                break;
            case 'colour':
                tableName = 'Colour';
                break;
            case 'scolor':
                tableName = 'Supplier Color';
                break;
            case 'category':
                tableName = 'Category';
                break;
            case 'subCategory':
                tableName = 'Sub Category';
                break;
            case 'group':
                tableName = 'Group';
                break;
            case 'subGroup':
                tableName = 'Sub Group';
                break;
            case 'material':
                tableName = 'Material';
                break;
            case 'size':
                tableName = 'Size';
                break;
            case 'style':
                tableName = 'Style';
                break;
            case 'section':
                tableName = 'Section';
                break;
            case 'season':
                tableName = 'Season';
                break;
            case 'unit':
                tableName = 'Unit';
                break;
            case 'packing':
                tableName = 'Packing';
                break;
            case 'gender':
                tableName = 'Gender';
                break;
            case 'tag':
                tableName = 'Tag';
                break;
            case 'seller':
                tableName = 'Seller';
                break;
            default:
                tableName = '';
        }
        setTable(tableName);
        setCurrentPage(tableName);
        dispatch(setPageTitle(tableName));
        setPage(1); // Reset to the first page on category change
    }, [pagename, dispatch]);

    useEffect(() => {
        if (salesDetails.length > 0) {
            fetchDropdownData(salesDetails);
        }
    }, [salesDetails]); // ✅ Run when salesDetails updates

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/getAllData`, {
                    params: { tableName: table },
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (response.data && Array.isArray(response.data.data)) {
                    const pageFields = response.data.data.filter(
                        (field: Report) => field.formName === pagename
                    );
                    setSalesDetails(pageFields);
                    fetchDropdownData(pageFields);
                } else {
                    setSalesDetails([]);
                }
                setLoading(false);
                setAgents(response.data);
                setLoading(false);
                setAgents(response.data);
                console.log('33333333', response);
                const agentNames = response.data.map((agent: Agent) => agent.AFIRMNAME); // Assuming each agent has a 'name' field
                // const agentNames = response.data.map((agent: Agent) => ({
                //     AFIRMNAME: agent.AFIRMNAME,
                //     ACITY: agent.APCITY,
                //   }));
                  
                setNames(agentNames);
            } catch (err) {
                console.error('Failed to fetch agent data:', err);
                setError('Failed to load agent data');
            } finally {
                setLoading(false);
            }
        };

        fetchAgents();
    }, [table]);

   



    // useEffect(() => {
    //     const fetchData = async () => {
    //         const api = await axios.post(
    //             `${BASE_URL}/postcmb`,
    //             { TblName: 'MASTER', FldName: 'PRIMENAME', FldCode: 'PRIMEKEYID', OrdBy: 'SEQUENCE', WhFldName: 'Status' },
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         );
    //         setMyStatus(api.data);
    //     };
    //     fetchData();
    // }, []);

    const isPrimenameUnique = (primename: any) => {
        return !initialRecords.some((record) => record.primename === primename);
    };

    //   const fetchDropdownData = async (details: Report[]) => {
    //     const dropdownItems = details.filter((item) => item.control === "Dropdown");

    //     const fetchPromises = dropdownItems.map(async (item) => {
    //         try {
    //           const response = await axios.post(`${BASE_URL}/postcmbAW`, {
    //             TblName: "MASTER",
    //             FldName: "PRIMENAME",
    //             FldCode: "PRIMEKEYID",
    //             OrdBy: "sequence",
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
    console.log('formName formData', formData);
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

    const fetchDropdownData = async (details: Report[]) => {
        const dropdownItems = details.filter((item) => item.control === 'Dropdown');

        const fetchPromises = dropdownItems.map(async (item) => {
            try {
                const response = await axios.post(`${BASE_URL}/postcmbAW`, {
                    TblName: 'MASTER',
                    FldName: 'PRIMENAME',
                    FldCode: 'PRIMEKEYID',
                    OrdBy: 'sequence',
                    // WhFldName: [
                    //   "Product",
                    //   "Status",
                    //   "Colour",
                    //   "Brand",
                    //   "Style",
                    //   "Size",
                    //   "Buyer",
                    //   "Season",
                    //   "Company",
                    //   "Section",
                    //   "Category",
                    // ], // Ensure your backend handles an array of field names properly
                    WhFldName: dropdownItems.map((i) => i.name), // Fetch only required fields
                });
                console.log('hello', response);

                console.log(`Dropdown data for ${item.name}:`, response.data);
                console.log('Dropdown Data:', drop  downData[item.name]);
                const data = Array.isArray(response.data) ? response.data : response.data.data ? response.data.data : response.data[item.value] ? response.data[item.value] : [];
                // return { key: item.NAME, data: response.data?.[item.Value] ?? [] };  // Ensure fallback for undefined values
                return { key: item.name, data: response.data[item.name]?.map((d: any) => d.PRIMENAME) || [] };
            } catch (error) {
                console.error(`Error fetching dropdown data for ${item.name}:`, error);
                return { key: item.name, data: [] };
            }
        });

        const results = await Promise.all(fetchPromises);
        const dropdownOptions: DropdownOptions = {};
        results.forEach(({ key, data }) => {
            dropdownOptions[key] = data;
        });

        setDropdownData(dropdownOptions);
    };
    const headers = agents.length > 0 ? Object.keys(agents[0]).map((key) => ({ label: key, key })) : [];
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
                                        <td className="p-4 font-bold">{item.name}</td>
                                        <td>
                                            {item.control === 'Dropdown' ? (
                                                <select className="border border-gray-300 rounded px-2 py-1" onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))}>
                                                    <option value="">-- All --</option>

                                                    {item.name == 'Name' && names && names.length > 0 ? (
                                                        names.map((option: any, index: number) => {
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
                                            ) : item.control === 'input' ? (
                                                <input
                                                    type="text"
                                                    className="border border-gray-300 rounded px-2 py-1"
                                                    placeholder={item.name}
                                                    onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))}
                                                />
                                            ) : item.control === 'Textbox' ? (
                                                <input type="Textbox" onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))} />
                                            ) : (
                                                <span>Unsupported control</span>
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
                <h2 className="text-lg font-semibold mb-2">{pagename?.toUpperCase()}</h2>
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            {/* Dynamically render headers from the keys */}
                            {headers.map((header, index) => (
                                <th key={index} className="px-4 py-2 border">
                                    {header.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td className="border px-2 py-1 text-center" colSpan={headers.length}>
                                    Loading...
                                </td>
                            </tr>
                        ) : agents.length === 0 ? (
                            <tr>
                                <td className="border px-2 py-1 text-center" colSpan={headers.length}>
                                    No data available in table
                                </td>
                            </tr>
                        ) : (
                            agents.map((agent, index) => (
                                <tr key={index}>
                                    {/* Dynamically render data cells from agent object */}
                                    {headers.map((header) => (
                                        <td key={header.key} className="border px-2 py-1">
                                            {agent[header.key]}
                                        </td>
                                    ))}
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
