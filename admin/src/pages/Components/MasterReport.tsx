import React, { useEffect, useState, useRef } from 'react';
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

interface DropdownOptions {
    [key: string]: string[];
}

interface SortConfig {
    key: string | null;
    direction: 'asc' | 'desc' | null;
}

const ReportFromStock: React.FC = () => {
    const [reportField, setreportfield] = useState<Report[]>([]);
    const [filter, setfilter] = useState<UserData[]>([]);
    const [dropdownData, setDropdownData] = useState<DropdownOptions>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pagename = searchParams.get('page') || '';
    const dispatch = useDispatch();

    const prevPageRef = useRef(pagename);

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });

    const totalPages = Math.ceil(filter.length / rowsPerPage);

    useEffect(() => {
        if (prevPageRef.current !== pagename) {
            setfilter([]);
            setFormData({});
            setDropdownData({});
            setSortConfig({ key: null, direction: null });
            prevPageRef.current = pagename;
        }
    }, [pagename]);

    useEffect(() => {
        const fetchFilter = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/getFilter?formName=${encodeURIComponent(pagename)}`, {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
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

    useEffect(() => {
        const fetchDropdownOptions = async () => {
            const dropdownFields = reportField.filter((field) => field.control === 'Dropdown');
            const data: { [key: string]: string[] } = {};
            if (dropdownFields.length === 0) return;
            for (const field of dropdownFields) {
                try {
                    const response = await axios.get('http://localhost:3000/getfilterData', {
                        params: {
                            pageName: pagename,
                            column: field.name,
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

    const fetchFilteredData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/reportSearch', {
                params: {
                    pageName: pagename,
                    formData: JSON.stringify(formData),
                },
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

    const handleSearch = () => {
        setCurrentPage(1);
        setSortConfig({ key: null, direction: null });
        fetchFilteredData();
    };

    const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handleSort = (key: string) => {
        if (sortConfig.key === key) {
            setSortConfig({ key, direction: sortConfig.direction === 'asc' ? 'desc' : 'asc' });
        } else {
            setSortConfig({ key, direction: 'asc' });
        }
    };

    const sortData = (data: UserData[]) => {
        if (!sortConfig.key || !sortConfig.direction) return data;

        return [...data].sort((a, b) => {
            const key = sortConfig.key as string;
            const valueA = a[key];
            const valueB = b[key];

            let comparison = 0;
            if (typeof valueA === 'string' && typeof valueB === 'string') {
                comparison = valueA.localeCompare(valueB);
            } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                comparison = valueA - valueB;
            } else if (valueA < valueB) {
                comparison = -1;
            } else if (valueA > valueB) {
                comparison = 1;
            }

            return sortConfig.direction === 'asc' ? comparison : comparison * -1;
        });
    };

    const sortedFilter = sortData(filter);
    const paginatedSortedData = sortedFilter.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const capitalize = (text: any) => {
        return text
            .replace(/[_-]/g, ' ')
            .toLowerCase()
            .split(' ')
            .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };

    const headers = filter.length > 0 ? Object.keys(filter[0]).map((key) => ({ label: capitalize(key), key })) : [];

    return (
        <div>
            <div className="flex items-center justify-between py-4 bg-gradient-to-b from-blue-100 to-transparent">
                <h2 className="text-lg font-semibold">{pagename.toUpperCase()}</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 bg-gray-100 min-h-screen">
                {/* Sidebar */}
                <div className="w-full pt-2 lg:w-1/3 xl:w-1/4">
                    <nav className={`sidebarr h-auto w-full z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}>
                        <div className="dark:bg-black flex flex-col">
                            <div className="shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] bg-white ms-0 lg:ms-3 filter-section">
                                <button type="submit" className="btn btn-primary text-white m-2" onClick={handleSearch}>
                                    Search
                                </button>
                                <div className="w-full p-2">
                                    {reportField.map((item, ind) => (
                                        <div key={ind} className="mb-4">
                                            <div className="font-bold">{item.Lable}</div>
                                            <div>
                                                {item.control === 'Dropdown' ? (
                                                    <select
                                                        className="w-full border border-gray-300 rounded px-2 py-1"
                                                        onChange={(e) =>
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                [item.name]: e.target.value,
                                                            }))
                                                        }
                                                    >
                                                        <option value="">-- All --</option>
                                                        {dropdownData[item.name]?.map((option, index) => (
                                                            <option key={index} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : item.control === 'input' || item.control === 'Textbox' ? (
                                                    <input
                                                        type={item.type === 'Numeric' ? 'number' : 'text'}
                                                        className="w-full border border-gray-300 rounded px-2 py-1"
                                                        placeholder={item.name}
                                                        onChange={(e) =>
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                [item.name]: e.target.value,
                                                            }))
                                                        }
                                                    />
                                                ) : item.control === 'DatetimePicker' ? (
                                                    <input
                                                        type="datetime-local"
                                                        className="w-full border border-gray-300 rounded px-2 py-1"
                                                        onChange={(e) =>
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                [item.name]: e.target.value,
                                                            }))
                                                        }
                                                    />
                                                ) : item.control === 'Radiobutton' ? (
                                                    <div className="flex space-x-4">
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name={item.name}
                                                                value="Yes"
                                                                onChange={(e) =>
                                                                    setFormData((prev) => ({
                                                                        ...prev,
                                                                        [item.name]: e.target.value,
                                                                    }))
                                                                }
                                                            />
                                                            Yes
                                                        </label>
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name={item.name}
                                                                value="No"
                                                                onChange={(e) =>
                                                                    setFormData((prev) => ({
                                                                        ...prev,
                                                                        [item.name]: e.target.value,
                                                                    }))
                                                                }
                                                            />
                                                            No
                                                        </label>
                                                    </div>
                                                ) : (
                                                    <span>Unsupported control</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 px-3 overflow-auto min-w-0">
                    {/* Export and Search Controls */}
                    <div className="flex flex-wrap justify-end gap-3 pt-3">
                        <div className="flex gap-2 flex-wrap justify-center lg:justify-end w-full">
                            <button className="btn btn-primary text-sm">CSV</button>
                            <button className="btn btn-primary text-sm">TXT</button>
                            <button className="btn btn-primary text-sm">EXCEL</button>
                            <button className="btn btn-primary text-sm">PRINT</button>
                            <input type="search" className="border border-grey-100 rounded px-2 py-1 text-sm w-full sm:w-auto order-first sm:order-last" placeholder="Search..." />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-sm">
                            <thead>
                                <tr>
                                    {headers.map((header) => (
                                        <th key={header.key} className="bg-[#4361EE] px-4 py-2 border cursor-pointer" onClick={() => handleSort(header.key)}>
                                            <div className="flex items-center text-white">
                                                <span>{header.label}</span>
                                                {sortConfig.key === header.key && <span className="ml-2">{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>}
                                            </div>
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
                                ) : paginatedSortedData.length === 0 ? (
                                    <tr>
                                        <td className="border px-2 py-1 text-center" colSpan={headers.length}>
                                            No data available in table
                                        </td>
                                    </tr>
                                ) : (
                                    paginatedSortedData.map((row, index) => (
                                        <tr key={index}>
                                            {headers.map((header) => (
                                                <td key={header.key} className="border px-2 py-1 whitespace-nowrap">
                                                    {row[header.key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 px-4">
                        <div className="flex items-center gap-x-2">
                            <label htmlFor="rowsPerPage" className="text-sm text-gray-700">
                                Showing {(currentPage - 1) * rowsPerPage + 1} to {Math.min(currentPage * rowsPerPage, filter.length)} of {filter.length} entries
                            </label>
                            <select id="rowsPerPage" value={rowsPerPage} onChange={handleRowsPerPageChange} className="border rounded px-2 py-1 text-sm">
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                        <div>
                            {totalPages > 1 && (
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 text-sm"
                                    >
                                        &lt;
                                    </button>
                                    {totalPages <= 3 ? (
                                        Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                                                    currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        ))
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => setCurrentPage(1)}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                                                    currentPage === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                            >
                                                1
                                            </button>
                                            {currentPage > 2 && <span className="text-gray-700 text-sm">...</span>}
                                            {currentPage > 2 && currentPage < totalPages ? (
                                                <button
                                                    onClick={() => setCurrentPage(currentPage)}
                                                    className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm"
                                                >
                                                    {currentPage}
                                                </button>
                                            ) : null}
                                            {totalPages > 2 && currentPage < totalPages - 1 && <span className="text-gray-700 text-sm">...</span>}
                                            {totalPages > 1 && (
                                                <button
                                                    onClick={() => setCurrentPage(totalPages)}
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                                                        currentPage === totalPages ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                    }`}
                                                >
                                                    {totalPages}
                                                </button>
                                            )}
                                        </>
                                    )}
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 text-sm"
                                    >
                                        &gt;
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportFromStock;
