import React, { useState } from 'react';

const CalculationPage = () => {
    const [activeTab, setActiveTab] = useState('Item Rate Calculation');
    const [selectedCalculation, setSelectedCalculation] = useState('');
    const [selectedRoundOff, setSelectedRoundOff] = useState('');

    // Tab definitions
    const tabs = [
        'Item Rate Calculation',
        'MRP',
        'Sale Price',
        'SalePrice',
        'Purchase Entry',
        'Sales Entry',
        'Sales GST',
        'Purchase GST',
        'Tax Slab',
        'Stock',
        'Delivery Challan',
        'Sales 1',
        'Sales 2',
        'Purchase & OS',
        'General',
    ];

    // Calculation options for Item Rate Calculation tab
    const calculationOptions = [
        {
            id: 'cal1',
            label: 'Cal 1',
            title: 'By Rate',
            description: 'Rate + Tax = PurPrice + Mark U/D = MRP - Mark U/D = Sale Price',
        },
        {
            id: 'cal2',
            label: 'Cal 2',
            title: 'By MRP',
            description: 'MRP - Mark U/D = Sale Price . MRP - Mrak U/D = Purchase Price - Tax = Rate',
        },
        {
            id: 'cal3',
            label: 'Cal 3',
            title: 'Manual',
            description: 'MRP = Manual . Mrak U/D = Manual . Sale Price = Manual',
        },
        {
            id: 'cal4',
            label: 'Cal 4',
            title: 'By Sale Price',
            description: 'MRP - Mark U/D = Sale Price . MRP - Mrak U/D = Purchase Price - Tax = Rate',
        },
    ];

    // MRP Calculation options
    const mrpCalculationOptions = [
        {
            id: 'cal1',
            label: 'Cal 1',
            example: [
                'Rate',
                '100',
                '+',
                '(',
                'Tax(%)',
                '5',
                'or',
                'Tax(Rs.)',
                '5',
                ')',
                '=',
                'Purchase Price',
                '105',
                ';',
                '(',
                'Purchase Price',
                '105',
                ')',
                '+',
                '(',
                'Mark up (%)',
                '30',
                'or',
                'Mark up (Rs.)',
                '31.5',
                ')',
                '=',
                'MRP',
                '136.5',
            ],
        },
        {
            id: 'cal2',
            label: 'Cal 2',
            example: [
                'Rate',
                '100',
                '+',
                '(',
                'Mark up (%)',
                '30',
                'or',
                'Mark up (Rs.)',
                '30',
                ')',
                '=',
                'MRP',
                '130',
                'Cal 3',
                'EX:',
                'Rate',
                '100',
                '+',
                '(',
                'Mark Down(%)',
                '30',
                'or',
                'Mark Down(Rs.)',
                '43',
                ')',
                '=',
                'MRP',
                '143',
            ],
        },
        // ... other MRP calculation options
    ];

    // Round off options for MRP tab
    const roundOffOptions = [
        {
            id: 'roundoff1',
            label: 'Cal 1',
            description: 'MRP = No Round Off',
        },
        {
            id: 'roundoff2',
            label: 'Cal 2',
            description: 'MRP = Decimal Round Off EX: ( RS. 100.50 = 100 And 100.51 = 101 )',
        },
        // ... other round off options
    ];

    // Render the active tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Item Rate Calculation':
                return (
                    <div className="p-4 space-y-4">
                        {calculationOptions.map((option) => (
                            <div key={option.id} className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-4">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="calculation"
                                        className="mt-0.5"
                                        checked={selectedCalculation === option.id}
                                        onChange={() => setSelectedCalculation(option.id)}
                                    />
                                    <label htmlFor={option.id} className="text-sm font-semibold select-none">
                                        {option.label}
                                    </label>
                                </div>
                                <div className="border border-gray-200 bg-gray-50 p-3 flex-1 text-xs text-gray-700 font-sans rounded-md">
                                    <div className="font-semibold mb-1">{option.title}</div>
                                    <div>{option.description}</div>
                                </div>
                            </div>
                        ))}
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                    </div>
                );

            case 'MRP':
                return (
                    <div className="p-4 space-y-6">
                        <div className="mb-4">
                            <div className="mb-2 font-semibold text-sm">MRP Calculation</div>
                            {mrpCalculationOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className={`flex flex-col sm:flex-row items-start border border-gray-300 bg-gray-50 p-2 mb-2 rounded \${
                    selectedCalculation === option.id ? 'border-blue-500' : ''
                  }`}
                                >
                                    <div className="flex items-center mb-1 sm:mb-0 sm:mr-2">
                                        <input type="radio" name="calculation" className="mt-0.5 mr-1" checked={selectedCalculation === option.id} onChange={() => setSelectedCalculation(option.id)} />
                                        <label className="text-xs font-medium select-none">{option.label}</label>
                                    </div>
                                    <div className="flex flex-wrap gap-x-1 gap-y-1 text-[10px] leading-tight sm:leading-none">
                                        {option.example.map((item, idx) => (
                                            <span
                                                key={idx}
                                                className={`\${
                          ['+', '=', '(', ')', ';'].includes(item)
                            ? 'font-bold'
                            : item === 'EX:'
                            ? 'ml-1'
                            : ''
                        }`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border border-gray-400 mt-4 p-3 bg-gray-50 rounded">
                            <div className="mb-2 font-semibold text-sm">Round Off Calculation</div>
                            {roundOffOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className={`flex flex-col sm:flex-row items-start sm:items-center mb-2 \${
                    selectedRoundOff === option.id ? 'text-blue-600' : ''
                  }`}
                                >
                                    <div className="flex items-center mb-1 sm:mb-0 sm:mr-2">
                                        <input type="radio" name="roundoff" className="mr-1" checked={selectedRoundOff === option.id} onChange={() => setSelectedRoundOff(option.id)} />
                                        <label className="text-xs font-medium select-none">{option.label}</label>
                                    </div>
                                    <div className="border border-gray-300 bg-gray-200 px-2 py-1 text-xs rounded w-full sm:w-auto">{option.description}</div>
                                </div>
                            ))}
                        </div>
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                    </div>
                );

            case 'Sale Price':
                return (
                    <form className="space-y-6 text-xs text-gray-800">
                        {/* Sale Price Calculation Section */}
                        <fieldset className="border border-gray-300 rounded bg-gray-50 p-3">
                            <legend className="text-[11px] font-normal ml-1 px-1">Sale Price Calculation</legend>

                            <div className="space-y-3">
                                {['Cal 1', 'Cal 2', 'Cal 3', 'Cal 4'].map((cal, idx) => (
                                    <label key={idx} className="flex flex-col sm:flex-row items-start gap-2">
                                        <input type="radio" name="salePriceCalc" className="mt-1" />
                                        <span className="w-16 font-semibold leading-5">{cal}</span>
                                        <div className="flex-1 border border-gray-300 bg-white rounded px-3 py-2 text-[11px] flex flex-wrap items-center gap-1">
                                            {idx === 0 && (
                                                <>
                                                    <span className="font-semibold">MRP</span>
                                                    <span>=</span>
                                                    <span className="font-semibold">Sale Price</span>
                                                </>
                                            )}
                                            {idx === 1 && (
                                                <>
                                                    <span className="font-semibold">MRP</span> <span>EX: 100</span> <span>-</span> <span>(</span>
                                                    <span>S.P. Up (%)</span> <span className="font-semibold">10</span> <span>or</span>
                                                    <span>S.P. Up (Rs)</span> <span className="font-semibold">10</span> <span>)</span>
                                                    <span>=</span> <span className="font-semibold">Sale Price</span> <span>90</span>
                                                </>
                                            )}
                                            {idx === 2 && (
                                                <>
                                                    <span className="font-semibold">MRP</span> <span>EX: 100</span> <span>-</span> <span>(</span>
                                                    <span>S.P. Up (%)</span> <span className="font-semibold">1.1</span> <span>or</span>
                                                    <span>S.P. Up (Rs)</span> <span className="font-semibold">9.11</span> <span>)</span>
                                                    <span>=</span> <span className="font-semibold">Sale Price</span> <span>90.91</span>
                                                </>
                                            )}
                                            {idx === 3 && (
                                                <>
                                                    <span className="font-semibold">MRP</span> <span>EX: 100</span> <span>-</span> <span>(</span>
                                                    <span>S.P. Up (%)</span> <span className="font-semibold">0</span> <span>or</span>
                                                    <span>S.P. Up (Rs)</span> <span className="font-semibold">0</span> <span>)</span>
                                                    <span>=</span> <span className="font-semibold">Sale Price</span> <span>90</span>
                                                    <span className="ml-3">(Manual SalePrice)</span>
                                                </>
                                            )}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        {/* Round Off Calculation Section */}
                        <fieldset className="border border-gray-300 rounded bg-gray-50 p-3">
                            <legend className="text-[11px] font-normal ml-1 px-1">Round Off Calculation</legend>

                            <div className="space-y-3">
                                {['Cal 1', 'Cal 2', 'Cal 3', 'Cal 4'].map((cal, idx) => (
                                    <label key={idx} className="flex flex-col sm:flex-row items-start gap-2">
                                        <input type="radio" name="roundOffCalc" className="mt-1" />
                                        <span className="w-16 font-semibold leading-5">{cal}</span>
                                        <div className="flex-1 border border-gray-300 bg-white rounded px-3 py-2 text-[11px] flex flex-wrap items-center gap-1">
                                            {idx === 0 && (
                                                <>
                                                    <span className="font-semibold">Sale Price</span> <span>= No Round Off</span>
                                                </>
                                            )}
                                            {idx === 1 && (
                                                <>
                                                    <span className="font-semibold">Sale Price</span> <span>= Only decimal Round Off ; EX: ( RS.</span>
                                                    <span className="font-semibold">100.50</span> <span>= 100 and</span>
                                                    <span className="font-semibold">100.51</span> <span>= 101 )</span>
                                                </>
                                            )}
                                            {idx === 2 && (
                                                <>
                                                    <span className="font-semibold">Sale Price</span> <span>= Round Off ; Where ( RS.</span>
                                                    <span className="font-semibold">100 to 105</span> <span>= 100 and</span>
                                                    <span className="font-semibold">105 to 110</span> <span>= 110 )</span>
                                                </>
                                            )}
                                            {idx === 3 && (
                                                <>
                                                    <span className="font-semibold">Sale Price</span> <span>= Round Off ; Where ( RS.</span>
                                                    <span className="font-semibold">100.01 to RS. 109.99</span> <span>= 110.00 )</span>
                                                </>
                                            )}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                    </form>
                );

            case 'SalePrice':
                return (
                    <div className="bg-gray-200 min-h-screen flex flex-col">
                        {/* Header */}

                        {/* Main Form */}
                        <main className="flex-grow p-4 bg-gray-100 border border-gray-300 m-2">
                            <form className="space-y-4 text-gray-900 text-sm font-sans">
                                {/* Mrp To SalePrice Section */}
                                <fieldset className="flex flex-wrap sm:flex-nowrap items-center space-x-6 border border-gray-300 bg-gray-200 p-3 rounded select-none">
                                    <legend className="font-normal w-auto min-w-[110px]">Mrp To SalePrice</legend>
                                    <div className="flex items-center space-x-4">
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="mrpToSalePrice" />
                                            <span>Percentage</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="mrpToSalePrice" />
                                            <span>Rs.</span>
                                        </label>
                                        <label className="flex items-center space-x-1 ml-6">
                                            <input type="radio" name="plusMinus" />
                                            <span>Plus (+)</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="plusMinus" />
                                            <span>Minus (-)</span>
                                        </label>
                                    </div>
                                </fieldset>

                                {/* Sale Price 1-4 Calculation Section */}
                                <fieldset className="border border-gray-300 rounded p-3 space-y-4">
                                    <legend className="font-semibold text-gray-900 text-sm px-2 -mt-3 select-none">Sale Price 1 - 4 Calculation</legend>

                                    {/* Auto Calculate Row */}
                                    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-6 border border-gray-300 bg-gray-100 p-3 rounded select-none">
                                        <label className="w-32 font-normal">Auto Calculate</label>
                                        <div className="flex items-center space-x-4">
                                            <label className="flex items-center space-x-1">
                                                <input type="radio" name="autoCalculate" />
                                                <span>Enable</span>
                                            </label>
                                            <label className="flex items-center space-x-1">
                                                <input type="radio" name="autoCalculate" />
                                                <span>Disable</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* SP1 - SP4 Rows */}
                                    {['SP1', 'SP2', 'SP3', 'SP4'].map((sp, idx) => (
                                        <div key={idx} className="flex flex-wrap sm:flex-nowrap items-center space-x-3 border border-gray-300 bg-gray-100 p-3 rounded select-none">
                                            <label className="w-16 font-normal">{sp}</label>
                                            <select className="border border-gray-300 bg-white h-8 w-32"></select>
                                            <select className="border border-gray-300 bg-white h-8 w-32"></select>
                                            <input type="text" className="border border-gray-300 h-8 w-24 px-1" />
                                            <span className="select-none">%</span>
                                        </div>
                                    ))}
                                </fieldset>
                                {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                            </form>
                        </main>

                        {/* Footer Buttons */}
                    </div>
                );

            case 'Purchase Entry':
                return (
                    <div className="bg-gray-200 font-sans min-h-screen flex flex-col items-center p-2">
                        <div className="max-w-full mx-auto border border-gray-400 bg-gray-300 select-none w-full">
                            <div className="border border-gray-400 bg-gray-100">
                                <form className="p-2 space-y-4 text-[13px] text-gray-800">
                                    {/* Net Amount Calculation */}
                                    <section className="border border-gray-300 bg-gray-100 p-2 rounded">
                                        <div className="flex justify-between items-center mb-1">
                                            <h2 className="font-semibold">Net Amount Calculation</h2>
                                            <span className="text-[13px] font-bold text-red-800 select-text">TAX = CGST + SGST + IGST</span>
                                        </div>
                                        <div className="space-y-3">
                                            {/* Cal 1 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="pt-1">
                                                    <input type="radio" name="netCalc" id="netCalc1" className="mt-1" aria-label="Cal 1" />
                                                </div>
                                                <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-1 items-center border border-gray-300 rounded bg-white p-2">
                                                    <div className="text-right font-semibold">Cal 1</div>
                                                    <div>
                                                        <div className="text-xs font-normal">EX:</div>
                                                        <div className="text-xs text-center">100</div>
                                                        <div className="text-xs font-semibold">Total Amount</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Tax(%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Tax(Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Net Amount</div>
                                                        <div className="text-xs font-normal">105</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Cal 2 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="pt-1">
                                                    <input type="radio" name="netCalc" id="netCalc2" className="mt-1" aria-label="Cal 2" />
                                                </div>
                                                <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-1 items-center border border-gray-300 rounded bg-white p-2">
                                                    <div className="text-right font-semibold">Cal 2</div>
                                                    <div>
                                                        <div className="text-xs font-normal">EX:</div>
                                                        <div className="text-xs text-center">100</div>
                                                        <div className="text-xs font-semibold">Total Amount</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Tax(%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Tax(Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Fright Amount</div>
                                                        <div className="text-xs font-normal">5</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Net Amount</div>
                                                        <div className="text-xs font-normal">110</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Cal 3 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="pt-1">
                                                    <input type="radio" name="netCalc" id="netCalc3" className="mt-1" aria-label="Cal 3" />
                                                </div>
                                                <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-1 items-center border border-gray-300 rounded bg-white p-2">
                                                    <div className="text-right font-semibold">Cal 3</div>
                                                    <div>
                                                        <div className="text-xs font-normal">EX:</div>
                                                        <div className="text-xs text-center">100</div>
                                                        <div className="text-xs font-semibold">Total Amount</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Tax(%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Tax(Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Fright Amount</div>
                                                        <div className="text-xs font-normal">5</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Other Amount</div>
                                                        <div className="text-xs font-normal">10</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Net Amount</div>
                                                        <div className="text-xs font-normal">120</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Cal 4 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="pt-1">
                                                    <input type="radio" name="netCalc" id="netCalc4" className="mt-1" aria-label="Cal 4" />
                                                </div>
                                                <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-1 items-center border border-gray-300 rounded bg-white p-2">
                                                    <div className="text-right font-semibold">Cal 4</div>
                                                    <div>
                                                        <div className="text-xs font-normal">EX:</div>
                                                        <div className="text-xs text-center">100</div>
                                                        <div className="text-xs font-semibold">Total Amount</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Tax(%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Tax(Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Fright Amount</div>
                                                        <div className="text-xs font-normal">5</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Other Amount</div>
                                                        <div className="text-xs font-normal">10</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Commission Amount</div>
                                                        <div className="text-xs font-normal">50</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Net Amount</div>
                                                        <div className="text-xs font-normal">170</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Net Amount Calculation (With Discount) */}
                                    <section className="border border-gray-300 bg-gray-100 p-2 rounded mt-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <h2 className="font-semibold text-[13px]">Net Amount Calculation (With Discount)</h2>
                                            <span className="text-[13px] font-bold text-red-800 select-text">TAX = CGST + SGST + IGST</span>
                                        </div>
                                        <div className="space-y-3">
                                            {/* Cal 1 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="pt-1">
                                                    <input type="radio" name="netCalcDisc" id="netCalcDisc1" className="mt-1" aria-label="Cal 1 with discount" />
                                                </div>
                                                <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-1 items-center border border-gray-300 rounded bg-white p-2">
                                                    <div className="text-right font-semibold">Cal 1</div>
                                                    <div>
                                                        <div className="text-xs font-normal">EX:</div>
                                                        <div className="text-xs text-center">100</div>
                                                        <div className="text-xs font-semibold">Total Amount</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">-</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Disc (%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Disc (Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Amt After Disc.</div>
                                                        <div className="text-xs font-normal">95</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Tax(%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Tax(Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Net Amount</div>
                                                        <div className="text-xs font-normal">99.75</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Cal 2 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="pt-1">
                                                    <input type="radio" name="netCalcDisc" id="netCalcDisc2" className="mt-1" aria-label="Cal 2 with discount" />
                                                </div>
                                                <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-1 items-center border border-gray-300 rounded bg-white p-2">
                                                    <div className="text-right font-semibold">Cal 2</div>
                                                    <div>
                                                        <div className="text-xs font-normal">EX:</div>
                                                        <div className="text-xs text-center">100</div>
                                                        <div className="text-xs font-semibold">Total Amount</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">-</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Disc (%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Disc (Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Amt After Disc.</div>
                                                        <div className="text-xs font-normal">95</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Tax(%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Tax(Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">F. Amt</div>
                                                        <div className="text-xs font-normal">5</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Net Amount</div>
                                                        <div className="text-xs font-normal">104.75</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Cal 3 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="pt-1">
                                                    <input type="radio" name="netCalcDisc" id="netCalcDisc3" className="mt-1" aria-label="Cal 3 with discount" />
                                                </div>
                                                <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-1 items-center border border-gray-300 rounded bg-white p-2">
                                                    <div className="text-right font-semibold">Cal 3</div>
                                                    <div>
                                                        <div className="text-xs font-normal">EX:</div>
                                                        <div className="text-xs text-center">100</div>
                                                        <div className="text-xs font-semibold">Total Amount</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">-</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Disc (%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Disc (Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Amt After Disc.</div>
                                                        <div className="text-xs font-normal">95</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Tax(%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Tax(Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">F. Amt</div>
                                                        <div className="text-xs font-normal">5</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">OA</div>
                                                        <div className="text-xs font-normal">10</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Net Amount</div>
                                                        <div className="text-xs font-normal">114.75</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Cal 4 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="pt-1">
                                                    <input type="radio" name="netCalcDisc" id="netCalcDisc4" className="mt-1" aria-label="Cal 4 with discount" />
                                                </div>
                                                <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-1 items-center border border-gray-300 rounded bg-white p-2">
                                                    <div className="text-right font-semibold">Cal 4</div>
                                                    <div>
                                                        <div className="text-xs font-normal">EX:</div>
                                                        <div className="text-xs text-center">100</div>
                                                        <div className="text-xs font-semibold">Total Amount</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">-</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Disc (%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Disc (Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Amt After Disc.</div>
                                                        <div className="text-xs font-normal">95</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div className="text-center">
                                                        <div className="text-xs font-semibold">(</div>
                                                        <div className="flex justify-center space-x-1 text-xs font-normal">
                                                            <span>Tax(%)</span>
                                                            <span className="text-[10px]">5</span>
                                                            <span>or</span>
                                                            <span>Tax(Rs.)</span>
                                                            <span className="text-[10px]">5</span>
                                                        </div>
                                                        <div className="text-xs font-semibold">)</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">F. Amt</div>
                                                        <div className="text-xs font-normal">5</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">OA</div>
                                                        <div className="text-xs font-normal">10</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">+</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Com. Amt</div>
                                                        <div className="text-xs font-normal">10</div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-center select-none">=</div>
                                                    <div>
                                                        <div className="text-xs font-semibold">Net Amt</div>
                                                        <div className="text-xs font-normal">124.75</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            </div>

                            {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none bg-white">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                        </div>
                    </div>
                );

            case 'Sales Entry':
                return (
                    <div className="w-full  border-gray-200 bg-gray-300">
                        
                        {/* Content */}
                        <div className="p-2 text-xs text-gray-800 select-text bg-white">
                            {/* Tax With Including GST */}
                            <section className="mb-4">
                                <div className="flex justify-between items-center mb-1">
                                    <div className="font-normal">Tax With Including GST</div>
                                    <div className="font-bold text-red-700 text-sm select-text">TAX = CGST + SGST + IGST</div>
                                </div>

                                {/* Cal 1 */}
                                <div className="flex flex-col md:flex-row items-center gap-2 mb-1">
                                    <input type="radio" name="taxInc" className="w-3 h-3" />
                                    <div className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1 w-full">
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Total Amount</div>
                                            <div className="font-mono font-semibold">100</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Tax(%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Tax(Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Net Amount</div>
                                            <div className="font-mono font-semibold">100</div>
                                        </div>
                                        <div className="ml-auto text-[9px] font-bold text-red-700 select-text">EX:</div>
                                    </div>
                                </div>

                                {/* Cal 2 */}
                                <div className="flex flex-col md:flex-row items-center gap-2 mb-1">
                                    <input type="radio" name="taxInc" className="w-3 h-3" />
                                    <div className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1 w-full">
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Total Amount</div>
                                            <div className="font-mono font-semibold">100</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Tax(%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Tax(Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>Fright Amount</div>
                                            <div className="font-mono font-semibold">5</div>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Net Amount</div>
                                            <div className="font-mono font-semibold">105</div>
                                        </div>
                                        <div className="ml-auto text-[9px] font-bold text-red-700 select-text">EX:</div>
                                    </div>
                                </div>

                                {/* Cal 3 */}
                                <div className="flex flex-col md:flex-row items-center gap-2 mb-1">
                                    <input type="radio" name="taxInc" className="w-3 h-3" />
                                    <div className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1 w-full">
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Total Amount</div>
                                            <div className="font-mono font-semibold">100</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Tax(%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Tax(Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>Fright Amount</div>
                                            <div className="font-mono font-semibold">5</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>Other Amount</div>
                                            <div className="font-mono font-semibold">10</div>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Net Amount</div>
                                            <div className="font-mono font-semibold">115</div>
                                        </div>
                                        <div className="ml-auto text-[9px] font-bold text-red-700 select-text">EX:</div>
                                    </div>
                                </div>

                                {/* Cal 4 */}
                                <div className="flex flex-col md:flex-row items-center gap-2">
                                    <input type="radio" name="taxInc" className="w-3 h-3" />
                                    <div className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1 w-full">
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Total Amount</div>
                                            <div className="font-mono font-semibold">100</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Tax(%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Tax(Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>Fright Amount</div>
                                            <div className="font-mono font-semibold">5</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>Other Amount</div>
                                            <div className="font-mono font-semibold">10</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[60px]">
                                            <div>Commision Amount</div>
                                            <div className="font-mono font-semibold">50</div>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Net Amount</div>
                                            <div className="font-mono font-semibold">165</div>
                                        </div>
                                        <div className="ml-auto text-[9px] font-bold text-red-700 select-text">EX:</div>
                                    </div>
                                </div>
                            </section>

                            {/* Tax With Excluding GST */}
                            <section>
                                <div className="flex justify-between items-center mb-1">
                                    <div className="font-normal">Tax With Excluding GST</div>
                                    <div className="font-bold text-red-700 text-sm select-text">TAX = CGST + SGST + IGST</div>
                                </div>

                                {/* Cal 1 */}
                                <div className="flex flex-col md:flex-row items-center gap-2 mb-1">
                                    <input type="radio" name="taxExc" className="w-3 h-3" />
                                    <div className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1 w-full">
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Total Amount</div>
                                            <div className="font-mono font-semibold">100</div>
                                        </div>
                                        <div className="font-bold text-lg">-</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Disc (%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Disc (Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Amt After Disc.</div>
                                            <div className="font-mono font-semibold">95</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Tax(%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Tax(Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Net Amount</div>
                                            <div className="font-mono font-semibold">99.75</div>
                                        </div>
                                        <div className="ml-auto text-[9px] font-bold text-red-700 select-text">EX:</div>
                                    </div>
                                </div>

                                {/* Cal 2 */}
                                <div className="flex flex-col md:flex-row items-center gap-2 mb-1">
                                    <input type="radio" name="taxExc" className="w-3 h-3" />
                                    <div className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1 w-full">
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Total Amount</div>
                                            <div className="font-mono font-semibold">100</div>
                                        </div>
                                        <div className="font-bold text-lg">-</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Disc (%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Disc (Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Amt After Disc.</div>
                                            <div className="font-mono font-semibold">95</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Tax(%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Tax(Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>F. Amount</div>
                                            <div className="font-mono font-semibold">5</div>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Net Amount</div>
                                            <div className="font-mono font-semibold">104.75</div>
                                        </div>
                                        <div className="ml-auto text-[9px] font-bold text-red-700 select-text">EX:</div>
                                    </div>
                                </div>

                                {/* Cal 3 */}
                                <div className="flex flex-col md:flex-row items-center gap-2 mb-1">
                                    <input type="radio" name="taxExc" className="w-3 h-3" />
                                    <div className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1 w-full">
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Total Amount</div>
                                            <div className="font-mono font-semibold">100</div>
                                        </div>
                                        <div className="font-bold text-lg">-</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Disc (%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Disc (Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Amt After Disc.</div>
                                            <div className="font-mono font-semibold">95</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Tax(%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Tax(Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>F. Amount</div>
                                            <div className="font-mono font-semibold">5</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>OA</div>
                                            <div className="font-mono font-semibold">10</div>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Net Amount</div>
                                            <div className="font-mono font-semibold">114.75</div>
                                        </div>
                                        <div className="ml-auto text-[9px] font-bold text-red-700 select-text">EX:</div>
                                    </div>
                                </div>

                                {/* Cal 4 */}
                                <div className="flex flex-col md:flex-row items-center gap-2">
                                    <input type="radio" name="taxExc" className="w-3 h-3" />
                                    <div className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1 w-full">
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Total Amount</div>
                                            <div className="font-mono font-semibold">100</div>
                                        </div>
                                        <div className="font-bold text-lg">-</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Disc (%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Disc (Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Amt After Disc.</div>
                                            <div className="font-mono font-semibold">95</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex items-center gap-1 text-[9px] font-mono">
                                            <span>(</span>
                                            <span>Tax(%)</span>
                                            <span>5</span>
                                            <span>or</span>
                                            <span>Tax(Rs.)</span>
                                            <span>5</span>
                                            <span>)</span>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>F. Amt</div>
                                            <div className="font-mono font-semibold">5</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>OA</div>
                                            <div className="font-mono font-semibold">10</div>
                                        </div>
                                        <div className="font-bold text-lg">+</div>
                                        <div className="flex flex-col items-center text-[9px] w-[40px]">
                                            <div>Com. Amt</div>
                                            <div className="font-mono font-semibold">10</div>
                                        </div>
                                        <div className="font-bold text-lg">=</div>
                                        <div className="flex flex-col items-center text-[9px] w-[50px]">
                                            <div>Net Amt</div>
                                            <div className="font-mono font-semibold">124.75</div>
                                        </div>
                                        <div className="ml-auto text-[9px] font-bold text-red-700 select-text">EX:</div>
                                    </div>
                                </div>
                            </section>
                        </div>

                       {/* Footer Buttons */}
                       <footer className=" p-4 flex justify-center space-x-4 select-none bg-white">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                    </div>
                );

            case 'Sales GST':
                return (
                    <div className="max-w-full mx-auto">
                        

                        <main className="border border-gray-300 m-1 p-2 min-h-[300px] select-none">
                            <form>
                                <fieldset className="border border-gray-300 p-2 mb-4">
                                    <legend className="text-[11px] font-sans text-black ml-2 px-1 select-none">Before Discount</legend>

                                    <div className="flex items-start space-x-2 mb-3">
                                        <div className="flex flex-col items-center text-[11px] font-sans text-black w-12 select-none">
                                            <input type="radio" name="beforeDiscount" id="beforeCal1" className="mt-1" />
                                            <label htmlFor="beforeCal1" className="mt-1">
                                                Cal 1
                                            </label>
                                        </div>
                                        <div className="border border-gray-300 bg-gray-100 p-2 flex-1 text-[11px] font-sans text-black leading-tight">
                                            <p>Excluding GST</p>
                                            <p>Sale Price + Tax = Amount</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <div className="flex flex-col items-center text-[11px] font-sans text-black w-12 select-none">
                                            <input type="radio" name="beforeDiscount" id="beforeCal2" className="mt-1" />
                                            <label htmlFor="beforeCal2" className="mt-1">
                                                Cal 2
                                            </label>
                                        </div>
                                        <div className="border border-gray-300 bg-gray-100 p-2 flex-1 text-[11px] font-sans text-black leading-tight">
                                            <p>Including GST</p>
                                            <p>Sale Price = Amount</p>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="border border-gray-300 p-2">
                                    <legend className="text-[11px] font-sans text-black ml-2 px-1 select-none">After Discount</legend>

                                    <div className="flex items-start space-x-2 mb-3">
                                        <div className="flex flex-col items-center text-[11px] font-sans text-black w-12 select-none">
                                            <input type="radio" name="afterDiscount" id="afterCal1" className="mt-1" />
                                            <label htmlFor="afterCal1" className="mt-1">
                                                Cal 1
                                            </label>
                                        </div>
                                        <div className="border border-gray-300 bg-gray-100 p-2 flex-1 text-[11px] font-sans text-black leading-tight">
                                            <p>Excluding GST</p>
                                            <p>Sale Price + Tax = Amount</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <div className="flex flex-col items-center text-[11px] font-sans text-black w-12 select-none">
                                            <input type="radio" name="afterDiscount" id="afterCal2" className="mt-1" />
                                            <label htmlFor="afterCal2" className="mt-1">
                                                Cal 2
                                            </label>
                                        </div>
                                        <div className="border border-gray-300 bg-gray-100 p-2 flex-1 text-[11px] font-sans text-black leading-tight">
                                            <p>Including GST</p>
                                            <p>Sale Price = Amount</p>
                                        </div>
                                    </div>
                                </fieldset>
                                {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                            </form>
                        </main>

                        
                    </div>
                );

            case 'Purchase GST':
                return (
                    <div className="max-w-full mx-auto">

                       

                        <main className="border border-gray-300 m-1 p-2 min-h-[300px] select-none">
                            <form>
                                <fieldset className="border border-gray-300 p-2 mb-4">
                                    <legend className="text-[11px] font-sans text-black ml-2 px-1 select-none">Before Discount</legend>

                                    <div className="flex items-start space-x-2 mb-3">
                                        <div className="flex flex-col items-center text-[11px] font-sans text-black w-12 select-none">
                                            <input type="radio" name="beforeDiscount" id="beforeCal1" className="mt-1" />
                                            <label htmlFor="beforeCal1" className="mt-1">
                                                Cal 1
                                            </label>
                                        </div>
                                        <div className="border border-gray-300 bg-gray-100 p-2 flex-1 text-[11px] font-sans text-black leading-tight">
                                            <p>Excluding GST</p>
                                            <p>Rate + Tax = Amount</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <div className="flex flex-col items-center text-[11px] font-sans text-black w-12 select-none">
                                            <input type="radio" name="beforeDiscount" id="beforeCal2" className="mt-1" />
                                            <label htmlFor="beforeCal2" className="mt-1">
                                                Cal 2
                                            </label>
                                        </div>
                                        <div className="border border-gray-300 bg-gray-100 p-2 flex-1 text-[11px] font-sans text-black leading-tight">
                                            <p>Including GST</p>
                                            <p>Purchase Price = Amount</p>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="border border-gray-300 p-2">
                                    <legend className="text-[11px] font-sans text-black ml-2 px-1 select-none">After Discount</legend>

                                    <div className="flex items-start space-x-2 mb-3">
                                        <div className="flex flex-col items-center text-[11px] font-sans text-black w-12 select-none">
                                            <input type="radio" name="afterDiscount" id="afterCal1" className="mt-1" />
                                            <label htmlFor="afterCal1" className="mt-1">
                                                Cal 1
                                            </label>
                                        </div>
                                        <div className="border border-gray-300 bg-gray-100 p-2 flex-1 text-[11px] font-sans text-black leading-tight">
                                            <p>Excluding GST</p>
                                            <p>Rate + Tax = Amount</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <div className="flex flex-col items-center text-[11px] font-sans text-black w-12 select-none">
                                            <input type="radio" name="afterDiscount" id="afterCal2" className="mt-1" />
                                            <label htmlFor="afterCal2" className="mt-1">
                                                Cal 2
                                            </label>
                                        </div>
                                        <div className="border border-gray-300 bg-gray-100 p-2 flex-1 text-[11px] font-sans text-black leading-tight">
                                            <p>Including GST</p>
                                            <p>Purchase Price = Amount</p>
                                        </div>
                                    </div>
                                </fieldset>
                                 {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                            </form>
                        </main>

                       
                    </div>
                );

            case 'Tax Slab':
                return (
                    <div className="bg-gray-200 w-full flex flex-col">
                        <main className="flex-grow p-4 text-gray-800 text-xs font-sans">
                            <form className="space-y-4 max-w-5xl mx-auto">
                                {/* Section 1 */}
                                <fieldset className="border border-gray-300 p-3 rounded bg-white">
                                    <legend className="text-xs font-normal px-2">Excluding GST Without Discount</legend>
                                    <div className="grid grid-cols-[100px_40px_48px_40px_48px_40px_48px] gap-x-2 items-center">
                                        <label className="text-right" htmlFor="exw-readymade-rate">
                                            Readymade
                                        </label>
                                        <span>Rate</span>
                                        <input id="exw-readymade-rate" type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Upto( &lt;= ) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Above(&gt;) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                    </div>
                                    <div className="grid grid-cols-[100px_40px_48px_40px_48px_40px_48px] gap-x-2 items-center mt-2">
                                        <label className="text-right" htmlFor="exw-footwear-rate">
                                            Footwear
                                        </label>
                                        <span>Rate</span>
                                        <input id="exw-footwear-rate" type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Upto( &lt;= ) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Above(&gt;) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                    </div>
                                </fieldset>

                                {/* Section 2 */}
                                <fieldset className="border border-gray-300 p-3 rounded bg-white">
                                    <legend className="text-xs font-normal px-2">Including GST Without Discount</legend>
                                    <div className="grid grid-cols-[100px_40px_48px_40px_48px_40px_48px] gap-x-2 items-center">
                                        <label className="text-right" htmlFor="ingw-readymade-rate">
                                            Readymade
                                        </label>
                                        <span>Rate</span>
                                        <input id="ingw-readymade-rate" type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Upto( &lt;= ) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Above(&gt;) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                    </div>
                                    <div className="grid grid-cols-[100px_40px_48px_40px_48px_40px_48px] gap-x-2 items-center mt-2">
                                        <label className="text-right" htmlFor="ingw-footwear-rate">
                                            Footwear
                                        </label>
                                        <span>Rate</span>
                                        <input id="ingw-footwear-rate" type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Upto( &lt;= ) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Above(&gt;) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                    </div>
                                </fieldset>

                                {/* Section 3 */}
                                <fieldset className="border border-gray-300 p-3 rounded bg-white">
                                    <legend className="text-xs font-normal px-2">Excluding GST With Discount</legend>
                                    <div className="grid grid-cols-[100px_40px_48px_40px_48px_40px_48px] gap-x-2 items-center">
                                        <label className="text-right" htmlFor="exwd-readymade-rate">
                                            Readymade
                                        </label>
                                        <span>Rate</span>
                                        <input id="exwd-readymade-rate" type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Upto( &lt;= ) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Above(&gt;) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                    </div>
                                    <div className="grid grid-cols-[100px_40px_48px_40px_48px_40px_48px] gap-x-2 items-center mt-2">
                                        <label className="text-right" htmlFor="exwd-footwear-rate">
                                            Footwear
                                        </label>
                                        <span>Rate</span>
                                        <input id="exwd-footwear-rate" type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Upto( &lt;= ) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Above(&gt;) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                    </div>
                                </fieldset>

                                {/* Section 4 */}
                                <fieldset className="border border-gray-300 p-3 rounded bg-white">
                                    <legend className="text-xs font-normal px-2">Including GST With Discount</legend>
                                    <div className="grid grid-cols-[100px_40px_48px_40px_48px_40px_48px] gap-x-2 items-center">
                                        <label className="text-right" htmlFor="ingwd-readymade-rate">
                                            Readymade
                                        </label>
                                        <span>Rate</span>
                                        <input id="ingwd-readymade-rate" type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Upto( &lt;= ) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Above(&gt;) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                    </div>
                                    <div className="grid grid-cols-[100px_40px_48px_40px_48px_40px_48px] gap-x-2 items-center mt-2">
                                        <label className="text-right" htmlFor="ingwd-footwear-rate">
                                            Footwear
                                        </label>
                                        <span>Rate</span>
                                        <input id="ingwd-footwear-rate" type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Upto( &lt;= ) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                        <span>Above(&gt;) Tax</span>
                                        <input type="text" className="border border-gray-400 h-6 w-16 px-1" />
                                    </div>
                                </fieldset>
                                {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                            </form>
                        </main>

                        
                    </div>
                );

            case 'Stock':
                return (
                    <div className="bg-gray-200 font-sans min-h-screen flex flex-col bg-white">
                        <div className="w-full overflow-auto border border-gray-300 flex-grow" style={{ height: 'calc(100vh - 110px)' }}>
                            <div className="min-w-[900px]">
                               
                                <form className="p-4 space-y-6 text-xs text-gray-900">
                                    <fieldset className="border border-gray-300 p-3 space-y-3">
                                        <legend className="text-xs font-normal px-1"> </legend>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-14 text-right pt-2 select-none">Cal 1</div>
                                            <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer">
                                                <input type="radio" name="calculation" className="mr-2 mt-1" />
                                                Reduce By Sales
                                            </label>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-14 text-right pt-2 select-none">Cal 2</div>
                                            <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer">
                                                <input type="radio" name="calculation" className="mr-2 mt-1" />
                                                Reduce By Delivery Challan
                                            </label>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-14 text-right pt-2 select-none">Cal 3</div>
                                            <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer">
                                                <input type="radio" name="calculation" className="mr-2 mt-1" />
                                                Reduce By Sales Order
                                            </label>
                                        </div>
                                    </fieldset>

                                    <fieldset className="border border-gray-300 p-3 space-y-3">
                                        <legend className="text-[10px] font-normal text-gray-700 px-1 select-none">Stock Validation</legend>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-14 text-right pt-2 select-none">Cal 1</div>
                                            <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer">
                                                <input type="radio" name="stockValidation" className="mr-2 mt-1" />
                                                Enable
                                            </label>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-14 text-right pt-2 select-none">Cal 2</div>
                                            <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer">
                                                <input type="radio" name="stockValidation" className="mr-2 mt-1" />
                                                Disable
                                            </label>
                                        </div>
                                    </fieldset>

                                    <fieldset className="border border-gray-300 p-3 space-y-4">
                                        <legend className="text-[10px] font-normal text-gray-700 px-1 select-none">Stock Detail Show/Hide</legend>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-36 select-none">Show Purchase Price</div>
                                            <div className="flex space-x-6 flex-1 border border-gray-300 bg-white px-3 py-2">
                                                <label className="flex items-center space-x-1 cursor-pointer">
                                                    <input type="radio" name="showPurchasePrice" />
                                                    <span>Enable</span>
                                                </label>
                                                <label className="flex items-center space-x-1 cursor-pointer">
                                                    <input type="radio" name="showPurchasePrice" />
                                                    <span>Disable</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-36 select-none">Show MRP</div>
                                            <div className="flex space-x-6 flex-1 border border-gray-300 bg-white px-3 py-2">
                                                <label className="flex items-center space-x-1 cursor-pointer">
                                                    <input type="radio" name="showMRP" />
                                                    <span>Enable</span>
                                                </label>
                                                <label className="flex items-center space-x-1 cursor-pointer">
                                                    <input type="radio" name="showMRP" />
                                                    <span>Disable</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                );

            case 'Delivery Challan':
                return (
                    <div className="bg-gray-100 min-h-screen flex flex-col">
                        <main className="flex-grow p-3">
                            <form className="space-y-6 border border-gray-300 p-3 bg-white text-xs text-gray-900 select-none">
                                <fieldset className="border border-gray-300 p-3 space-y-3">
                                    <legend className="text-[10px] text-gray-700 px-1">Sales Order Validation</legend>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex flex-col items-center w-12 text-[10px] font-semibold">
                                            <span>Cal 1</span>
                                            <input type="radio" name="salesOrderValidation" value="enable" className="mt-1" />
                                        </div>
                                        <label className="flex-1 border border-gray-300 p-3 cursor-pointer">Enable</label>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex flex-col items-center w-12 text-[10px] font-semibold">
                                            <span>Cal 2</span>
                                            <input type="radio" name="salesOrderValidation" value="disable" className="mt-1" />
                                        </div>
                                        <label className="flex-1 border border-gray-300 p-3 cursor-pointer">Disable</label>
                                    </div>
                                </fieldset>

                                <fieldset className="border border-gray-300 p-3 space-y-3">
                                    <legend className="text-[10px] text-gray-700 px-1">Sales Order Qty Validation</legend>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex flex-col items-center w-12 text-[10px] font-semibold">
                                            <span>Cal 1</span>
                                            <input type="radio" name="salesOrderQtyValidation" value="enable" className="mt-1" />
                                        </div>
                                        <label className="flex-1 border border-gray-300 p-3 cursor-pointer">Enable</label>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex flex-col items-center w-12 text-[10px] font-semibold">
                                            <span>Cal 2</span>
                                            <input type="radio" name="salesOrderQtyValidation" value="disable" className="mt-1" />
                                        </div>
                                        <label className="flex-1 border border-gray-300 p-3 cursor-pointer">Disable</label>
                                    </div>
                                </fieldset>
                                <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                            </form>
                            {/* Footer Buttons */}
                        
                        </main>

                        
                    </div>
                );

            case 'Sales 1':
                return (
                    <div className="bg-gray-200 min-h-screen flex flex-col">
                        <div className="max-w-full mx-auto border border-gray-900 bg-gray-300">
                           
                            <form className="p-4 border border-gray-300 bg-gray-100 mx-2 my-2 select-none">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3 max-w-5xl mx-auto">
                                    <label className="flex items-center text-sm">On Page Load Cursor Start From</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="cursorStart" value="mode" />
                                            <span>Mode</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="cursorStart" value="mobile" />
                                            <span>Mobile</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="cursorStart" value="salesman" />
                                            <span>Salesman</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="cursorStart" value="barcode" />
                                            <span>Barcode</span>
                                        </label>
                                    </div>

                                    <label className="flex items-center text-sm">In Billing Item Adding Start By</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="billingStart" value="salesman" />
                                            <span>Salesman</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="billingStart" value="barcode" />
                                            <span>Barcode</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="billingStart" value="lookup" />
                                            <span>Lookup</span>
                                        </label>
                                    </div>

                                    <label className="flex items-center text-sm">Sales Return</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="salesReturn" value="anyItem" />
                                            <span>Any Item</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="salesReturn" value="byBill" />
                                            <span>By Bill</span>
                                        </label>
                                    </div>

                                    <label className="flex items-center text-sm">In Sales Bill General Item Sales by OTP</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="salesBillOtp" value="enable" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="salesBillOtp" value="disable" />
                                            <span>Disable</span>
                                        </label>
                                    </div>

                                    <label className="flex items-center text-sm">In Sales Bill Auto Print (When Click On Save)</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="autoPrint" value="enable" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="autoPrint" value="disable" />
                                            <span>Disable</span>
                                        </label>
                                    </div>

                                    <label className="flex items-center text-sm">After Print Auto Open New Bill (When Click On Save)</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="afterPrintOpen" value="enable" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="afterPrintOpen" value="disable" />
                                            <span>Disable</span>
                                        </label>
                                    </div>

                                    <label className="flex items-center text-sm">Printing Option</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="printingOption" value="directPrint" />
                                            <span>Direct Print (Default Printer or ThPrinter)</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="printingOption" value="printPreview" />
                                            <span>Print Preview</span>
                                        </label>
                                    </div>

                                    <label className="flex items-center text-sm">Sale Bill Discount For Employee</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="saleBillDiscount" value="enable" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="saleBillDiscount" value="disable" />
                                            <span>Disable</span>
                                        </label>
                                    </div>

                                    <label className="flex items-center text-sm">Item Discount</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="itemDiscount" value="enable" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="itemDiscount" value="disable" />
                                            <span>Disable</span>
                                        </label>
                                    </div>

                                    <label className="flex items-center text-sm">After Lookup</label>
                                    <div className="col-span-2 flex space-x-8 bg-gray-200 border border-gray-300 rounded px-4 py-2">
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="afterLookup" value="salePrice" />
                                            <span>Sale Price</span>
                                        </label>
                                        <label className="flex items-center space-x-1 text-xs">
                                            <input type="radio" name="afterLookup" value="qty" />
                                            <span>Qty</span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                    </div>
                );

            case 'Sales 2':
                return (
                    <div className="bg-gray-300 font-sans min-h-screen flex flex-col">
                        <div className="max-w-full mx-auto">
                            <form className="border border-gray-400 bg-gray-100 m-2 p-4 select-none">
                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <label className="font-bold w-20">MRP :</label>
                                    <label className="inline-flex items-center space-x-1">
                                        <span>Prefix</span>
                                        <input type="text" className="border border-gray-400 px-1 py-0.5 w-20" />
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <span>Suffix</span>
                                        <input type="text" className="border border-gray-400 px-1 py-0.5 w-20" />
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <span>First No. Plus</span>
                                        <input type="text" className="border border-gray-400 px-1 py-0.5 w-20" />
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <span>Amount Plus</span>
                                        <input type="text" className="border border-gray-400 px-1 py-0.5 w-20" />
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <span>Amount Divide/Multi</span>
                                        <input type="text" className="border border-gray-400 px-1 py-0.5 w-20" />
                                    </label>
                                </div>

                                <div className="mb-4 flex flex-wrap items-center gap-2 border border-gray-300 p-2">
                                    <label className="font-bold w-20">POINT :</label>
                                    <span>Rs.</span>
                                    <input type="text" className="border border-gray-400 px-1 py-0.5 w-28" />
                                    <span>Point</span>
                                    <input type="text" className="border border-gray-400 px-1 py-0.5 w-28" />
                                    <span>Point Value</span>
                                    <input type="text" className="border border-gray-400 px-1 py-0.5 w-28" />
                                </div>

                                <div className="mb-4 flex flex-wrap items-center gap-2 border border-gray-300 p-2">
                                    <label className="font-bold w-20">Bill Disc :</label>
                                    <span>Fix Discount (%)</span>
                                    <input type="text" className="border border-gray-400 px-1 py-0.5 w-24" />
                                    <span>Net Amount Round Off</span>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="netAmountRoundOff" />
                                        <span>Enable</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="netAmountRoundOff" />
                                        <span>Disable</span>
                                    </label>
                                </div>

                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <label className="font-bold w-60">Fill Auto Cash in Sales :</label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="fillAutoCashInSales" />
                                        <span>Enable</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="fillAutoCashInSales" />
                                        <span>Disable</span>
                                    </label>
                                </div>

                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <label className="font-bold w-60">Fill Auto Cash in Sales ( Cash Amount = Net Amount - Card Amount ) :</label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="fillAutoCashInSales2" />
                                        <span>Enable</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="fillAutoCashInSales2" />
                                        <span>Disable</span>
                                    </label>
                                </div>

                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <label className="font-bold w-60">Open Customer Master Page</label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="openCustomerMasterPage" />
                                        <span>Enable</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="openCustomerMasterPage" />
                                        <span>Disable</span>
                                    </label>
                                </div>

                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <label className="font-bold w-60">SaleOrder Format</label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="saleOrderFormat" />
                                        <span>Formate1</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="saleOrderFormat" />
                                        <span>Formate2</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="saleOrderFormat" />
                                        <span>Formate3</span>
                                    </label>
                                </div>

                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <label className="font-bold w-40">Edit Selected Item</label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="editSelectedItem" />
                                        <span>Sale price</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="editSelectedItem" />
                                        <span>Qty</span>
                                    </label>

                                    <label className="font-bold w-24 text-center">Club Item</label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="clubItem" />
                                        <span>Enable</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="clubItem" />
                                        <span>Disable</span>
                                    </label>

                                    <label className="font-bold w-48 text-center">Customer Name on Sale</label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="customerNameOnSale" />
                                        <span>Enable</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="customerNameOnSale" />
                                        <span>Disable</span>
                                    </label>
                                </div>

                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <label className="font-bold w-40">Cash Vs Discount</label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="cashVsDiscount" />
                                        <span>Enable</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-1">
                                        <input type="radio" name="cashVsDiscount" />
                                        <span>Disable</span>
                                    </label>
                                    <span className="text-red-700 font-bold ml-4 whitespace-nowrap">Note : Only Cash Payment work. No part payment and credit amount work with this.</span>
                                </div>
                            </form>
                        </div>
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                    </div>
                );

            case 'Purchase & OS':
                return (
                    <div className="bg-gray-300 font-sans min-h-screen flex flex-col items-center">
                        <div className="max-w-full mx-auto border border-gray-400 bg-gray-300 select-none w-full">
                            <form className="p-4 space-y-4 border border-gray-400 border-t-0 bg-gray-100">
                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                                    <label className="w-28 text-sm text-gray-900 select-none">Lookup</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="lookup" className="cursor-pointer" />
                                            <span>On Key Press</span>
                                        </label>
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="lookup" className="cursor-pointer" />
                                            <span>On Leave</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                                    <label className="w-28 text-sm text-gray-900 select-none">LookUp</label>
                                    <div className="flex items-center space-x-3 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-4xl overflow-x-auto">
                                        <span className="text-sm text-gray-900 select-none">Field_1</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                        <span className="text-sm text-gray-900 select-none">Field_2</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                        <span className="text-sm text-gray-900 select-none">Field_3</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                        <span className="text-sm text-gray-900 select-none">Field_4</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                        <span className="text-sm text-gray-900 select-none">Field_5</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                                    <label className="w-28 text-sm text-gray-900 select-none">TAG :</label>
                                    <div className="flex items-center space-x-3 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-4xl overflow-x-auto">
                                        <span className="text-sm text-gray-900 select-none">Field_1</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                        <span className="text-sm text-gray-900 select-none">Field_2</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                        <span className="text-sm text-gray-900 select-none">Field_3</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                        <span className="text-sm text-gray-900 select-none">Field_4</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                        <span className="text-sm text-gray-900 select-none">Field_5</span>
                                        <select className="border border-gray-400 rounded text-xs text-gray-900 px-1 py-0.5 w-28">
                                            <option></option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                                    <label className="w-28 text-sm text-gray-900 select-none">Clear Master When Item Add :</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="clearMaster" className="cursor-pointer" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="clearMaster" className="cursor-pointer" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                                    <label className="w-28 text-sm text-gray-900 select-none">Clear Item Name and Rate When Item Add :</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="clearItemName" className="cursor-pointer" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="clearItemName" className="cursor-pointer" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                                    <label className="w-28 text-sm text-gray-900 select-none">In Purchase Barcode Scanning :</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="purchaseBarcode" className="cursor-pointer" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="purchaseBarcode" className="cursor-pointer" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                                    <label className="w-28 text-sm text-gray-900 select-none">After Adding New Item Cursor On</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm text-gray-900">
                                        <label className="flex items-center space-x-2 cursor-pointer select-none">
                                            <input type="radio" name="newItemCursor" className="cursor-pointer" />
                                            <span>Item Name</span>
                                        </label>
                                        <label className="flex items-center space-x-2 cursor-pointer select-none">
                                            <input type="radio" name="newItemCursor" className="cursor-pointer" />
                                            <span>On Top</span>
                                        </label>
                                        <label className="flex items-center space-x-2 cursor-pointer select-none">
                                            <input type="radio" name="newItemCursor" className="cursor-pointer" />
                                            <span>On Size</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                                    <label className="w-28 text-sm text-gray-900 select-none">Show Key Press Result</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="showKeyPress" className="cursor-pointer" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="showKeyPress" className="cursor-pointer" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
                                    <label className="w-28 text-sm text-gray-900 select-none">Unique Barcode</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="uniqueBarcode" className="cursor-pointer" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                            <input type="radio" name="uniqueBarcode" className="cursor-pointer" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                    </div>
                );

            case 'General':
                return (
                    <div className="bg-gray-300 min-h-screen flex flex-col items-center p-2">
                        
                          
                            <form className="p-3 border border-gray-400 bg-gray-100 text-xs text-gray-900 space-y-4" autoComplete="off" spellCheck="false" noValidate>
                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
                                    <label className="w-40">Customer Show In List</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="customerShow" value="onlyName" className="form-radio" />
                                            <span>Only Name</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="customerShow" value="nameMobile" className="form-radio" />
                                            <span>Name + MobileNo</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="customerShow" value="nameCity" className="form-radio" />
                                            <span>Name + City</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
                                    <label className="w-40">Show DashBoard</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="showDashboard" value="enable" className="form-radio" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="showDashboard" value="disable" className="form-radio" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
                                    <label className="w-40">Sales Print While Adjust Credit Note</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="salesPrint" value="both" className="form-radio" />
                                            <span>Both</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="salesPrint" value="onlySaleBill" className="form-radio" />
                                            <span>Only Sale Bill</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="salesPrint" value="saleWithReturn" className="form-radio" />
                                            <span>Sale with Sales Return</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2 space-y-2 md:space-y-0">
                                    <label className="w-40">Stock Verification</label>
                                    <div className="flex space-x-2 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <select name="type1" className="border border-gray-400 rounded text-xs px-1 py-0.5 w-24" aria-label="Type 1">
                                            <option>Type_1</option>
                                        </select>
                                        <select name="type2" className="border border-gray-400 rounded text-xs px-1 py-0.5 w-24" aria-label="Type 2">
                                            <option>Type_2</option>
                                        </select>
                                        <select name="type3" className="border border-gray-400 rounded text-xs px-1 py-0.5 w-24" aria-label="Type 3">
                                            <option>Type_3</option>
                                        </select>
                                        <select name="type4" className="border border-gray-400 rounded text-xs px-1 py-0.5 w-24" aria-label="Type 4">
                                            <option>Type_4</option>
                                        </select>
                                        <select name="type5" className="border border-gray-400 rounded text-xs px-1 py-0.5 w-24" aria-label="Type 5">
                                            <option>Type_5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
                                    <label className="w-40">Email on Closing</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="emailClosing" value="enable" className="form-radio" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="emailClosing" value="disable" className="form-radio" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
                                    <label className="w-40">Voucher Amount</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="voucherAmount" value="billToBill" className="form-radio" />
                                            <span>Bill To Bill</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="voucherAmount" value="multipleBill" className="form-radio" />
                                            <span>Multiple Bill (No Editing option)</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
                                    <label className="w-40">Item Already Exist Msg</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="itemExistMsg" value="enable" className="form-radio" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="itemExistMsg" value="disable" className="form-radio" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
                                    <label className="w-40">Barcode Scanning</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="barcodeScanning" value="enable" className="form-radio" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="barcodeScanning" value="disable" className="form-radio" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
                                    <label className="w-40">Show Reminder</label>
                                    <div className="flex space-x-6 bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="showReminder" value="enable" className="form-radio" />
                                            <span>Enable</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input type="radio" name="showReminder" value="disable" className="form-radio" />
                                            <span>Disable</span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        

                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                            <button 
                                key={idx} 
                                className="bg-white  text-sm font-medium px-6 py-2 rounded-md border border-red-100 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">
                                {btn}
                            </button>
                            ))}
                        </footer>
                    </div>
                );

            // Implement other tabs similarly...
            default:
                return (
                    <div className="p-4 text-center text-gray-600">
                        <p>{activeTab} content will be displayed here.</p>
                    </div>
                );
        }
    };

    return (
        <>
            <title>Calculation</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <style>{`
                      .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                      }
                      .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                      }
                    `}</style>

            <div className="min-h-screen bg-gray-100 flex flex-col pb-16">
                <div className="max-w-full mx-auto border border-gray-300 mt-2 bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-gray-600 text-center font-semibold text-white py-2 select-none">Calculation</div>

                    {/* Tabs */}
                    <div className="border-b border-gray-300 overflow-x-auto">
                        <div className="flex whitespace-nowrap text-xs text-gray-700 font-sans select-none">
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`px-3 py-2 border-r border-gray-300 hover:bg-gray-100 cursor-pointer ${activeTab === tab ? 'bg-gray-100 font-medium' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    {renderTabContent()}
                </div>
            </div>
        </>
    );
};

export default CalculationPage;

