import React, { useState } from 'react';

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

const SalesReturn: React.FC = () => {
    const [isFree, setIsFree] = useState(false);
    const [salesman, setSalesman] = useState('');
    const [barCode, setBarCode] = useState('');
    const [lookUp, setLookUp] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [category, setCategory] = useState('');
    const [taxPercent1, setTaxPercent1] = useState('');
    const [taxPercent2, setTaxPercent2] = useState('');
    const [mrp, setMrp] = useState('');
    const [salesPrice, setSalesPrice] = useState('');
    const [qty, setQty] = useState('');
    const [discPercent1, setDiscPercent1] = useState('');
    const [discPercent2, setDiscPercent2] = useState('');
    const [amount, setAmount] = useState('');

    const [items, setItems] = useState<Item[]>([]);

    const handleAddItem = () => {
        const newItem: Item = {
            isFree,
            salesman,
            barCode,
            itemDescription,
            category,
            mrp,
            salesPrice,
            qty,
            discPercent1,
            discPercent2,
            amount,
            taxPercent1,
            taxPercent2,
            // Add other relevant fields
        };
        setItems([...items, newItem]);
        // Clear input fields after adding
        setIsFree(false);
        setSalesman('');
        setBarCode('');
        setLookUp('');
        setItemDescription('');
        setCategory('');
        setTaxPercent1('');
        setTaxPercent2('');
        setMrp('');
        setSalesPrice('');
        setQty('');
        setDiscPercent1('');
        setDiscPercent2('');
        setAmount('');
    };

    const handleRemoveItem = (index: number) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const handleClearAll = () => {
        setItems([]);
    };

    const [activeStep, setActiveStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        dealer: '',
        date: '2018-07-18',
        barcode: '',
        lookup: '',
        itemdesc: '',
        category: '',
        rate: '',
        taxpercent: '',
        taxinr: '',
        purprice: '',
        mrp: '',
        salesprice: '',
        qty: '',
        discpercent: '',
        discinr: '',
        amount: '',
        afterDiscount: '',
        sgst: '',
        igst: '',
        frightAmount: '',
        roundOff: '',
        tadAmount: '',
        cgst: '',
        discPercent: '',
        discRs: '',
        otherAmount: '',
        netAmount: '',
    });

    const [activeTab, setActiveTab] = useState('masterDetails');

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleNext = () => {
        if (activeStep < 4) {
            setActiveStep(activeStep + 1);
        }
    };

    const handlePrevious = () => {
        if (activeStep > 1) {
            setActiveStep(activeStep - 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    // Render Master Details step
    const renderMasterDetails = () => (
        <div className="master-details-tab-panel-responsive-container">
            <h2>Master Details</h2>
            <div className="content-area">
                <div className="tab-navigation">
                    <button className={`tab ${activeTab === 'masterDetails' ? 'active' : ''}`} onClick={() => handleTabClick('masterDetails')}>
                        Bill Details
                    </button>
                    <button className={`tab ${activeTab === 'others' ? 'active' : ''}`} onClick={() => handleTabClick('others')}>
                        Others
                    </button>
                    <button className={`tab ${activeTab === 'agent' ? 'active' : ''}`} onClick={() => handleTabClick('agent')}>
                        Agent
                    </button>
                    <button className={`tab ${activeTab === 'consignee' ? 'active' : ''}`} onClick={() => handleTabClick('consignee')}>
                        Consignee
                    </button>
                    <button className={`tab ${activeTab === 'challan' ? 'active' : ''}`} onClick={() => handleTabClick('challan')}>
                        Challan
                    </button>
                    <button className={`tab ${activeTab === 'order' ? 'active' : ''}`} onClick={() => handleTabClick('order')}>
                        Order
                    </button>
                </div>

                <div className="tab-panel">
                    {activeTab === 'masterDetails' && (
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="series" className="me-4">
                                    Series
                                </label>
                                <input type="text" id="series" defaultValue="5" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="saleDate" className="me-4">
                                    Sale Date
                                </label>
                                <div className="date-input">
                                    <input type="text" id="saleDate" defaultValue="19/04/2025" />
                                    <button className="calendar-icon">📅</button>
                                </div>
                            </div>
                            <div className="form-group customer-group">
                                <label htmlFor="customer" className="me-4">
                                    Customer
                                </label>
                                <div className="customer-input">
                                    <input type="text" id="customer" />
                                    <button className="add-button">ADD</button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="orderNo" className="me-4">
                                    Order No.
                                </label>
                                <input type="text" id="orderNo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="orderDate" className="me-4">
                                    Order Date
                                </label>
                                <div className="date-input">
                                    <input type="text" id="orderDate" defaultValue="19/04/2025" />
                                    <button className="calendar-icon">📅</button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="idNo" className="me-4">
                                    ID No
                                </label>
                                <input type="text" id="idNo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lrNo" className="me-4">
                                    LR No.
                                </label>
                                <input type="text" id="lrNo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lrDate" className="me-4">
                                    LR Date
                                </label>
                                <div className="date-input">
                                    <input type="text" id="lrDate" defaultValue="19/04/2025" />
                                    <button className="calendar-icon">📅</button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobileNo" className="me-4">
                                    Mobile No
                                </label>
                                <input type="text" id="mobileNo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dcNo" className="me-4">
                                    DC No.
                                </label>
                                <input type="text" id="dcNo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dcDate">DC Date</label>
                                <div className="date-input">
                                    <input type="text" id="dcDate" defaultValue="19/04/2025" />
                                    <button className="calendar-icon">📅</button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="point">Point</label>
                                <input type="text" id="point" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mode">Mode</label>
                                <select id="mode">
                                    <option>Class</option>
                                    {/* Add other mode options */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance" className="me-4">
                                    Balance
                                </label>
                                <input type="text" id="balance" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance2" className="me-4">
                                    Balance
                                </label>
                                <input type="text" id="balance2" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="transport" className="me-4">
                                    Transport
                                </label>
                                <input type="text" id="transport" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="packetNo" className="me-4">
                                    Packet No.
                                </label>
                                <input type="text" id="packetNo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stateCode" className="me-4">
                                    State Code
                                </label>
                                <input type="text" id="stateCode" />
                            </div>
                            <div className="form-group otp-group">
                                <label htmlFor="otp">OTP</label>
                                <div className="otp-input">
                                    <input type="text" id="otp" />
                                    <button className="otp-button">OTP</button>
                                </div>
                            </div>
                            {/* Empty div for the last grid item to align with the grid */}
                            <div className="form-group"></div>
                            <div className="form-group"></div>
                        </div>
                    )}

                    {activeTab === 'others' && (
                        <div className="tab-content">
                            <div className="remarks-responsive-container mb-5">
                                <div className="remarks-input-group">
                                    <label htmlFor="remarks" className="me-4">
                                        Packet No.
                                    </label>
                                    <textarea id="remarks" rows={3} />
                                </div>
                            </div>
                            <div className="remarks-responsive-container">
                                <div className="remarks-input-group">
                                    <label htmlFor="remarks" className="me-4">
                                        Remark
                                    </label>
                                    <textarea id="remarks" rows={3} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'agent' && (
                        <div className="tab-content">
                            <div className="agent-commission-responsive-container">
                                <div className="form-group">
                                    <label htmlFor="agent" className="me-2">
                                        Agent
                                    </label>
                                    <select id="agent">
                                        <option>-Select Agent-</option>
                                        {/* Add agent options here */}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="commission" className="me-2">
                                        Commission
                                    </label>
                                    <input type="text" id="commission" />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'consignee' && (
                        <div className="tab-content">
                            <div className="consignee-details-responsive-container">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="consignee" className="me-2">
                                            Consignee
                                        </label>
                                        <input type="text" id="consignee" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idNo" className="me-4">
                                            ID No.
                                        </label>
                                        <input type="text" id="idNo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobileNo" className="me-4">
                                            Mobile No.
                                        </label>
                                        <input type="text" id="mobileNo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'challan' && (
                        <div className="tab-content">
                            <div className="consignee-details-responsive-container">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="consignee" className="me-2">
                                            Consignee
                                        </label>
                                        <input type="text" id="consignee" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="navigation-buttons col-span-full flex justify-end items-center space-x-4 mt-6">
                <button className="next-button" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );

    // Render Bill Stock step
    const renderBillDetail = () => (
        <div className="item-details-responsive-container">
            <h2>Bill Details</h2>

            <div className="item-input-section">
                <div className="input-row">
                    <div className="form-group checkbox-group">
                        <label>
                            <input type="checkbox" checked={isFree} onChange={(e) => setIsFree(e.target.checked)} />
                            Free
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="salesman">Salesman</label>
                        <input type="text" id="salesman" value={salesman} onChange={(e) => setSalesman(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="barCode">Bar Code</label>
                        <input type="text" id="barCode" value={barCode} onChange={(e) => setBarCode(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lookUp">Look Up</label>
                        <input type="text" id="lookUp" value={lookUp} onChange={(e) => setLookUp(e.target.value)} />
                    </div>
                    <div className="form-group item-description-group">
                        <label htmlFor="itemDescription">Item Description</label>
                        <input type="text" id="itemDescription" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>
                </div>

                <div className="input-row">
                    <div className="form-group tax-group">
                        <label htmlFor="taxPercent1">Tax(%)</label>
                        <input type="text" id="taxPercent1" value={taxPercent1} onChange={(e) => setTaxPercent1(e.target.value)} />
                    </div>
                    <div className="form-group tax-group">
                        <label htmlFor="taxPercent2">Tax(₹)</label>
                        <input type="text" id="taxPercent2" value={taxPercent2} onChange={(e) => setTaxPercent2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mrp">MRP</label>
                        <input type="text" id="mrp" value={mrp} onChange={(e) => setMrp(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salesPrice">Sales Price</label>
                        <input type="text" id="salesPrice" value={salesPrice} onChange={(e) => setSalesPrice(e.target.value)} />
                    </div>
                    <div className="form-group qty-group">
                        <label htmlFor="qty">Qty</label>
                        <input type="text" id="qty" value={qty} onChange={(e) => setQty(e.target.value)} />
                    </div>
                    <div className="form-group discount-group">
                        <label htmlFor="discPercent1">Disc(%)</label>
                        <input type="text" id="discPercent1" value={discPercent1} onChange={(e) => setDiscPercent1(e.target.value)} />
                    </div>
                    <div className="form-group discount-group">
                        <label htmlFor="discPercent2">Disc(₹)</label>
                        <input type="text" id="discPercent2" value={discPercent2} onChange={(e) => setDiscPercent2(e.target.value)} />
                    </div>
                    <div className="form-group amount-group">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="text"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            readOnly // Assuming amount is calculated
                        />
                    </div>
                    <div className="form-btn gap-2">
                        <button className="btn btn-primary">Add</button>
                        <button className="btn btn-danger">Remove</button>
                        <button className="btn btn-secondary">Clear</button>
                    </div>
                </div>
            </div>

            <div className="item-list-section">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>SNo</th>
                                <th>Barcode</th>
                                <th>Description</th>
                                <th>MRP</th>
                                <th>SalesPrice</th>
                                <th>Qty</th>
                                <th>Disc(%)</th>
                                <th>Disc(₹)</th>
                                <th>Amount</th>
                                <th>Salesman</th>
                                <th>Tax(%)</th>
                                <th>Tax(₹)</th>
                                <th>Category</th>
                                <th>CGST%</th>
                                <th>CGSTA</th>
                                <th>SGST%</th>
                                <th>SGSTA</th>
                                <th>CIGST%</th>
                                <th>CIGSTA</th>
                                <th>NRale</th>
                                <th>Add_Disc</th>
                                <th>Disc_Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.barCode}</td>
                                    <td>{item.itemDescription}</td>
                                    <td>{item.mrp}</td>
                                    <td>{item.salesPrice}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.discPercent1}</td>
                                    <td>{item.discPercent2}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.salesman}</td>
                                    <td>{item.taxPercent1}</td>
                                    <td>{item.taxPercent2}</td>
                                    <td>{item.category}</td>
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td>
                                        <button type="button" onClick={() => handleRemoveItem(index)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {items.length === 0 && (
                                <tr>
                                    <td colSpan={24} className="no-data">
                                        No data available in table
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    {/* Placeholder for pagination controls */}
                    Showing 0 to {items.length} of {items.length} entries
                </div>
            </div>

            <div className="item-list-section">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>SNo</th>
                                <th>Barcode</th>
                                <th>Description</th>
                                <th>MRP</th>
                                <th>SalesPrice</th>
                                <th>Qty</th>
                                <th>Disc(%)</th>
                                <th>Disc(₹)</th>
                                <th>Amount</th>
                                <th>Salesman</th>
                                <th>Tax(%)</th>
                                <th>Tax(₹)</th>
                                <th>Category</th>
                                <th>CGST%</th>
                                <th>CGSTA</th>
                                <th>SGST%</th>
                                <th>SGSTA</th>
                                <th>CIGST%</th>
                                <th>CIGSTA</th>
                                <th>NRale</th>
                                <th>Add_Disc</th>
                                <th>Disc_Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.barCode}</td>
                                    <td>{item.itemDescription}</td>
                                    <td>{item.mrp}</td>
                                    <td>{item.salesPrice}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.discPercent1}</td>
                                    <td>{item.discPercent2}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.salesman}</td>
                                    <td>{item.taxPercent1}</td>
                                    <td>{item.taxPercent2}</td>
                                    <td>{item.category}</td>
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td></td> {/* Placeholder */}
                                    <td>
                                        <button type="button" onClick={() => handleRemoveItem(index)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {items.length === 0 && (
                                <tr>
                                    <td colSpan={24} className="no-data">
                                        No data available in table
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    {/* Placeholder for pagination controls */}
                    Showing 0 to {items.length} of {items.length} entries
                </div>
            </div>

            <div className="navigation-buttons">
                <button className="previous-button" onClick={handlePrevious}>
                    &lt;
                </button>
                <button className="next-button" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );

    const taxRates = [0, 3, 5, 12, 18, 28]; // Include 0% for "Tax Value" row

    // Render item Details step
    const renderItemDetails = () => (
        <div className="master-details-tab-panel-responsive-container">
            <h2>Item Details</h2>
            <div className="content-area">
                <div className="tab-navigation">
                    <button className={`tab ${activeTab === 'masterDetails' ? 'active' : ''}`} onClick={() => handleTabClick('masterDetails')}>
                        Billing
                    </button>
                    <button className={`tab ${activeTab === 'others' ? 'active' : ''}`} onClick={() => handleTabClick('others')}>
                        Credit Note
                    </button>
                    <button className={`tab ${activeTab === 'agent' ? 'active' : ''}`} onClick={() => handleTabClick('agent')}>
                        GST Details
                    </button>
                    <button className={`tab ${activeTab === 'consignee' ? 'active' : ''}`} onClick={() => handleTabClick('consignee')}>
                        Other
                    </button>
                    <button className={`tab ${activeTab === 'order' ? 'active' : ''}`} onClick={() => handleTabClick('order')}>
                        GST Grid
                    </button>
                </div>

                <div className="tab-panel">
                    {activeTab === 'masterDetails' && (
                        <div className="payment-summary-responsive-container">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="itemQuantity" className="me-4">
                                        Item Quantity
                                    </label>
                                    <input type="text" id="itemQuantity" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cashAmount" className="me-4">
                                        Cash Amount
                                    </label>
                                    <input type="text" id="cashAmount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="totalAmount" className="me-4">
                                        Total Amount
                                    </label>
                                    <input type="text" id="totalAmount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="discount" className="me-4">
                                        Discount
                                    </label>
                                    <input type="number" id="discount" defaultValue={0} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="discountAmount" className="me-4">
                                        Discount Amount
                                    </label>
                                    <input type="text" id="discountAmount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="netAmount" className="me-4">
                                        Net Amount
                                    </label>
                                    <input type="text" id="netAmount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ccBank" className="me-4">
                                        CCBank
                                    </label>
                                    <input type="text" id="ccBank" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ccNo" className="me-4">
                                        CCNo
                                    </label>
                                    <input type="text" id="ccNo" defaultValue={0} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cardAmount" className="me-4">
                                        Card Amount
                                    </label>
                                    <input type="text" id="cardAmount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="chBank" className="me-4">
                                        CHBank
                                    </label>
                                    <input type="text" id="chBank" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="chequeNo" className="me-4">
                                        Cheque No.
                                    </label>
                                    <input type="text" id="chequeNo" defaultValue={0} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="chequeAmount" className="me-4">
                                        Cheque Amount
                                    </label>
                                    <input type="text" id="chequeAmount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inCash" className="me-4">
                                        In Cash
                                    </label>
                                    <input type="text" id="inCash" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="change" className="me-4">
                                        Change
                                    </label>
                                    <input type="text" id="change" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="amountPaid" className="me-4">
                                        Amount Paid
                                    </label>
                                    <input type="text" id="amountPaid" />
                                </div>
                                <div className="form-group rs-label">
                                    <label htmlFor="rs" className="me-4">
                                        Rs
                                    </label>
                                </div>
                                {/* Empty cells to align the grid */}
                                <div className="form-group"></div>
                                <div className="form-group"></div>
                            </div>
                            <div className="copyright">© 2025 - All Softzone</div>
                        </div>
                    )}

                    {activeTab === 'others' && (
                        <div className="payment-balance-responsive-container">
                            <h2>Payment Balance</h2>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="crnNo" className="me-4">
                                        CRN No.
                                    </label>
                                    <input type="text" id="crnNo" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="crnAmount" className="me-4">
                                        CRN Amount
                                    </label>
                                    <input type="text" id="crnAmount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="balance" className="me-4">
                                        Balance
                                    </label>
                                    <input type="text" id="balance" defaultValue={0} />
                                </div>
                            </div>
                            <div className="copyright">© 2025 - All Softzone</div>
                        </div>
                    )}

                    {activeTab === 'agent' && (
                        <div className="tax-details-responsive-container">
                            <div className="tax-table">
                                <div className="table-header">
                                    <div className="header-item">Tax Value</div>
                                    <div className="header-item">IGST</div>
                                    <div className="header-item">CGST</div>
                                    <div className="header-item">SGST</div>
                                </div>

                                <div className="table-row">
                                    <div className="row-item label">3%</div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="igst3Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="igstAmount3Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="cgst3Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="cgstAmount3Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="sgst3Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="sgstAmount3Percent" />
                                    </div>
                                </div>

                                <div className="table-row">
                                    <div className="row-item label">5%</div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="igst5Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="igstAmount5Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="cgst5Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="cgstAmount5Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="sgst5Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="sgstAmount5Percent" />
                                    </div>
                                </div>

                                <div className="table-row">
                                    <div className="row-item label">12%</div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="igst12Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="igstAmount12Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="cgst12Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="cgstAmount12Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="sgst12Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="sgstAmount12Percent" />
                                    </div>
                                </div>

                                <div className="table-row">
                                    <div className="row-item label">18%</div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="igst18Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="igstAmount18Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="cgst18Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="cgstAmount18Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="sgst18Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="sgstAmount18Percent" />
                                    </div>
                                </div>

                                <div className="table-row">
                                    <div className="row-item label">28%</div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="igst28Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="igstAmount28Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="cgst28Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="cgstAmount28Percent" />
                                    </div>
                                    <div className="row-item input-percent">
                                        <input type="text" id="sgst28Percent" />
                                        <span className="percent-sign">%</span>
                                        <span className="rs-label">Rs.</span>
                                    </div>
                                    <div className="row-item input-amount">
                                        <input type="text" id="sgstAmount28Percent" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'consignee' && (
                        <div className="amount-details-twocolumn-responsive-container">
                            <div className="form-grid">
                                <div className="column">
                                    <div className="form-group">
                                        <label htmlFor="afterDiscountAmount" className="me-4">
                                            After Disc. Amount:
                                        </label>
                                        <input type="text" id="afterDiscountAmount" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="roundOff" className="me-4">
                                            Round Off
                                        </label>
                                        <input type="text" id="roundOff" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="freightAmount" className="me-4">
                                            Freight Amount
                                        </label>
                                        <input type="text" id="freightAmount" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="grAmount" className="me-4">
                                            Gr Amount
                                        </label>
                                        <input type="text" id="grAmount" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mrpAmount" className="me-4">
                                            MRPAmount
                                        </label>
                                        <input type="text" id="mrpAmount" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dpcs" className="me-4">
                                            DPCS
                                        </label>
                                        <input type="text" id="dpcs" defaultValue={0} />
                                    </div>
                                    <div className="form-group other-charges-group">
                                        <label htmlFor="otherP" className="me-4">
                                            OtherP
                                        </label>
                                        <div className="other-input">
                                            <input type="text" id="otherP" />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="form-group">
                                        <label htmlFor="totalTaxAmount" className="me-4">
                                            T. AD. Tax + Amount:
                                        </label>
                                        <input type="text" id="totalTaxAmount" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="sgst" className="me-4">
                                            SGSt
                                        </label>
                                        <input type="text" id="sgst" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="igst" className="me-4">
                                            IGst
                                        </label>
                                        <input type="text" id="igst" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="saving" className="me-4">
                                            Saving
                                        </label>
                                        <input type="text" id="saving" defaultValue={0} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rpcs" className="me-4">
                                            RPCS
                                        </label>
                                        <input type="text" id="rpcs" defaultValue={0} />
                                    </div>
                                    {/* Empty form-group for alignment if needed */}
                                    <div className="form-group"></div>
                                    <div className="form-group"></div>
                                </div>
                            </div>
                            <div className="copyright">© 2025 - All Softzone</div>
                        </div>
                    )}

                    {activeTab === 'challan' && (
                        <div className="tax-details-responsive-container">
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Tax Value</th>
                                            <th></th> {/* Empty for alignment */}
                                            <th>IGST</th>
                                            <th></th>
                                            <th>CGST</th>
                                            <th></th>
                                            <th>SGST</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {taxRates.map((rate, index) => (
                                            <tr key={index}>
                                                <td>{index === 0 ? <input type="text" id="taxValue" placeholder="Enter Value" /> : `${rate}%`}</td>
                                                <td>{index > 0 && '%'}</td>
                                                <td>
                                                    <input type="text" id={`igstPercent_${rate}`} placeholder="%" readOnly={index === 0} />
                                                </td>
                                                <td className="rs-cell">
                                                    Rs. <input type="text" id={`igstAmount_${rate}`} placeholder="Amount" readOnly={index === 0} />
                                                </td>
                                                <td>
                                                    <input type="text" id={`cgstPercent_${rate}`} placeholder="%" readOnly={index === 0} />
                                                </td>
                                                <td className="rs-cell">
                                                    Rs. <input type="text" id={`cgstAmount_${rate}`} placeholder="Amount" readOnly={index === 0} />
                                                </td>
                                                <td>
                                                    <input type="text" id={`sgstPercent_${rate}`} placeholder="%" readOnly={index === 0} />
                                                </td>
                                                <td className="rs-cell">
                                                    Rs. <input type="text" id={`sgstAmount_${rate}`} placeholder="Amount" readOnly={index === 0} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="navigation-buttons col-span-full flex justify-end items-center space-x-4 mt-6">
                <button className="previous-button" onClick={handlePrevious}>
                    &lt;
                </button>
                <button className="next-button" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );

    // Confirm page
    const renderConfirmDetails = () => (
        <div>
            <div className="company-details-responsive-container">
                <h2 className="bg-">Confirm Details</h2>

                <div className="form-group">
                    <label htmlFor="companyName" className="me-4">
                        Company Name
                    </label>
                    <input type="text" id="companyName" placeholder="Enter Company Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="companyAddress" className="me-4">
                        Company Address
                    </label>
                    <textarea id="companyAddress" placeholder="Enter Company Address" />
                </div>
            </div>
            <div className="navigation-buttons">
                <button className="previous-button" onClick={handlePrevious}>
                    &lt;
                </button>
            </div>
        </div>
    );

    // Render stepper
    const renderStepper = () => {
        return (
            <div className="flex items-center justify-between text-center mb-6 select-none">
                {/* Step 1 */}
                <div className="flex-1 relative">
                    <div className={`border-t-2 absolute top-1/2 left-0 right-0 -z-10 ${activeStep >= 1 ? 'border-blue-500' : 'border-gray-300'}`}></div>
                    <div className={`inline-flex flex-col items-center justify-center w-8 h-8 rounded-full ${activeStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} mx-auto`}>1</div>
                    <div className={`mt-1 text-xs ${activeStep >= 1 ? 'text-blue-500 font-medium' : 'text-gray-500'}`}>Master Details</div>
                </div>
                {/* Step 2 */}
                <div className="flex-1 relative">
                    <div className={`border-t-2 absolute top-1/2 left-0 right-0 -z-10 ${activeStep >= 2 ? 'border-blue-500' : 'border-gray-300'}`}></div>
                    <div className={`inline-flex flex-col items-center justify-center w-8 h-8 rounded-full ${activeStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} mx-auto`}>2</div>
                    <div className={`mt-1 text-xs ${activeStep >= 2 ? 'text-blue-500 font-medium' : 'text-gray-500'}`}>Bill Details</div>
                </div>
                {/* Step 3 */}
                <div className="flex-1 relative">
                    <div className={`border-t-2 absolute top-1/2 left-0 right-0 -z-10 ${activeStep >= 3 ? 'border-blue-500' : 'border-gray-300'}`}></div>
                    <div className={`inline-flex flex-col items-center justify-center w-8 h-8 rounded-full ${activeStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} mx-auto`}>3</div>
                    <div className={`mt-1 text-xs ${activeStep >= 3 ? 'text-blue-500 font-medium' : 'text-gray-500'}`}>Item Details</div>
                </div>
                {/* Step 4 */}
                <div className="flex-1 relative">
                    <div className={`border-t-2 absolute top-1/2 left-0 right-0 -z-10 ${activeStep >= 4 ? 'border-blue-500' : 'border-gray-300'}`}></div>
                    <div className={`inline-flex flex-col items-center justify-center w-8 h-8 rounded-full ${activeStep >= 4 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} mx-auto`}>4</div>
                    <div className={`mt-1 text-xs ${activeStep >= 4 ? 'text-blue-500 font-medium' : 'text-gray-500'}`}>Confirm Details</div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white text-black font-sans min-h-screen">
            {renderStepper()}

            {activeStep === 1 && renderMasterDetails()}
            {activeStep === 2 && renderBillDetail()}
            {activeStep === 3 && renderItemDetails()}
            {activeStep === 4 && renderConfirmDetails()}

            <footer className="max-w-5xl mx-auto px-4 py-4 text-xs text-black select-none">© 2025 - i-Softzone</footer>
        </div>
    );
};

export default SalesReturn;
