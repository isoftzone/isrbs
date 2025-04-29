import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
    dealer: string;
    date: string;
    // Opening Stock fields
    barcode: string;
    lookup: string;
    itemdesc: string;
    category: string;
    rate: string;
    taxpercent: string;
    taxinr: string;
    purprice: string;
    mrp: string;
    salesprice: string;
    qty: string;
    discpercent: string;
    discinr: string;
    amount: string;
    // Bill Details fields
    afterDiscount: string;
    sgst: string;
    igst: string;
    frightAmount: string;
    roundOff: string;
    tadAmount: string;
    cgst: string;
    discPercent: string;
    discRs: string;
    otherAmount: string;
    netAmount: string;
}

interface Item {
    isFree: boolean;
    salesman: string;
    barCode: string;
    itemDescription: string;
    category: string;
    mrp: string;
    salesPrice: string;
    qty: string;
    discPercent1: string;
    discPercent2: string;
    amount: string;
    taxPercent1: string;
    taxPercent2: string;
    // Add other relevant fields as needed
}

const DetailSearchList: React.FC = () => {
    const [activeTab, setActiveTab] = useState('masterDetails');
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    
      const navigate = useNavigate();
      
      const handleClick = () => {
        // You can perform other actions here before navigating
        // window.alert('Button clicked!');
        navigate('/components/salesdetailsearch'); // Replace '/CustomerList-page' with the desired route
      };

    return (
        <div className="master-details-tab-panel-responsive-container">
            <div className="content-area">
                <div className="Cust-btn gap-2 mb-4">
                    <button className="btn btn-primary"  onClick={handleClick}>CustomerList</button>

                    <button className="btn btn-primary">Create</button>
                </div>
                <div className="tab-navigation">
                    <button className={`tab ${activeTab === 'masterDetails' ? 'active' : ''}`} onClick={() => handleTabClick('masterDetails')}>
                        Commercial Details
                    </button>
                    <button className={`tab ${activeTab === 'others' ? 'active' : ''}`} onClick={() => handleTabClick('others')}>
                        Personal Details
                    </button>
                    <button className={`tab ${activeTab === 'agent' ? 'active' : ''}`} onClick={() => handleTabClick('agent')}>
                        Agent
                    </button>
                    <button className={`tab ${activeTab === 'consignee' ? 'active' : ''}`} onClick={() => handleTabClick('consignee')}>
                        Bank Details
                    </button>
                    <button className={`tab ${activeTab === 'challan' ? 'active' : ''}`} onClick={() => handleTabClick('challan')}>
                        Payment Details
                    </button>
                </div>

                <div className="tab-panel">
                    {activeTab === 'masterDetails' && (
                        <div>
                            <div className="customer-details-form-responsive-container">
                                <h2>Customer Details</h2>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="firmName">Firm Name</label>
                                        <input type="text" id="firmName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="customerCode">Customer Code</label>
                                        <input type="text" id="customerCode" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="gstNo">GST No</label>
                                        <input type="text" id="gstNo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="salePrice">Sale Price</label>
                                        <select id="salePrice">
                                            <option>-Select-</option>
                                            {/* Add options dynamically */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status">Status</label>
                                        <select id="status" defaultValue="Active">
                                            <option>Active</option>
                                            <option>Inactive</option>
                                            {/* Add more options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNo1">Phone No. 1</label>
                                        <input type="text" id="phoneNo1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNo2">Phone No. 2</label>
                                        <input type="text" id="phoneNo2" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobileNo">Mobile No.</label>
                                        <input type="text" id="mobileNo" defaultValue="0" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailId">Email Id</label>
                                        <input type="email" id="emailId" />
                                    </div>
                                    <div className="form-group address-line">
                                        <label htmlFor="addressLine1">Address Line 1</label>
                                        <input type="text" id="addressLine1" />
                                    </div>
                                    <div className="form-group address-line">
                                        <label htmlFor="addressLine2">Address Line 2</label>
                                        <input type="text" id="addressLine2" />
                                    </div>
                                    <div className="form-group address-line">
                                        <label htmlFor="addressLine3">Address Line 3</label>
                                        <input type="text" id="addressLine3" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <select id="country">
                                            <option>-Please select a Country-</option>
                                            {/* Add country options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <select id="state">
                                            <option>-Please select a State-</option>
                                            {/* Add state options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <select id="city">
                                            <option>-Please select a City-</option>
                                            {/* Add city options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="district">District</label>
                                        <select id="district">
                                            <option>--Select--</option>
                                            {/* Add district options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pinCode">Pin Code</label>
                                        <input type="text" id="pinCode" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="transport">Transport</label>
                                        <input type="text" id="transport" />
                                    </div>
                                    <div className="form-group remark">
                                        <label htmlFor="remark">Remark</label>
                                        <textarea id="remark" />
                                    </div>
                                </div>
                                <div className="copyright">© 2025 - All Softzone</div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'others' && (
                        <div>
                            <div className="personal-details-responsive-container">
                                <h2>Personal Details</h2>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                                        <input type="date" id="dateOfBirth" defaultValue="2025-04-21" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobileNo">Mobile No.</label>
                                        <input type="text" id="mobileNo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailId">Email Id</label>
                                        <input type="email" id="emailId" />
                                    </div>
                                    <div className="form-group address-line">
                                        <label htmlFor="addressLine1">Address Line 1</label>
                                        <input type="text" id="addressLine1" />
                                    </div>
                                    <div className="form-group address-line">
                                        <label htmlFor="addressLine2">Line 2</label>
                                        <input type="text" id="addressLine2" />
                                    </div>
                                    <div className="form-group address-line">
                                        <label htmlFor="addressLine3">Line 3</label>
                                        <input type="text" id="addressLine3" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <select id="country">
                                            <option>-Please select a Country-</option>
                                            {/* Add country options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <select id="state">
                                            <option>-Please select a State-</option>
                                            {/* Add state options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <select id="city">
                                            <option>-Please select a City-</option>
                                            {/* Add city options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="district">District</label>
                                        <select id="district">
                                            <option>--Select--</option>
                                            {/* Add district options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pinCode">PinCode</label>
                                        <input type="text" id="pinCode" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="maritalStatus">Marital Status</label>
                                        <select id="maritalStatus">
                                            <option>--Select--</option>
                                            {/* Add marital status options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="anniversary">Anniversary</label>
                                        <input type="date" id="anniversary" placeholder="dd/mm/yyyy" />
                                    </div>
                                </div>
                                <div className="copyright">© 2025 - All Softzone</div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'agent' && (
                        <div>
                            <div className="agent-details-responsive-container">
                                <h2>Agent</h2>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="agent">Agent</label>
                                        <select id="agent">
                                            <option>-Please select an Agent-</option>
                                            {/* Add agent options dynamically */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="agentCommission">Agent Commission</label>
                                        <input type="text" id="agentCommission" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="firmName">Firm Name</label>
                                        <input type="text" id="firmName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobileNo">Mobile No.</label>
                                        <input type="text" id="mobileNo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailId">Email Id</label>
                                        <input type="email" id="emailId" />
                                    </div>
                                    <div className="form-group address-line">
                                        <label htmlFor="addressLine1">Address Line 1</label>
                                        <input type="text" id="addressLine1" />
                                    </div>
                                    <div className="form-group address-line">
                                        <label htmlFor="addressLine2">Address Line 2</label>
                                        <input type="text" id="addressLine2" />
                                    </div>
                                    <div className="form-group address-line">
                                        <label htmlFor="addressLine3">Address Line 3</label>
                                        <input type="text" id="addressLine3" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pinCode">PinCode</label>
                                        <input type="text" id="pinCode" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <select id="country">
                                            <option>-Please select a Country-</option>
                                            {/* Add country options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <select id="state">
                                            <option>-Please select a State-</option>
                                            {/* Add state options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <select id="city">
                                            <option>-Please select a City-</option>
                                            {/* Add city options */}
                                        </select>
                                    </div>
                                </div>
                                <div className="copyright">© 2025 - All Softzone</div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'consignee' && (
                        <div>
                            <div className="bank-details-responsive-container">
                                <h2>Bank Details</h2>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="bankName">Bank Name</label>
                                        <select id="bankName">
                                            <option>--Select--</option>
                                            {/* Add bank name options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="accountType">Account Type</label>
                                        <select id="accountType">
                                            <option>--Select--</option>
                                            {/* Add account type options */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="accountNo">Account No.</label>
                                        <input type="text" id="accountNo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="accountHolderName">Account Holder Name</label>
                                        <input type="text" id="accountHolderName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="branchName">Branch Name</label>
                                        <input type="text" id="branchName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ifscCode">IFSC Code</label>
                                        <input type="text" id="ifscCode" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="chequeNo">Cheque No.</label>
                                        <input type="text" id="chequeNo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="chequeRemark">Cheque Remark</label>
                                        <input type="text" id="chequeRemark" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="micrCode">MICR Code</label>
                                        <input type="text" id="micrCode" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telephoneNoBank">Telephone No. Bank</label>
                                        <input type="text" id="telephoneNoBank" />
                                    </div>
                                </div>
                                <div className="copyright">© 2025 - All Softzone</div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'challan' && <div>
                        <div className="payment-details-form-responsive-container">
      <h2>Payment Details</h2>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="creditLimits">Credit Limits</label>
          <input type="text" id="creditLimits" />
        </div>
        <div className="form-group">
          <label htmlFor="delayDays">Delay Days</label>
          <input type="number" id="delayDays" />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <input type="text" id="discount" />
        </div>
      </div>
      <div className="copyright">© 2025 - All Softzone</div>
    </div>
                        </div>
                        }
                </div>
            </div>
        </div>
    );
};

export default DetailSearchList;
