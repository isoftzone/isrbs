import React from 'react'
{/* Lable Name Start */}
import { NavLink, useLocation } from 'react-router-dom';
{/* Lable Name End */}
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

{/* Search Field Control Start */}
interface Report {
  formName: string;
  control: string;
  name: string;
  type: string;
  value: string;
  sequence: string;
}

interface DropdownOptions {
  [key: string]: { FldName: string; FldCode: string; Codetype: string; NAME: string; PRIMENAME: string; WhFldName: string }[];
}
{/* Search Field Control Start */}

export const ReportMaster: React.FC = () => {

  {/* Lable Name Start */}
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pagename = searchParams.get('page');
  {/* Lable Name End */}

  const [salesDetails, setSalesDetails] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [dropdownData, setDropdownData] = useState<DropdownOptions>({});
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
  const [names, setNames] = useState([]);

  


  useEffect(() => {
    fetchSalesDetail();
  }, [pagename]);

  const fetchSalesDetail = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getrfmaster`, {
        params: { formName: pagename },
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
  const fetchDropdownData = async (details: Report[]) => {
    const dropdownItems = details.filter((item) => item.control === 'Dropdown');

    const fetchPromises = dropdownItems.map(async (item) => {
      try {
        const response = await axios.post(`${BASE_URL}/postcmbAW`, {
          TblName: 'MASTER',
          FldName: 'PRIMENAME',
          FldCode: 'PRIMEKEYID',
          OrdBy: 'sequence',

          // ], // Ensure your backend handles an array of field names properly
          WhFldName: dropdownItems.map((i) => i.name), // Fetch only required fields
        });
        
        
        console.log(`Dropdown data for ${item.name}:`, response.data);
        console.log('Dropdown Data:', dropdownData[item.name]);
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


  const handleClickBtn = () => {

  };

  return (
    <div className="flex-1 bg-white rounded shadow-lg ml-2 p-2 overflow-auto">
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

      {/* Lable Name Start */}
      <h2 className="text-lg font-semibold mb-2">{pagename?.toUpperCase()}</h2>
      {/* Lable Name End */}
    </div>
  )
}
