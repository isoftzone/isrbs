import React, { useState } from 'react';

const ItemSettings = () => {
    const [activeTab, setActiveTab] = useState('Item Master');

    const [formData, setFormData] = useState({
        product: '',
        brand: '',
        sColor: '',
        employee: '',
        color: '',
        style: '',
        size: '',
        sGroup: '',
        group: '',
        gender: '',
        material: '',
        buyer: '',
        category: '',
        company: '',
        season: '',
        unit: '',
        packing: '',
        section: '',
        status: '',
        boxSize: '',
        hsnCode: '',
        sCategory: '',
        barcode: '',
        itemName: '',
        rate: '',
        tax: '',
        purPrice: '',
        markUp: '',
        mrp: '',
        markDown: '',
        salePrice: '',
        minQty: '',
        maxQty: '',
        reorderQty: '',
        dealer: '',
        expiryDays: '',
        shelfNo: '',
        mode: '',
        stateCode: '',
        balance: '',
        billNo: '',
        billDate: '',
        orderNo: '',
        orderDate: '',
        lrNo: '',
        lrDate: '',
        dcNo: '',
        dcDate: '',
        transport: '',
        remark: '',
        customer: '',
        helper: '',
        qty: '',
        discountRs: '',
        discountPercent: '',
        narration: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        //  Handle form submission logic here
    };

    const handleCancel = () => {
        console.log('Form canceled');
        //  Handle form cancel logic here
    };

    const handleClose = () => {
        console.log('Form closed');
        // Handle form close logic here
    };

    const inputGroups = [
        { label: 'Product', name: 'product' },
        { label: 'Brand', name: 'brand' },
        { label: 'S Color', name: 'sColor' },
        { label: 'Color', name: 'color' },
        { label: 'Style', name: 'style' },
        { label: 'Size', name: 'size' },
        { label: 'S. Group', name: 'sGroup' },
        { label: 'Group', name: 'group' },
        { label: 'Gender', name: 'gender' },
        { label: 'Material', name: 'material' },
        { label: 'Buyer', name: 'buyer' },
        { label: 'Category', name: 'category' },
        { label: 'Company', name: 'company' },
        { label: 'Season', name: 'season' },
        { label: 'Unit', name: 'unit' },
        { label: 'Packing', name: 'packing' },
        { label: 'Section', name: 'section' },
        { label: 'Status', name: 'status' },
        { label: 'Box Size', name: 'boxSize' },
        { label: 'HSN Code', name: 'hsnCode' },
        { label: 'S. Category', name: 'sCategory' },
        { label: 'Barcode', name: 'barcode' },
        { label: 'Item Name', name: 'itemName' },
        { label: 'Rate', name: 'rate' },
        { label: 'Tax', name: 'tax' },
        { label: 'Pur. Price', name: 'purPrice' },
        { label: 'Mark Up', name: 'markUp' },
        { label: 'MRP', name: 'mrp' },
        { label: 'Mark Down', name: 'markDown' },
        { label: 'Sale Price', name: 'salePrice' },
        { label: 'Min Qty', name: 'minQty' },
        { label: 'Max Qty', name: 'maxQty' },
        { label: 'Reorder Qty', name: 'reorderQty' },
        { label: 'Dealer', name: 'dealer' },
        { label: 'Expiry Days', name: 'expiryDays' },
        { label: 'Shelf No.', name: 'shelfNo' },
    ];

    const renderFormFields = () => {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {inputGroups.map((group) => (
                    <div key={group.name} className="flex flex-col">
                        <label htmlFor={group.name} className="text-sm font-medium text-gray-700">
                            {group.label}
                        </label>
                        <div className="flex items-center">
                            <select
                                id={group.name}
                                name={group.name}
                                value={formData[group.name as keyof typeof formData]}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                            >
                                <option value="">Select</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                {/* Add more options as needed */}
                            </select>
                            <input
                                type="text"
                                name={group.name}
                                value={formData[group.name as keyof typeof formData]}
                                onChange={handleChange}
                                placeholder={`Enter ${group.label}`}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen flex justify-center items-start">
            <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
                <div className="flex border-b">
                    <button
                        className={`px-4 py-2 text-sm font-medium ${activeTab === 'Item Master' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('Item Master')}
                    >
                        Item Master
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium ${activeTab === 'Purchase' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('Purchase')}
                    >
                        Purchase
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium ${activeTab === 'Sales' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('Sales')}
                    >
                        Sales
                    </button>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                    {activeTab === 'Item Master' && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Item Master</h2>
                            {renderFormFields()}
                        </div>
                    )}
                    {activeTab === 'Purchase' && (
                        <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen flex justify-center items-start">
                            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-2xl">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Delivery Details</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Mode and Dealer */}
                                    <div className="flex flex-col">
                                        <label htmlFor="mode" className="text-sm font-medium text-gray-700">
                                            Mode
                                        </label>
                                        <select
                                            id="mode"
                                            name="mode"
                                            value={formData.mode}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="mode"
                                            name="mode"
                                            value={formData.mode}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="mode" className="text-sm font-medium text-gray-700">
                                            Dealer
                                        </label>
                                        <select
                                            id="mode"
                                            name="mode"
                                            value={formData.dealer}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="mode"
                                            name="mode"
                                            value={formData.dealer}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                    {/* State Code and Balance */}
                                    <div className="flex flex-col">
                                        <label htmlFor="stateCode" className="text-sm font-medium text-gray-700">
                                            State Code
                                        </label>
                                        <select
                                            id="stateCode"
                                            name="stateCode"
                                            value={formData.stateCode}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="stateCode"
                                            name="stateCode"
                                            value={formData.stateCode}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="balance" className="text-sm font-medium text-gray-700">
                                            Balance
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.balance}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.balance}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                    {/* Bill No. and Bill Date */}
                                    <div className="flex flex-col">
                                        <label htmlFor="billNo" className="text-sm font-medium text-gray-700">
                                            Bill No.
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.billNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.billNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="billDate" className="text-sm font-medium text-gray-700">
                                            Bill Date
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.billDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.billDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    {/* Order No. and Order Date */}
                                    <div className="flex flex-col">
                                        <label htmlFor="orderNo" className="text-sm font-medium text-gray-700">
                                            Order No.
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.orderNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.orderNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="orderDate" className="text-sm font-medium text-gray-700">
                                            Order Date
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.orderDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.orderDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    {/* LR No. and LR Date */}
                                    <div className="flex flex-col">
                                        <label htmlFor="lrNo" className="text-sm font-medium text-gray-700">
                                            LR No.
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.lrNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.lrNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="lrDate" className="text-sm font-medium text-gray-700">
                                            LR Date
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.lrDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.lrDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    {/* DC No. and DC Date */}
                                    <div className="flex flex-col">
                                        <label htmlFor="dcNo" className="text-sm font-medium text-gray-700">
                                            DC No.
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.dcNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.dcNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="dcDate" className="text-sm font-medium text-gray-700">
                                            DC Date
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.dcDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.dcDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    {/* Transport and Remark */}
                                    <div className="flex flex-col">
                                        <label htmlFor="transport" className="text-sm font-medium text-gray-700">
                                            Transport
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.transport}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.transport}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="remark" className="text-sm font-medium text-gray-700">
                                            Remark
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.remark}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.remark}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'Sales' && (
                        <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen flex justify-center items-start">
                            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-2xl">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Delivery Details</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Mode and Dealer */}
                                    <div className="flex flex-col">
                                        <label htmlFor="mode" className="text-sm font-medium text-gray-700">
                                            Mode
                                        </label>
                                        <select
                                            id="mode"
                                            name="mode"
                                            value={formData.mode}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="mode"
                                            name="mode"
                                            value={formData.mode}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="mode" className="text-sm font-medium text-gray-700">
                                            Customer
                                        </label>
                                        <select
                                            id="mode"
                                            name="mode"
                                            value={formData.customer}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="mode"
                                            name="mode"
                                            value={formData.customer}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                    {/* State Code and Balance */}
                                    <div className="flex flex-col">
                                        <label htmlFor="stateCode" className="text-sm font-medium text-gray-700">
                                            State Code
                                        </label>
                                        <select
                                            id="stateCode"
                                            name="stateCode"
                                            value={formData.stateCode}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="stateCode"
                                            name="stateCode"
                                            value={formData.stateCode}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="balance" className="text-sm font-medium text-gray-700">
                                            Transport
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.transport}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.transport}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                    {/* Bill No. and Bill Date */}
                                    <div className="flex flex-col">
                                        <label htmlFor="billNo" className="text-sm font-medium text-gray-700">
                                            Order No.
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.orderNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.orderNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="billDate" className="text-sm font-medium text-gray-700">
                                            Order Date
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.orderDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.orderDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    {/* Order No. and Order Date */}
                                    <div className="flex flex-col">
                                        <label htmlFor="orderNo" className="text-sm font-medium text-gray-700">
                                            LR No.
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.lrNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.lrNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="orderDate" className="text-sm font-medium text-gray-700">
                                            LR Date
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.lrDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.lrDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    {/* LR No. and LR Date */}
                                    <div className="flex flex-col">
                                        <label htmlFor="lrNo" className="text-sm font-medium text-gray-700">
                                            DC No.
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.dcNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.dcNo}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="lrDate" className="text-sm font-medium text-gray-700">
                                            DC Date
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.dcDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.dcDate}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    {/* DC No. and DC Date */}
                                    <div className="flex flex-col">
                                        <label htmlFor="dcNo" className="text-sm font-medium text-gray-700">
                                            Remark
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.remark}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.remark}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="dcDate" className="text-sm font-medium text-gray-700">
                                            Employee
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.employee}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.employee}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>

                                    {/* Transport and Remark */}
                                    <div className="flex flex-col">
                                        <label htmlFor="transport" className="text-sm font-medium text-gray-700">
                                            Helper
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.helper}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.helper}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="remark" className="text-sm font-medium text-gray-700">
                                            Sale Price
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.salePrice}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.salePrice}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="remark" className="text-sm font-medium text-gray-700">
                                            Narration
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.narration}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.narration}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="remark" className="text-sm font-medium text-gray-700">
                                            QTY
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.qty}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.qty}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="remark" className="text-sm font-medium text-gray-700">
                                            MRP
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.mrp}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.mrp}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="remark" className="text-sm font-medium text-gray-700">
                                            Discount (%)
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.discountPercent}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.discountPercent}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="remark" className="text-sm font-medium text-gray-700">
                                            Discount (Rs)
                                        </label>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.discountRs}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>
                                        <select
                                            id="balance"
                                            name="balance"
                                            value={formData.discountRs}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            {/* Add more options as needed */}
                                        </select>{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-6 flex justify-center space-x-4 p-4">
                    <button onClick={handleSubmit} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Update
                    </button>
                    <button onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Cancel
                    </button>
                    <button onClick={handleClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemSettings;
