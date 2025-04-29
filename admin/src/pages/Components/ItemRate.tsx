import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import default styles

interface ItemRateCalculationTabsPanelProps {
    title: string;
}

const ItemRate: React.FC<ItemRateCalculationTabsPanelProps> = ({ title }) => {
    const [calculationMethod, setCalculationMethod] = useState<'rate' | 'mrp' | 'salePrice'>('rate');

    const handleCalculationMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCalculationMethod(event.target.value as 'rate' | 'mrp' | 'salePrice');
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Selected Calculation Method:', calculationMethod);
        // Implement your calculation logic here
    };

    const [beforeDiscountCal, setBeforeDiscountCal] = useState<'cal1' | 'cal2' | 'cal3'>('cal1');
    const [afterDiscountCal, setAfterDiscountCal] = useState<'cal1' | 'cal2' | 'cal3'>('cal1');

    const handleBeforeDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBeforeDiscountCal(event.target.value as 'cal1' | 'cal2');
    };

    const [stockValidation, setStockValidation] = useState<'enable' | 'disable'>('enable');

    const handleStockValidationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStockValidation(event.target.value as 'enable' | 'disable');
    };

    const handleAfterDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAfterDiscountCal(event.target.value as 'cal1' | 'cal2');
    };

    const [salesOrderValidation, setSalesOrderValidation] = useState<'enable' | 'disable'>('enable');

    const handleSalesOrderValidationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSalesOrderValidation(event.target.value as 'enable' | 'disable');
    };

    const [lookupOption, setLookupOption] = useState<'onKeyPress' | 'onLeave'>('onKeyPress');
    const [mrpToSalePrice, setMrpToSalePrice] = useState<'percentage' | 'rupees'>('percentage');
    const [pluginMinus, setPluginMinus] = useState<boolean>(false);
    const [customerShowInList, setCustomerShowInList] = useState<'onlyName' | 'nameMobileNo' | 'nameMobileNoCity'>('onlyName');
    const [stockVerificationTypes, setStockVerificationTypes] = useState<string[]>(Array(5).fill(''));
    const [itemDiscount, setItemDiscount] = useState<boolean>(true);

    const handleLookupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLookupOption(event.target.value as 'onKeyPress' | 'onLeave');
    };

    const handleMrpToSalePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMrpToSalePrice(event.target.value as 'percentage' | 'rupees');
    };

    const handlePluginMinusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPluginMinus(event.target.checked);
    };

    const handleCustomerShowInListChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomerShowInList(event.target.value as 'onlyName' | 'nameMobileNo' | 'nameMobileNoCity');
    };

    const handleStockVerificationTypeChange = (index: number, value: string) => {
        const newTypes = [...stockVerificationTypes];
        newTypes[index] = value;
        setStockVerificationTypes(newTypes);
    };

    const handleItemDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemDiscount(event.target.value === 'enable');
    };

    const [netAmountRoundOff, setNetAmountRoundOff] = useState<'enable' | 'disable'>('enable');
    const [billDiscount, setBillDiscount] = useState<string>('');

    const handleNetAmountRoundOffChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNetAmountRoundOff(event.target.value as 'enable' | 'disable');
    };

    const handleBillDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBillDiscount(event.target.value);
    };

    const [fillAutoCashInSales, setFillAutoCashInSales] = useState<'enable' | 'disable'>('disable');
    const [fillAutoCashInSalesCombined, setFillAutoCashInSalesCombined] = useState<'enable' | 'disable'>('disable');
    const [clearMasterWhenItemAdd, setClearMasterWhenItemAdd] = useState<'enable' | 'disable'>('disable');
    const [clearItemNameAndRateWhenItemAdd, setClearItemNameAndRateWhenItemAdd] = useState<'enable' | 'disable'>('disable');
    const [inPurchaseBarcodeScanning, setInPurchaseBarcodeScanning] = useState<'enable' | 'disable'>('disable');

    const handleRadioChange = (setter: React.Dispatch<React.SetStateAction<'enable' | 'disable'>>, value: 'enable' | 'disable') => {
        setter(value);
    };

    return (
        <div className="item-rate-calculation-tabs-panel-container">
            <div className="header">
                <h2>Item Rate Calculation</h2>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Item Rate Calculation</Tab>
                    <Tab>MRP</Tab>
                    <Tab>Sale Price</Tab>
                    <Tab>Sale GST</Tab>
                    <Tab>Purchase GST</Tab>
                    <Tab>Tax Slab</Tab>
                    <Tab>Stock</Tab>
                    <Tab>Sales</Tab>
                    <Tab>Delivery Challan</Tab>
                    <Tab>General</Tab>
                    <Tab>Other</Tab>
                </TabList>

                <TabPanel>
                    <div className="calculation-form-panel">
                        <form onSubmit={handleSubmit} className="calculation-form">
                            <div className="calculation-option">
                                <label>
                                    <input type="radio" value="rate" checked={calculationMethod === 'rate'} onChange={handleCalculationMethodChange} />
                                    <span className="option-title">By Rate</span>
                                    <span className="formula">Rate + Tax - Fix Price - Mark Up % - MRP - Mark Up On Sale Price</span>
                                </label>
                            </div>

                            <div className="calculation-option">
                                <label>
                                    <input type="radio" value="mrp" checked={calculationMethod === 'mrp'} onChange={handleCalculationMethodChange} />
                                    <span className="option-title">By MRP</span>
                                    <span className="formula">Rate + Tax - Fix Price - Mark Up % - MRP - Mark Up On Sale Price</span>
                                </label>
                            </div>

                            <div className="calculation-option">
                                <label>
                                    <input type="radio" value="salePrice" checked={calculationMethod === 'salePrice'} onChange={handleCalculationMethodChange} />
                                    <span className="option-title">By Sale Price</span>
                                    <span className="formula">MRP - Mark Up % - Sale Price - MRP - Mark Up On Sale Price - Fix Price - Tax - Rate</span>
                                </label>
                            </div>

                            <div className="button-container">
                                <button type="submit" className="save-button">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* Content for MRP Tab */}
                    {/* <p>Content for MRP settings...</p> */}
                    <Tabs>
                        <TabList>
                            <Tab>MRP</Tab>
                            <Tab>Rouind Off Calculation</Tab>
                        </TabList>

                        <TabPanel>
                            <div>
                                <div className="grd_res d-flex">
                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 1</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    Rate <span className="text-xs text-gray-600">/100</span>
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Tax(%) <span className="text-xs text-gray-600">/5</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Tax(Rs) <span className="text-xs text-gray-600">/5</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    Purchase Price <span className="text-xs text-gray-600">/105</span>
                                                </span>
                                                <span>;</span>
                                                <span>
                                                    ( Purchase Price <span className="text-xs text-gray-600">/105</span> )
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Mark up(%) <span className="text-xs text-gray-600">/30</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Mark up(Rs) <span className="text-xs text-gray-600">/31.5</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    MRP <span className="text-xs text-gray-600">/136.5</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 2</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    (Rate <span className="text-xs text-gray-600">/105</span> )
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Mark up(%) <span className="text-xs text-gray-600">/30</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Mark up(Rs) <span className="text-xs text-gray-600">/30</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    MRP <span className="text-xs text-gray-600">/130</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 3</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    ( Rate <span className="text-xs text-gray-600">/100</span> )
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Mark down(%) <span className="text-xs text-gray-600">/30</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Mark down(Rs) <span className="text-xs text-gray-600">/43</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    MRP <span className="text-xs text-gray-600">/143</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 4</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    Rate <span className="text-xs text-gray-600">/100</span>
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Tax(%) <span className="text-xs text-gray-600">/5</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Tax(Rs) <span className="text-xs text-gray-600">/5</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    Purchase Price <span className="text-xs text-gray-600">/105</span>
                                                </span>
                                                <span>;</span>
                                                <span>
                                                    ( Purchase Price <span className="text-xs text-gray-600">/105</span> )
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Mark down(%) <span className="text-xs text-gray-600">/30</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Mark down(Rs) <span className="text-xs text-gray-600">/45</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    MRP <span className="text-xs text-gray-600">/150</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 5</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    Rate <span className="text-xs text-gray-600">/100</span>
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Tax(%) <span className="text-xs text-gray-600">/5</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Tax(Rs) <span className="text-xs text-gray-600">/5</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    Purchase Price <span className="text-xs text-gray-600">/105</span>
                                                </span>
                                                <span>;</span>
                                                <span>
                                                    ( Purchase Price <span className="text-xs text-gray-600">/105</span> )
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Mark up(%) <span className="text-xs text-gray-600">/30</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Mark up(Rs) <span className="text-xs text-gray-600">/31.5</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    MRP <span className="text-xs text-gray-600">/136.5</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 6</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    ( Rate <span className="text-xs text-gray-600">/100</span> )
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Mark up(%) <span className="text-xs text-gray-600">/30</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Mark up(Rs) <span className="text-xs text-gray-600">/30</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    MRP <span className="text-xs text-gray-600">/130</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 7</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    Rate <span className="text-xs text-gray-600">/100</span>
                                                </span>
                                                <span>+</span>
                                                <span>(</span>
                                                <span>
                                                    Tax(%) <span className="text-xs text-gray-600">/5</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Tax(Rs) <span className="text-xs text-gray-600">/5</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    Purchase Price <span className="text-xs text-gray-600">/105</span>
                                                </span>
                                                <span>;</span>

                                                <span>
                                                    MRP <span className="text-xs text-gray-600">/150</span>
                                                </span>
                                                <span>(Manual MRP)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="calculation-form-panel">
                                <form onSubmit={handleSubmit} className="calculation-form">
                                    <h2>Round Off Calculation</h2>
                                    <div className="calculation-option">
                                        <label>
                                            <input type="radio" value="rate" checked={calculationMethod === 'rate'} onChange={handleCalculationMethodChange} />
                                            <span className="option-title">Cal 1</span>
                                            <span className="formula">Sales Price = No Round Off</span>
                                        </label>
                                    </div>

                                    <div className="calculation-option">
                                        <label>
                                            <input type="radio" value="mrp" checked={calculationMethod === 'mrp'} onChange={handleCalculationMethodChange} />
                                            <span className="option-title">Cal 2</span>
                                            <span className="formula">Sales Price = Only Decimal Round Off ; EX : (RS. 100.50 = 100 And 100.51 = 101) </span>
                                        </label>
                                    </div>

                                    <div className="calculation-option">
                                        <label>
                                            <input type="radio" value="salePrice" checked={calculationMethod === 'salePrice'} onChange={handleCalculationMethodChange} />
                                            <span className="option-title">Cal 3</span>
                                            <span className="formula">Sales Price = Round Off ; Where (RS. 100 to 105 = 100 And RS. 105 to 110 = 110)</span>
                                        </label>
                                    </div>

                                    <div className="calculation-option">
                                        <label>
                                            <input type="radio" value="salePrice" checked={calculationMethod === 'salePrice'} onChange={handleCalculationMethodChange} />
                                            <span className="option-title">Cal 4</span>
                                            <span className="formula">Sales Price = Round Off ; Where (RS. 100.01 to RS. 109.99 = 110)</span>
                                        </label>
                                    </div>

                                    <div className="button-container">
                                        <button type="submit" className="save-button">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    {/* Content for Sale Price Tab */}
                    {/* <p>Content for Sale Price settings...</p> */}
                    <Tabs>
                        <TabList>
                            <Tab>MRP</Tab>
                            <Tab>Rouind Off Calculation</Tab>
                        </TabList>

                        <TabPanel>
                        <div>
                                <div className="grd_res d-flex">
                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 1</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    MRP = Sales Price
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 2</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    (MRP <span className="text-xs text-gray-600">/105</span> )
                                                </span>
                                                <span>-</span>
                                                <span>(</span>
                                                <span>
                                                    S.P. up(%) <span className="text-xs text-gray-600">/10</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    S.P. up(Rs) <span className="text-xs text-gray-600">/10</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    Sales Price <span className="text-xs text-gray-600">/90</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 3</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    MRP <span className="text-xs text-gray-600">/100</span>
                                                </span>
                                                <span>-</span>
                                                <span>(</span>
                                                <span>
                                                    S.P. Up(%) <span className="text-xs text-gray-600">/1.1</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                S.P. Up(Rs) <span className="text-xs text-gray-600">/90.11</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    Sales Price <span className="text-xs text-gray-600">/90.91</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-md shadow-sm w-full max-w-5xl mx-auto mb-6">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                            {/* Radio Button and Label */}
                                            <div className="flex items-center mr-4">
                                                <input type="radio" checked readOnly className="mr-2" />
                                                <span className="font-semibold text-lg">Cal 4</span>
                                            </div>

                                            {/* Example Section */}
                                            <div className="text-sm text-gray-500">Ex:</div>
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                                <span>
                                                    ( Rate <span className="text-xs text-gray-600">/100</span> )
                                                </span>
                                                <span>-</span>
                                                <span>(</span>
                                                <span>
                                                    Mark down(%) <span className="text-xs text-gray-600">/30</span>
                                                </span>
                                                <span>Or</span>
                                                <span>
                                                    Mark down(Rs) <span className="text-xs text-gray-600">/45</span>
                                                </span>
                                                <span>)</span>
                                                <span>=</span>
                                                <span>
                                                    MRP <span className="text-xs text-gray-600">/150</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {' '}
                            <div className="calculation-form-panel">
                                <form onSubmit={handleSubmit} className="calculation-form">
                                    <h2>Round Off Calculation</h2>
                                    <div className="calculation-option">
                                        <label>
                                            <input type="radio" value="rate" checked={calculationMethod === 'rate'} onChange={handleCalculationMethodChange} />
                                            <span className="option-title">Cal 1</span>
                                            <span className="formula">Sales Price = No Round Off</span>
                                        </label>
                                    </div>

                                    <div className="calculation-option">
                                        <label>
                                            <input type="radio" value="mrp" checked={calculationMethod === 'mrp'} onChange={handleCalculationMethodChange} />
                                            <span className="option-title">Cal 2</span>
                                            <span className="formula">Sales Price = Only Decimal Round Off ; EX : (RS. 100.50 = 100 And 100.51 = 101)</span>
                                        </label>
                                    </div>

                                    <div className="calculation-option">
                                        <label>
                                            <input type="radio" value="salePrice" checked={calculationMethod === 'salePrice'} onChange={handleCalculationMethodChange} />
                                            <span className="option-title">Cal 3</span>
                                            <span className="formula">Sales Price = Round Off ; Where (RS. 100 to 105 = 100 And RS. 105 to 110 = 110)</span>
                                        </label>
                                    </div>

                                    <div className="calculation-option">
                                        <label>
                                            <input type="radio" value="salePrice" checked={calculationMethod === 'salePrice'} onChange={handleCalculationMethodChange} />
                                            <span className="option-title">Cal 4</span>
                                            <span className="formula">Sales Price = Round Off ; Where (RS. 100.01 to RS. 109.99 = 110)</span>
                                        </label>
                                    </div>

                                    <div className="button-container">
                                        <button type="submit" className="save-button">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    {/* Content for Tax Slab Tab */}
                    {/* <p>Content for Tax Slab settings...</p> */}
                    <h3>Before Discount</h3>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal1" checked={beforeDiscountCal === 'cal1'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 1</span>
                            <span className="formula">Excluding GST — Sales Price + Tax = Amount</span>
                        </label>
                    </div>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal2" checked={beforeDiscountCal === 'cal2'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 2</span>
                            <span className="formula">Including GST — Sales Price = Amount </span>
                        </label>
                    </div>
                    <h3>After Discount</h3>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal1" checked={beforeDiscountCal === 'cal1'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 1</span>
                            <span className="formula">Excluding GST — Sales Price + Tax = Amount</span>
                        </label>
                    </div>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal2" checked={beforeDiscountCal === 'cal2'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 2</span>
                            <span className="formula">Including GST — Sales Price = Amount </span>
                        </label>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="save-button">
                            Save
                        </button>
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* Content for Purchase GST Tab */}
                    {/* <p>Content for Purchase GST settings...</p> */}
                    <h3>Before Discount</h3>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal1" checked={beforeDiscountCal === 'cal1'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 1</span>
                            <span className="formula">Excluding GST — Rate + Tax = Amount</span>
                        </label>
                    </div>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal2" checked={beforeDiscountCal === 'cal2'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 2</span>
                            <span className="formula">Including GST — Purchase Price = Amount</span>
                        </label>
                    </div>
                    <h3>After Discount</h3>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal1" checked={beforeDiscountCal === 'cal1'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 1</span>
                            <span className="formula">Excluding GST — Rate + Tax = Amount</span>
                        </label>
                    </div>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal2" checked={beforeDiscountCal === 'cal2'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 2</span>
                            <span className="formula">Including GST — Purchase Price = Amount</span>
                        </label>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="save-button">
                            Save
                        </button>
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* <div className="tax-calculation-section">
                        <h3>{title}</h3>
                        <label>Readyrate</label>
                        <div className="item-row">
                            <div className="input-group">
                                <label htmlFor={`${title}-readyrate-rate`}>Rate</label>
                                <input type="number" id={`${title}-readyrate-rate`} />
                            </div>
                            <div className="input-group">
                                <label htmlFor={`${title}-readyrate-upto-tax`}>Upto(&lt;=)% Tax</label>
                                <input type="number" id={`${title}-readyrate-upto-tax`} />
                            </div>
                            <div className="input-group">
                                <label htmlFor={`${title}-readyrate-above-tax`}>Above(&gt;)% Tax</label>
                                <input type="number" id={`${title}-readyrate-above-tax`} />
                            </div>
                        </div>
                        <div className="item-row">
                            <div className="input-group">
                                <label htmlFor={`${title}-footwear-rate`}>Rate</label>
                                <input type="number" id={`${title}-footwear-rate`} />
                            </div>
                            <div className="input-group">
                                <label htmlFor={`${title}-footwear-upto-tax`}>Upto(&lt;=)% Tax</label>
                                <input type="number" id={`${title}-footwear-upto-tax`} />
                            </div>
                            <div className="input-group">
                                <label htmlFor={`${title}-footwear-above-tax`}>Above(&gt;)% Tax</label>
                                <input type="number" id={`${title}-footwear-above-tax`} />
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="save-button">
                            Save
                        </button>
                    </div> */}

                    <div className="tax-calculation-section-responsive-container">
                        <h3 className="section-title">Excluding GST Without Discount</h3>
                        <div className="item-row">
                            <label className="item-label">Readyrate</label>
                            <div className="input-group">
                                <label htmlFor="readyrate-rate">Rate</label>
                                <input type="number" id="readyrate-rate" defaultValue={1000} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="readyrate-upto-tax">Upto(&lt;=)% Tax</label>
                                <input type="number" id="readyrate-upto-tax" defaultValue={5} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="readyrate-above-tax">Above(&gt;)% Tax</label>
                                <input type="number" id="readyrate-above-tax" defaultValue={12} />
                            </div>
                        </div>
                        <div className="item-row">
                            <label className="item-label">Footwear</label>
                            <div className="input-group">
                                <label htmlFor="footwear-rate">Rate</label>
                                <input type="number" id="footwear-rate" defaultValue={500} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="footwear-upto-tax">Upto(&lt;=)% Tax</label>
                                <input type="number" id="footwear-upto-tax" defaultValue={5} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="footwear-above-tax">Above(&gt;)% Tax</label>
                                <input type="number" id="footwear-above-tax" defaultValue={18} />
                            </div>
                        </div>
                        {/* You can add a Save button or other controls here if needed */}
                    </div>
                    <div className="tax-calculation-section-responsive-container">
                        <h3 className="section-title"> Including GST Without Discount---- </h3>
                        <div className="item-row">
                            <label className="item-label">Readyrate</label>
                            <div className="input-group">
                                <label htmlFor="readyrate-rate">Rate</label>
                                <input type="number" id="readyrate-rate" defaultValue={1000} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="readyrate-upto-tax">Upto(&lt;=)% Tax</label>
                                <input type="number" id="readyrate-upto-tax" defaultValue={5} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="readyrate-above-tax">Above(&gt;)% Tax</label>
                                <input type="number" id="readyrate-above-tax" defaultValue={12} />
                            </div>
                        </div>
                        <div className="item-row">
                            <label className="item-label">Footwear</label>
                            <div className="input-group">
                                <label htmlFor="footwear-rate">Rate</label>
                                <input type="number" id="footwear-rate" defaultValue={500} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="footwear-upto-tax">Upto(&lt;=)% Tax</label>
                                <input type="number" id="footwear-upto-tax" defaultValue={5} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="footwear-above-tax">Above(&gt;)% Tax</label>
                                <input type="number" id="footwear-above-tax" defaultValue={18} />
                            </div>
                        </div>
                        {/* You can add a Save button or other controls here if needed */}
                    </div>
                    <div className="tax-calculation-section-responsive-container">
                        <h3 className="section-title">Excluding GST With Discount</h3>
                        <div className="item-row">
                            <label className="item-label">Readyrate</label>
                            <div className="input-group">
                                <label htmlFor="readyrate-rate">Rate</label>
                                <input type="number" id="readyrate-rate" defaultValue={1000} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="readyrate-upto-tax">Upto(&lt;=)% Tax</label>
                                <input type="number" id="readyrate-upto-tax" defaultValue={5} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="readyrate-above-tax">Above(&gt;)% Tax</label>
                                <input type="number" id="readyrate-above-tax" defaultValue={12} />
                            </div>
                        </div>
                        <div className="item-row">
                            <label className="item-label">Footwear</label>
                            <div className="input-group">
                                <label htmlFor="footwear-rate">Rate</label>
                                <input type="number" id="footwear-rate" defaultValue={500} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="footwear-upto-tax">Upto(&lt;=)% Tax</label>
                                <input type="number" id="footwear-upto-tax" defaultValue={5} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="footwear-above-tax">Above(&gt;)% Tax</label>
                                <input type="number" id="footwear-above-tax" defaultValue={18} />
                            </div>
                        </div>
                        {/* You can add a Save button or other controls here if needed */}
                    </div>
                    <div className="tax-calculation-section-responsive-container">
                        <h3 className="section-title">Including GST With Discount</h3>
                        <div className="item-row">
                            <label className="item-label">Readyrate</label>
                            <div className="input-group">
                                <label htmlFor="readyrate-rate">Rate</label>
                                <input type="number" id="readyrate-rate" defaultValue={1000} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="readyrate-upto-tax">Upto(&lt;=)% Tax</label>
                                <input type="number" id="readyrate-upto-tax" defaultValue={5} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="readyrate-above-tax">Above(&gt;)% Tax</label>
                                <input type="number" id="readyrate-above-tax" defaultValue={12} />
                            </div>
                        </div>
                        <div className="item-row">
                            <label className="item-label">Footwear</label>
                            <div className="input-group">
                                <label htmlFor="footwear-rate">Rate</label>
                                <input type="number" id="footwear-rate" defaultValue={500} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="footwear-upto-tax">Upto(&lt;=)% Tax</label>
                                <input type="number" id="footwear-upto-tax" defaultValue={5} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="footwear-above-tax">Above(&gt;)% Tax</label>
                                <input type="number" id="footwear-above-tax" defaultValue={18} />
                            </div>
                        </div>
                        {/* You can add a Save button or other controls here if needed */}
                    </div>
                    <div className="button-container">
                        <button type="submit" className="save-button">
                            Save
                        </button>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal1" checked={beforeDiscountCal === 'cal1'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 1</span>
                            <span className="formula">Excluding GST — Sales Price + Tax = Amount</span>
                        </label>
                    </div>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal2" checked={beforeDiscountCal === 'cal2'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 2</span>
                            <span className="formula">Including GST — Sales Price = Amount </span>
                        </label>
                    </div>
                    <div className="calculation-option">
                        <label>
                            <input type="radio" value="cal1" checked={beforeDiscountCal === 'cal1'} onChange={handleBeforeDiscountChange} />
                            <span className="option-title">Cal 1</span>
                            <span className="formula">Excluding GST — Sales Price + Tax = Amount</span>
                        </label>
                    </div>
                    <div className="stock-validation-container">
                        <div className="stock-validation-panel">
                            <div className="header">
                                <h2>Stock Validation</h2>
                            </div>
                            <div className="validation-option">
                                <label>
                                    <input type="radio" value="enable" checked={stockValidation === 'enable'} onChange={handleStockValidationChange} />
                                    Enable
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Disable
                                </label>
                            </div>
                            {/* You can add more content or settings related to stock validation here */}
                        </div>

                        {/* Add more TabPanel components for other tabs if you included them */}
                    </div>
                    <div className="button-container">
                        <button type="submit" className="save-button">
                            Save
                        </button>
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* Content for Sales Tab */}
                    {/* <p>Content for Sales settings...</p> */}
                    <div className="stock-validation-container">
                        <div className="stock-validation-panel">
                            <div className="header">
                                <h2>On View Cursor Start From</h2>
                            </div>
                            <div className="validation-option">
                                <label>
                                    <input type="radio" value="enable" checked={stockValidation === 'enable'} onChange={handleStockValidationChange} />
                                    Mode
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Mobile
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Saledman
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Barcode
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Lookup
                                </label>
                            </div>
                            {/* You can add more content or settings related to stock validation here */}
                        </div>

                        {/* Add more TabPanel components for other tabs if you included them */}
                    </div>
                    <div className="stock-validation-container">
                        <div className="stock-validation-panel">
                            <div className="header">
                                <h2>In Billing Item Adding Start By</h2>
                            </div>
                            <div className="validation-option">
                                <label>
                                    <input type="radio" value="enable" checked={stockValidation === 'enable'} onChange={handleStockValidationChange} />
                                    Salesman
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Barcode
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Lookup
                                </label>
                            </div>
                            {/* You can add more content or settings related to stock validation here */}
                        </div>

                        {/* Add more TabPanel components for other tabs if you included them */}
                    </div>
                    <div className="stock-validation-container">
                        <div className="stock-validation-panel">
                            <div className="header">
                                <h2>Sales Return</h2>
                            </div>
                            <div className="validation-option">
                                <label>
                                    <input type="radio" value="enable" checked={stockValidation === 'enable'} onChange={handleStockValidationChange} />
                                    Any Item
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    By Bill
                                </label>
                            </div>
                            {/* You can add more content or settings related to stock validation here */}
                        </div>

                        {/* Add more TabPanel components for other tabs if you included them */}
                    </div>
                    <div className="stock-validation-container">
                        <div className="stock-validation-panel">
                            <div className="header">
                                <h2>In Sale Bill General Item Sales by OTP</h2>
                            </div>
                            <div className="validation-option">
                                <label>
                                    <input type="radio" value="enable" checked={stockValidation === 'enable'} onChange={handleStockValidationChange} />
                                    Enable
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Disable
                                </label>
                            </div>
                            {/* You can add more content or settings related to stock validation here */}
                        </div>

                        {/* Add more TabPanel components for other tabs if you included them */}
                    </div>
                    <div className="stock-validation-container">
                        <div className="stock-validation-panel">
                            <div className="header">
                                <h2>In Sale Bill Auto Print (When click On Save)</h2>
                            </div>
                            <div className="validation-option">
                                <label>
                                    <input type="radio" value="enable" checked={stockValidation === 'enable'} onChange={handleStockValidationChange} />
                                    Enable
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Disable
                                </label>
                            </div>
                            {/* You can add more content or settings related to stock validation here */}
                        </div>

                        {/* Add more TabPanel components for other tabs if you included them */}
                    </div>
                    <div className="stock-validation-container">
                        <div className="stock-validation-panel">
                            <div className="header">
                                <h2> After Print Auto Open New Bill (When click On Save) </h2>
                            </div>
                            <div className="validation-option">
                                <label>
                                    <input type="radio" value="enable" checked={stockValidation === 'enable'} onChange={handleStockValidationChange} />
                                    Enable
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Disable
                                </label>
                            </div>
                            {/* You can add more content or settings related to stock validation here */}
                        </div>

                        {/* Add more TabPanel components for other tabs if you included them */}
                    </div>
                    <div className="stock-validation-container">
                        <div className="stock-validation-panel">
                            <div className="header">
                                <h2> Print Option </h2>
                            </div>
                            <div className="validation-option">
                                <label>
                                    <input type="radio" value="enable" checked={stockValidation === 'enable'} onChange={handleStockValidationChange} />
                                    DirectPrint(Default Printer or ThPrinter)
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Print Selection
                                </label>
                            </div>
                            <div className="validation-option validate">
                                <label>
                                    <input type="radio" value="disable" checked={stockValidation === 'disable'} onChange={handleStockValidationChange} />
                                    Print Preview
                                </label>
                            </div>
                            {/* You can add more content or settings related to stock validation here */}
                        </div>

                        {/* Add more TabPanel components for other tabs if you included them */}
                    </div>
                    <div className="button-container">
                        <button type="submit" className="save-button">
                            Save
                        </button>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="sales-order-validation-table-container">
                        <h2>Sales Order Validation</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="radio" value="mrp" checked={calculationMethod === 'mrp'} onChange={handleCalculationMethodChange} />
                                        <span className="option-title ms-5">Ca 1</span>
                                    </td>
                                    <td>
                                        <label htmlFor="enableRadio">Enable</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="radio" value="mrp" checked={calculationMethod === 'mrp'} onChange={handleCalculationMethodChange} />
                                        <span className="option-title ms-5">Cal 2</span>
                                    </td>
                                    <td>
                                        <label htmlFor="disableRadio">Disable</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* You can add more content or settings related to sales order validation here */}
                    </div>
                    <div className="sales-order-validation-table-container mt-5">
                        <h2>Sales Order QTY Validation</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="radio" value="mrp" checked={calculationMethod === 'mrp'} onChange={handleCalculationMethodChange} />
                                        <span className="option-title ms-5">Ca 1</span>
                                    </td>
                                    <td>
                                        <label htmlFor="enableRadio">Enable</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="radio" value="mrp" checked={calculationMethod === 'mrp'} onChange={handleCalculationMethodChange} />
                                        <span className="option-title ms-5">Cal 2</span>
                                    </td>
                                    <td>
                                        <label htmlFor="disableRadio">Disable</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* You can add more content or settings related to sales order validation here */}
                    </div>
                    <div className="button-container">
                        <button type="submit" className="save-button">
                            Save
                        </button>
                    </div>
                </TabPanel>
                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab>TAG Master</Tab>
                            <Tab>General</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="general-settings-tag-mrp-responsive-container">
                                <h2>General Settings</h2>

                                <div className="setting-group">
                                    <label className="setting-label">TAG :</label>
                                    <div className="setting-controls tag-fields">
                                        <div className="input-wrapper">
                                            <label htmlFor="field1">Field 1</label>
                                            <select id="field1">
                                                <option>Product</option>
                                                {/* Add other options */}
                                            </select>
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="field2">Field 2</label>
                                            <select id="field2">
                                                <option>-Select-</option>
                                                {/* Add options */}
                                            </select>
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="field3">Field 3</label>
                                            <select id="field3">
                                                <option>-Select-</option>
                                                {/* Add options */}
                                            </select>
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="field4">Field 4</label>
                                            <select id="field4">
                                                <option>-Select-</option>
                                                {/* Add options */}
                                            </select>
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="field5">Field 5</label>
                                            <select id="field5">
                                                <option>-Select-</option>
                                                {/* Add options */}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="setting-group">
                                    <label className="setting-label">MRP :</label>
                                    <div className="setting-controls mrp-fields">
                                        <div className="input-wrapper">
                                            <label htmlFor="prefix">Prefix:</label>
                                            <input type="text" id="prefix" />
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="suffix">Suffix:</label>
                                            <input type="text" id="suffix" />
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="plus">Plus</label>
                                            <input type="text" id="plus" />
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="amountPlus">Amount +</label>
                                            <input type="text" id="amountPlus" />
                                        </div>
                                    </div>
                                </div>

                                <div className="setting-group">
                                    <label className="setting-label">Point :</label>
                                    <div className="setting-controls point-fields">
                                        <div className="input-wrapper">
                                            <label htmlFor="rs">Rs</label>
                                            <input type="text" id="rs" />
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="point">Point</label>
                                            <input type="text" id="point" />
                                        </div>
                                        <div className="input-wrapper">
                                            <label htmlFor="pointVal">Point Val</label>
                                            <input type="text" id="pointVal" />
                                        </div>
                                    </div>
                                </div>

                                <div className="setting-group">
                                    <label className="setting-label">Bill Disc :</label>
                                    <div className="setting-controls bill-disc-fields">
                                        <div className="input-wrapper fixed-discount">
                                            <label htmlFor="fixedDiscount">Fix Discount(%)</label>
                                            <input type="text" id="fixedDiscount" value={billDiscount} onChange={handleBillDiscountChange} />
                                        </div>
                                        <div className="round-off-controls">
                                            <label>Net Amount Round Off</label>
                                            <label>
                                                <input type="radio" value="enable" checked={netAmountRoundOff === 'enable'} onChange={handleNetAmountRoundOffChange} />
                                                Enable
                                            </label>
                                            <label>
                                                <input type="radio" value="disable" checked={netAmountRoundOff === 'disable'} onChange={handleNetAmountRoundOffChange} />
                                                Disable
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="button-container">
                                    <button onClick={handleSubmit} className="save-button">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="general-settings-checkboxes-responsive-container">
                                <h2>General Settings</h2>

                                <div className="setting-group">
                                    <label className="setting-label">Fill Auto Cash in Sales :</label>
                                    <div className="setting-controls radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="enable"
                                                checked={fillAutoCashInSales === 'enable'}
                                                onChange={(e) => handleRadioChange(setFillAutoCashInSales, e.target.value as 'enable' | 'disable')}
                                            />
                                            Enable
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="disable"
                                                checked={fillAutoCashInSales === 'disable'}
                                                onChange={(e) => handleRadioChange(setFillAutoCashInSales, e.target.value as 'enable' | 'disable')}
                                            />
                                            Disable
                                        </label>
                                    </div>
                                </div>

                                <div className="setting-group">
                                    <label className="setting-label">Fill Auto Cash in Sales (Cash Amount + Net Amount - Card Amount) :</label>
                                    <div className="setting-controls radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="enable"
                                                checked={fillAutoCashInSalesCombined === 'enable'}
                                                onChange={(e) => handleRadioChange(setFillAutoCashInSalesCombined, e.target.value as 'enable' | 'disable')}
                                            />
                                            Enable
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="disable"
                                                checked={fillAutoCashInSalesCombined === 'disable'}
                                                onChange={(e) => handleRadioChange(setFillAutoCashInSalesCombined, e.target.value as 'enable' | 'disable')}
                                            />
                                            Disable
                                        </label>
                                    </div>
                                </div>

                                <div className="setting-group">
                                    <label className="setting-label">Clear Master When Item Add :</label>
                                    <div className="setting-controls radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="enable"
                                                checked={clearMasterWhenItemAdd === 'enable'}
                                                onChange={(e) => handleRadioChange(setClearMasterWhenItemAdd, e.target.value as 'enable' | 'disable')}
                                            />
                                            Enable
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="disable"
                                                checked={clearMasterWhenItemAdd === 'disable'}
                                                onChange={(e) => handleRadioChange(setClearMasterWhenItemAdd, e.target.value as 'enable' | 'disable')}
                                            />
                                            Disable
                                        </label>
                                    </div>
                                </div>

                                <div className="setting-group">
                                    <label className="setting-label">Clear Item Name and Rate When Item Add :</label>
                                    <div className="setting-controls radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="enable"
                                                checked={clearItemNameAndRateWhenItemAdd === 'enable'}
                                                onChange={(e) => handleRadioChange(setClearItemNameAndRateWhenItemAdd, e.target.value as 'enable' | 'disable')}
                                            />
                                            Enable
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="disable"
                                                checked={clearItemNameAndRateWhenItemAdd === 'disable'}
                                                onChange={(e) => handleRadioChange(setClearItemNameAndRateWhenItemAdd, e.target.value as 'enable' | 'disable')}
                                            />
                                            Disable
                                        </label>
                                    </div>
                                </div>

                                <div className="setting-group">
                                    <label className="setting-label">In Purchase Barcode Scanning</label>
                                    <div className="setting-controls radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                value="enable"
                                                checked={inPurchaseBarcodeScanning === 'enable'}
                                                onChange={(e) => handleRadioChange(setInPurchaseBarcodeScanning, e.target.value as 'enable' | 'disable')}
                                            />
                                            Enable
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="disable"
                                                checked={inPurchaseBarcodeScanning === 'disable'}
                                                onChange={(e) => handleRadioChange(setInPurchaseBarcodeScanning, e.target.value as 'enable' | 'disable')}
                                            />
                                            Disable
                                        </label>
                                    </div>
                                </div>

                                <div className="button-container">
                                    <button onClick={handleSubmit} className="save-button">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <div className="general-settings-responsive-container">
                        <h2>General Settings</h2>

                        <div className="setting-group">
                            <label className="setting-label">Look Up</label>
                            <div className="setting-controls">
                                <label>
                                    <input type="radio" value="onKeyPress" checked={lookupOption === 'onKeyPress'} onChange={handleLookupChange} />
                                    On Key Press : On Leave
                                </label>
                            </div>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label">Mrp to SalePrice</label>
                            <div className="setting-controls">
                                <label>
                                    <input type="radio" value="percentage" checked={mrpToSalePrice === 'percentage'} onChange={handleMrpToSalePriceChange} />
                                    Percentage : Rs.
                                </label>
                            </div>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label"></label>
                            <div className="setting-controls">
                                <label>
                                    <input type="checkbox" checked={pluginMinus} onChange={handlePluginMinusChange} />
                                    Plugin (+) Minus(-)
                                </label>
                            </div>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label">Look Up</label>
                            <div className="setting-controls field-row">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <div key={`field-${index + 1}`} className="select-wrapper">
                                        <label htmlFor={`field-${index + 1}`}>Field {index + 1}</label>
                                        <select id={`field-${index + 1}`}>
                                            <option value="">-Select-</option>
                                            {/* Add your options here */}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label">Customer Show In List</label>
                            <div className="setting-controls radio-group">
                                <label>
                                    <input type="radio" value="onlyName" checked={customerShowInList === 'onlyName'} onChange={handleCustomerShowInListChange} />
                                    Only Name
                                </label>
                                <label>
                                    <input type="radio" value="nameMobileNo" checked={customerShowInList === 'nameMobileNo'} onChange={handleCustomerShowInListChange} />
                                    Name + Mobile No.
                                </label>
                                <label>
                                    <input type="radio" value="nameMobileNoCity" checked={customerShowInList === 'nameMobileNoCity'} onChange={handleCustomerShowInListChange} />
                                    Name + Mobile No. + City
                                </label>
                            </div>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label">Stock Verification</label>
                            <div className="setting-controls field-row">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <div key={`type-${index + 1}`} className="select-wrapper">
                                        <label htmlFor={`type-${index + 1}`}>Type {index + 1}</label>
                                        <select id={`type-${index + 1}`} value={stockVerificationTypes[index]} onChange={(e) => handleStockVerificationTypeChange(index, e.target.value)}>
                                            <option value="">-Select-</option>
                                            {/* Add your options here */}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label">Item Discount</label>
                            <div className="setting-controls radio-group">
                                <label>
                                    <input type="radio" value="enable" checked={itemDiscount} onChange={handleItemDiscountChange} />
                                    Enable
                                </label>
                                <label>
                                    <input type="radio" value="disable" checked={!itemDiscount} onChange={handleItemDiscountChange} />
                                    Disable
                                </label>
                            </div>
                        </div>

                        <div className="button-container">
                            <button onClick={handleSubmit} className="save-button">
                                Save
                            </button>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ItemRate;
