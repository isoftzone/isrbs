import React from 'react';
import { useNavigate } from 'react-router-dom';
interface CustomerListProps {}
const SalesDetailSearch: React.FC<CustomerListProps> = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // You can perform other actions here before navigating
        // window.alert('Button clicked!');
        navigate('/components/DetailSearchList'); // Replace '/CustomerList-page' with the desired route
    };
    return (
        <div className="customer-list-responsive-container">
            <div className="filter-section">
                <div className="filter-row">
                    <div className="form-group">
                        <label htmlFor="firmName" className='me-4'>Firm Name</label>
                        <select id="firmName">
                            <option>-Select-</option>
                            {/* Add options dynamically */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerName" className='me-4'>Customer Name</label>
                        <select id="customerName">
                            <option>-Select-</option>
                            {/* Add options dynamically */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state" className='me-4'>State</label>
                        <select id="state">
                            <option>-Select-</option>
                            {/* Add options dynamically */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city" className='me-4'>City</label>
                        <select id="city">
                            <option>-Select-</option>
                            {/* Add options dynamically */}
                        </select>
                    </div>
                </div>
                <div className="filter-row">
                    <div className="form-group">
                        <label htmlFor="gstin" className='me-4'>GSTIN</label>
                        <input type="text" id="gstin" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNo" className='me-4'>Mobile No.</label>
                        <input type="text" id="mobileNo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salePrice" className='me-4'>Sale Price</label>
                        <select id="salePrice">
                            <option>-Select-</option>
                            {/* Add options dynamically */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status" className='me-4'>Status</label>
                        <select id="status">
                            <option>-Select-</option>
                            {/* Add options dynamically */}
                        </select>
                    </div>
                    <div className="form-group action-buttons">
                        <button type="button" className="add-customer-button" onClick={handleClick}>
                            Add Customer
                        </button>
                        <button type="button" className="search-button">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>Agent</th>
                            <th>Firm Name</th>
                            <th>Cust Code</th>
                            <th>Sale Price</th>
                            <th>Status</th>
                            <th>Phone No. 1</th>
                            <th>Phone No. 2</th>
                            <th>Mobile No.</th>
                            <th>Email Id</th>
                            <th>Address Line 1</th>
                            <th>Address Line 2</th>
                            <th>Address Line 3</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Distinct</th>
                            <th>Pin code</th>
                            <th>Tranasport</th>
                            <th>Remark</th>
                            <th>Tin No.</th>
                            <th>Name</th>
                            <th>RName</th>
                            <th>ReName</th>
                            <th>Contact No.</th>
                            <th>CreatedBy</th>
                            <th>CreatedBy</th>
                            <th>CreatedOn</th>
                            <th>UpdatedBy</th>
                            <th>UpdatedOn</th>
                            <th>Date Of Birth</th>
                            <th>Mobile No.</th>
                            <th>Email Id</th>
                            <th>Address Line 1</th>
                            <th>Line 2</th>
                            <th>Line 3</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Distinct</th>
                            <th>PinCode</th>
                            <th>Marital Status</th>
                            <th>Anniversary</th>
                            <th>Agent Comm.</th>
                            <th>Bank Name</th>
                            <th>Account Type</th>
                            <th>AC. Number</th>
                            <th>AC. H Name</th>
                            <th>Branch Name</th>
                            <th>IFSC Code</th>
                            <th>Cheque No.</th>
                            <th>C. Remark</th>
                            <th>Micr Code</th>
                            <th>Tel. No Bank</th>
                            <th>Credit Limits</th>
                            <th>Delay Days</th>
                            <th>Discount</th>
                            <th>Status Code</th>
                            <th>GST No.</th>
                            <th>PEarned</th>
                            <th>PreDeemed</th>
                            <th>Club</th>
                            <th>TAmount</th>
                            <th>PAmount</th>
                            <th>Balance</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Mpbile No.</th>
                            <th>Telephone No.</th>
                            <th>Address</th>
                            <th>Card No.</th>
                            <th>Title</th>
                            <th>Lrms</th>
                            <th>Email Id</th>
                            <th>ConsignedId</th>
                            <th>Name 2</th>
                            <th>Mobile No. 2</th>
                            <th>Type</th>
                            <th>Agent Country</th>
                            <th>Agent City</th>
                            <th>Agent State</th>
                            <th>Area</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* You'll map through your customer data here */}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
            <div className="pagination-info">Showing 0 to 0 of 0 entries</div>
        </div>
    );
};
export default SalesDetailSearch;