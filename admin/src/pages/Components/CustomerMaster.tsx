import React, { useState, useEffect } from 'react';
import axios from 'axios';
interface Customer {
    COMPANYID: number;
    AGENT: string;
    CUSTOMERID: number;
    CUSTOMERNAME: string;
    CUSTOMERCODE: string;
    FIRMNAME: string;
    CMOBILE: number;
    CCITY: string;
    CSTATE: string;
    CCOUNTRY: string;
    STATUS: string;
    TELEPHONE1: number;
    TELEPHONE2: number;
    GSTIN: number;
    CADDRESSLINE1: string;
    CEMAILID: string;
    SALEPRICE: number;
}
const CustomerMaster = () => {
    const [customermaster, setCustomermaster] = useState<Customer[]>([]);
    const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        FIRMNAME: '',
        CUSTOMERNAME: '',
        CSTATE: '',
        CCITY: '',
        STATUS: '',
        GSTIN: '',
        SALEPRICE: '',
        CMOBILE: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSearchClick = () => {
        const firmInput = formData.FIRMNAME.toLowerCase();
        const mobileInput = formData.CMOBILE;
        const filtered = customermaster.filter((customer) => {
            const firmMatch = firmInput && customer.FIRMNAME.toLowerCase().includes(firmInput);
            const mobileMatch = mobileInput && customer.CMOBILE.toString().includes(mobileInput);
            return firmMatch || mobileMatch;
        });
        setFilteredCustomers(filtered);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage('');
        try {
            const res = await axios.post('http://localhost:3000/customeradd', formData, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });
            alert('Customer added successfully');
            setMessage('Customer added successfully!');
            setCustomermaster((prev) => [...prev, res.data]);
            setFilteredCustomers((prev) => [...prev, res.data]);
            setFormData({
                FIRMNAME: '',
                CUSTOMERNAME: '',
                CSTATE: '',
                CCITY: '',
                STATUS: '',
                GSTIN: '',
                SALEPRICE: '',
                CMOBILE: '',
            });
        } catch (err) {
            console.error('Error adding customer:', err);
            setError('Failed to add customer');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const res = await axios.get('http://localhost:3000/getcustomer', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setCustomermaster(res.data);
                setFilteredCustomers(res.data);
            } catch (err) {
                console.error('Failed to fetch customer data:', err);
                setError('Failed to load customer data');
            } finally {
                setLoading(false);
            }
        };
        fetchCustomers();
    }, []);
    useEffect(() => {
        const filtered = customermaster.filter((customer) => {
            const firmMatch = customer.FIRMNAME.toLowerCase().includes(formData.FIRMNAME.toLowerCase());
            const mobileMatch = customer.CMOBILE.toString().includes(formData.CMOBILE);
            return firmMatch || mobileMatch;
        });
        setFilteredCustomers(filtered);
    }, [formData.FIRMNAME, formData.CMOBILE, customermaster]);
    return (
        <div className="container mx-auto p-4">
            {/* Form Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">Customer Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input name="FIRMNAME" value={formData.FIRMNAME} onChange={handleChange} placeholder="Firm Name" className="p-2 border rounded-md" />
                        <input name="CUSTOMERNAME" value={formData.CUSTOMERNAME} onChange={handleChange} placeholder="Customer Name" className="p-2 border rounded-md" />
                        <select name="CSTATE" value={formData.CSTATE} onChange={handleChange} className="p-2 border rounded-md">
                            <option value="">--Select State--</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            {/* Add more states */}
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <select name="CCITY" value={formData.CCITY} onChange={handleChange} className="p-2 border rounded-md">
                            <option value="">--Select City--</option>
                            <option value="mahu">mahu</option>
                            <option value="indore">indore</option>
                        </select>
                        <input name="GSTIN" value={formData.GSTIN} onChange={handleChange} placeholder="GSTIN" className="p-2 border rounded-md" />
                        <input name="CMOBILE" value={formData.CMOBILE} onChange={handleChange} placeholder="Mobile No." className="p-2 border rounded-md" />
                        <input name="SALEPRICE" value={formData.SALEPRICE} onChange={handleChange} placeholder="Sale Price" className="p-2 border rounded-md" />
                        <select name="STATUS" value={formData.STATUS} onChange={handleChange} className="p-2 border rounded-md">
                            <option value="">--Select Status--</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button type="submit" className="bg-green-500 text-white p-2 rounded-md">
                            Add Customer
                        </button>
                        <div className="flex items-center space-x-2">
                            <button type="button" onClick={handleSearchClick} className="bg-blue-500 text-white p-2 rounded-md">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* Table Section */}
            <div className="overflow-x-auto border border-gray-300 rounded mt-6">
                <h2 className="text-2xl font-semibold mb-4">Customer Table</h2>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-2 border">CustomerId</th>
                            <th className="px-4 py-2 border">Agent</th>
                            <th className="px-4 py-2 border">Firm Name</th>
                            <th className="px-4 py-2 border">Cust.Code</th>
                            <th className="px-4 py-2 border">Sale Price</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Phone No.1</th>
                            <th className="px-4 py-2 border">Phone No.2</th>
                            <th className="px-4 py-2 border">Mobile No.</th>
                            <th className="px-4 py-2 border">Email Id</th>
                            <th className="px-4 py-2 border">Address 1</th>
                        </tr>
                    </thead>
                    <tbody>
                        {error ? (
                            <tr>
                                <td colSpan={11} className="text-center text-red-500">
                                    {error}
                                </td>
                            </tr>
                        ) : filteredCustomers.length === 0 ? (
                            <tr>
                                <td colSpan={11} className="text-center">
                                    No data available
                                </td>
                            </tr>
                        ) : (
                            filteredCustomers.map((CUTOMERDATA) => (
                                <tr key={CUTOMERDATA.CUSTOMERID}>
                                    <td className="border px-2 py-1">{CUTOMERDATA.CUSTOMERID}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.AGENT}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.FIRMNAME}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.CUSTOMERCODE}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.SALEPRICE}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.STATUS}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.TELEPHONE1}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.TELEPHONE2}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.CMOBILE}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.CEMAILID}</td>
                                    <td className="border px-2 py-1">{CUTOMERDATA.CADDRESSLINE1}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default CustomerMaster;
