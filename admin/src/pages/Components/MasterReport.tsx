import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle, toggleRTL } from '../../store/themeConfigSlice';
interface Report {
    formName: string;
    control: string;
    name: string;
    Lable: string;
    type: string;
    value: string;
    sequence: string;
}
interface UserData {
    [key: string]: any;
}
<<<<<<< Updated upstream
=======
interface UsersData {
    PRIMENAME: string;
    PRIMEKEYID: number;
}
>>>>>>> Stashed changes
interface DropdownOptions {
    [key: string]: string[];
}
const ReportFromStock: React.FC = () => {
<<<<<<< Updated upstream
    const [reportField, setreportfield] = useState<Report[]>([]);
    const [filter, setfilter] = useState<UserData[]>([]);
=======
    const [salesDetails, setSalesDetails] = useState<Report[]>([]);
    // const [agents, setAgents] = useState<[]>([]);
    //const [agents, setAgents] = useState<[]>([]);
    const [agents, setAgents] = useState<{ id: number; name: string }[]>([]);
    const [names, setNames] = useState([]);
    const [name, setName] = useState<Record<string, string[]>>({});
>>>>>>> Stashed changes
    const [dropdownData, setDropdownData] = useState<DropdownOptions>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pagename = searchParams.get('page') || '';
    const dispatch = useDispatch();
<<<<<<< Updated upstream


    useEffect(() => {
        setfilter([]);
        setFormData({});
        setDropdownData({});
    }, [pagename]);

    //Filter laod
    useEffect(() => {
        const fetchFilter = async () => {
=======
    const [page, setPage] = useState(1);
    const [user, setUser] = useState<{ name: string; email: string; companyid: string } | null>(null);
    const [primekeyid, setPrimekeyid] = useState('');
    const [productData, setProductData] = useState<UserData[]>([]);
    const [newRecordsData, setNewRecordsData] = useState<UserData[]>([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [table, setTable] = useState<string>('');
    const [formName, setformName] = useState<{ [key: string]: any }>({});
    const fetchSalesDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/getrfmaster?formName=${encodeURIComponent(pagename)}`, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            console.log('FormName API Response:', response.data);
            if (response.data && Array.isArray(response.data.data)) {
                // Filter fields based on current page (pagename)
                const filteredData = response.data.data.filter((item: any) => item.formName.toLowerCase() === pagename?.toLowerCase());
                setSalesDetails(filteredData);
                // fetchDropdownData(filteredData);
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
        fetchSalesDetail();
    }, [pagename]);
    useEffect(() => {
        let tableName = '';
        switch (pagename) {
            case 'agent':
                tableName = 'agentmaster';
                break;
            case 'customer':
                tableName = 'customermaster';
                break;
            default:
                tableName = '';
        }
        setTable(tableName);
        setCurrentPage(tableName);
        dispatch(setPageTitle(tableName));
        setPage(1);
    }, [pagename, dispatch]);
    useEffect(() => {
        const fetchAgents = async () => {
>>>>>>> Stashed changes
            try {
                const response = await axios.get(`http://localhost:3000/getFilter?formName=${encodeURIComponent(pagename)}`, {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
<<<<<<< Updated upstream
                if (response.data && Array.isArray(response.data.data)) {
                    const filteredData = response.data.data.filter((item: any) => item.formName.toLowerCase() === pagename.toLowerCase());
                    setreportfield(filteredData);
                } else {
                    setreportfield([]);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching sales details:', error);
                setError('Failed to fetch sales details. Please try again later.');
                setreportfield([]);
                setLoading(false);
            }
        };
        fetchFilter();
    }, [pagename]);
 //Filter laod


    useEffect(() => {
        if (filter.length && reportField.length) {
            const data: DropdownOptions = {};
            reportField.forEach((field) => {
                if (field.control === 'Dropdown') {
                    const fieldName = field.name;
                    const optionsSet = new Set<string>();
                    filter.forEach((agent) => {
                        const value = agent[fieldName];
                        if (value && typeof value === 'string') {
                            optionsSet.add(value);
                        }
                    });
                    data[fieldName] = Array.from(optionsSet);
                }
            });
            setDropdownData(data);
        }
    }, [filter, reportField]);



    useEffect(() => {
        const fetchDropdownOptions = async () => {
          const dropdownFields = reportField.filter(field => field.control === 'Dropdown');
          const data = {};
          for (const field of dropdownFields) {
            try {
              const response = await axios.get('http://localhost:3000/getfilterData', {
                params: {
                  pageName: pagename,
                  column: field.name
                },
                withCredentials: true,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
              });
              data[field.name] = response.data.options;
            } catch (error) {
              console.error(`Error fetching options for ${field.name}:`, error);
              data[field.name] = [];
            }
          }
          setDropdownData(data);
        };
        fetchDropdownOptions();
      }, [pagename, reportField]);

     //Report Search
    const fetchFilteredData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/reportSearch', {
                params: {
                    pageName: pagename,
                    formData: JSON.stringify(formData),
                },
=======
                setLoading(false);
                setAgents(response.data);
                console.log('33333333', response);
            } catch (err) {
                console.error('Failed to fetch agent data:', err);
                setError('Failed to load agent data');
            } finally {
                setLoading(false);
            }
        };
        fetchAgents();
    }, [table]);
    const isPrimenameUnique = (primename: any) => {
        return !initialRecords.some((record) => record.primename === primename);
    };
    console.log('formName formData', formData);
    const fetchAgentsdata = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/searchMobile`, {
                params: { tableName: table, formData },
>>>>>>> Stashed changes
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setfilter(response.data);
        } catch (err) {
            console.error('Failed to fetch filtered data:', err);
            setError('Failed to load filtered data');
        } finally {
            setLoading(false);
        }
    };
    console.log(formData)
    const handleSearch = () => {
        fetchFilteredData();
    };
<<<<<<< Updated upstream
     //Report Search

    const headers = filter.length > 0 ? Object.keys(filter[0]).map((key) => ({ label: key, key })) : [];
=======
    useEffect(() => {
        if (agents.length && salesDetails.length) {
            const data: { [key: string]: string[] } = {};
            salesDetails.forEach((field) => {
                if (field.control === 'Dropdown') {
                    const fieldName = field.name;
                    const optionsSet = new Set<string>();
                    agents.forEach((agent) => {
                        const value = agent[fieldName];
                        if (value && typeof value === 'string') {
                            optionsSet.add(value);
                        }
                    });
                    data[fieldName] = Array.from(optionsSet);
                }
            });
            setDropdownData(data); // you need to define dropdownData in useState
        }
    }, [agents, salesDetails]);
    console.log('salesDetails', salesDetails);
    console.log('agents', agents);
    console.log('dropdownData', dropdownData);
    const headers = agents.length > 0 ? Object.keys(agents[0]).map((key) => ({ label: key, key })) : [];
>>>>>>> Stashed changes
    return (
        <div className="flex flex-col md:flex-row p-8 bg-gray-100 min-h-screen">
            {/* Sidebar */}
<<<<<<< Updated upstream
            <div className="w-full md:w-1/2">
                <nav className={`sidebarr min-h-screen top-[6%] bottom-0 w-full md:w-[350px] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}>
                    <div className="dark:bg-black h-full">
                        <div className="flex justify-between items-center m-1 pt-5">
                            <NavLink to="" className="main-logo flex items-center shrink-0"></NavLink>
                        </div>
                        {/* Dynamic Form Section */}
                        <div className="shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] bg-white ms-3 pt-3 filter-section">
                            <table className="w-full h-[400px] overflow-y-auto border border-gray-300 p-2">
                                <tbody className="overflow-y-auto block h-full">
                                    {reportField.map((item, ind) => (
                                        <tr key={ind} className="p-2 block">
                                            <td className="p-2 font-bold block">{item.Lable}</td>
                                            <td className="p-2 block">
                                            {item.control === 'Dropdown' ? (
  <select
    className="w-full border border-gray-300 rounded px-2 py-1"
    onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))}
  >
    <option value="">-- All --</option>
    {dropdownData[item.name]?.length > 0 ? (
      dropdownData[item.name].map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))
    ) : (
      <option disabled>No options available</option>
    )}
  </select>
                                                ) : item.control === 'input' || item.control === 'Textbox' ? (
                                                    <input
                                                        type={item.type === 'Numeric' ? 'number' : 'text'}
                                                        className="w-full border border-gray-300 rounded px-2 py-1"
                                                        placeholder={item.name}
                                                        onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))}
                                                    />
                                                ) : item.control === 'DatetimePicker' ? (
                                                    <input
                                                        type="datetime-local"
                                                        className="w-full border border-gray-300 rounded px-2 py-1"
                                                        onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))}
                                                    />
                                                ) : item.control === 'Radiobutton' ? (
                                                    <div className="flex space-x-4">
                                                        <label>
                                                            <input type="radio" name={item.name} value="Yes" onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))} />
                                                            Yes
                                                        </label>
                                                        <label>
                                                            <input type="radio" name={item.name} value="No" onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))} />
                                                            No
                                                        </label>
                                                    </div>
                                                ) : (
                                                    <span>Unsupported control</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-3" onClick={handleSearch}>
                            Search
                        </button>
=======
            <nav className={`sidebarr fixed min-h-screen h-full top-[6%] bottom-0 w-[250px] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}>
                <div className="dark:bg-black h-full">
                    <div className="flex justify-between items-center m-1 pt-5">
                        <NavLink to="" className="main-logo flex items-center shrink-0"></NavLink>
                    </div>
                    {/* Dynamic Form Section */}
                    <div className="shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] bg-white ms-3 pt-3 filter-section">
                        <table className="max-h-[840px] overflow-y-auto border border-gray-300 p-2">
                            <tbody className="overflow-y-auto block max-h-[840px]">
                                {salesDetails.map((item, ind) => {
                                    if (item.formName.toLowerCase() === pagename?.toLowerCase()) {
                                        return (
                                            <tr key={ind} className="p-2">
                                                <td className="p-4 font-bold">{item.name}</td>
                                                <td>
                                                    {item.control === 'Dropdown' ? (
                                                        <select
                                                            className="border border-gray-300 rounded px-2 py-1"
                                                            onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))}
                                                        >
                                                            <option value="">-- All --</option>
                                                            {dropdownData[item.name]?.length > 0 ? (
                                                                dropdownData[item.name].map((option: any, index: number) => (
                                                                    <option key={index} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))
                                                            ) : (
                                                                <option disabled>No options available</option>
                                                            )}
                                                        </select>
                                                    ) : item.control === 'input' || item.control === 'Textbox' ? (
                                                        <input
                                                            type={item.type === 'Numeric' ? 'number' : 'text'}
                                                            className="border border-gray-300 rounded px-2 py-1"
                                                            placeholder={item.name}
                                                            onChange={(e) => setFormData((prev) => ({ ...prev, [item.name]: e.target.value }))}
                                                        />
                                                    ) : (
                                                        <span>Unsupported control</span>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>
>>>>>>> Stashed changes
                    </div>
                </nav>
            </div>
            {/* Right Section - Table */}
<<<<<<< Updated upstream
            <div className="w-full h-[400px] md:w-1/1 mx-2 overflow-x-auto">
                <h2 className="text-lg font-semibold mb-2">{pagename.toUpperCase()}</h2>
=======
            <div className="flex-1 bg-white rounded shadow-lg ml-2 p-2 overflow-auto">
                <h2 className="text-lg font-semibold mb-2">{pagename?.toUpperCase()}</h2>
>>>>>>> Stashed changes
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
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
                        ) : filter.length === 0 ? (
                            <tr>
                                <td className="border px-2 py-1 text-center" colSpan={headers.length}>
                                    No data available in table
                                </td>
                            </tr>
                        ) : (
                            filter.map((agent, index) => (
                                <tr key={index}>
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