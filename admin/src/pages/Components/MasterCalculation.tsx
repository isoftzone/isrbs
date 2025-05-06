

import React, { useState, useRef } from 'react';



const MasterCalculation = () => {
    const [activeTab, setActiveTab] = useState('Item Rate Calculation');
    const [selectedCalculation, setSelectedCalculation] = useState('');
    const [selectedRoundOff, setSelectedRoundOff] = useState('');

    // Tab definitions
    const tabs = [
        'Item Rate Calculation',
        'MRP',
        'Sale Price',
        'SalePrice',
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
                                    <label htmlFor={option.id} className="text-base font-semibold select-none">
                                        {' '}
                                        {/* Increased to text-base */}
                                        {option.label}
                                    </label>
                                </div>
                                <div className="border border-gray-200 bg-gray-50 p-3 flex-1 text-xs text-gray-700 font-sans rounded-md">
                                    <div className="font-semibold mb-1 text-lg">{option.title}</div> {/* Increased to text-lg */}
                                    <div className="text-sm">{option.description}</div> {/* Increased to text-sm */}
                                </div>
                            </div>
                        ))}
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                                <button key={idx} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base">
                                    {' '}
                                    {/* Increased to text-base */}
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
                            <div className="mb-2 font-semibold text-lg">MRP Calculation</div> {/* Increased to text-lg */}
                            {mrpCalculationOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className={`flex flex-col sm:flex-row items-start border border-gray-300 bg-gray-50 p-2 mb-2 rounded \${
                                                                selectedCalculation === option.id ? 'border-blue-500' : ''
                                                            }`}
                                >
                                    <div className="flex items-center mb-1 sm:mb-0 sm:mr-2">
                                        <input type="radio" name="calculation" className="mt-0.5 mr-1" checked={selectedCalculation === option.id} onChange={() => setSelectedCalculation(option.id)} />
                                        <label className="text-base font-medium select-none">{option.label}</label> {/* Increased to text-base */}
                                    </div>
                                    <div className="flex flex-wrap gap-x-1 gap-y-1 text-sm leading-tight sm:leading-none">
                                        {' '}
                                        {/* Increased to text-sm */}
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

                        <div className="border border-gray-400 mt-4 p-3 bg-white-600 rounded">
                            <div className="mb-2 font-semibold text-lg">Round Off Calculation</div> {/* Increased to text-lg */}
                            {roundOffOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className={`flex flex-col sm:flex-row items-start sm:items-center mb-2 \${
                                                                selectedRoundOff === option.id ? 'text-blue-600' : ''
                                                            }`}
                                >
                                    <div className="flex items-center mb-1 sm:mb-0 sm:mr-2">
                                        <input type="radio" name="roundoff" className="mr-1" checked={selectedRoundOff === option.id} onChange={() => setSelectedRoundOff(option.id)} />
                                        <label className="text-base font-medium select-none">{option.label}</label> {/* Increased to text-base */}
                                    </div>
                                    <div className="border border-gray-300 bg-white-600 px-2 py-1 text-sm rounded w-full sm:w-auto">{option.description}</div> {/* Increased to text-sm */}
                                </div>
                            ))}
                        </div>
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                                <button key={idx} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base">
                                    {' '}
                                    {/* Increased to text-base */}
                                    {btn}
                                </button>
                            ))}
                        </footer>
                    </div>
                );

            case 'Sale Price':
                return (
                    <form className="space-y-6 text-sm text-gray-800">
                        {' '}
                        {/* Increased to text-sm */}
                        {/* Sale Price Calculation Section */}
                        <fieldset className="border border-gray-300 rounded bg-gray-50 p-3">
                            <legend className="text-sm font-normal ml-1 px-1">Sale Price Calculation</legend> {/* Increased to text-sm */}
                            <div className="space-y-3">
                                {['Cal 1', 'Cal 2', 'Cal 3', 'Cal 4'].map((cal, idx) => (
                                    <label key={idx} className="flex flex-col sm:flex-row items-start gap-2">
                                        <input type="radio" name="salePriceCalc" className="mt-1" />
                                        <span className="w-16 font-semibold leading-5 text-base">{cal}</span> {/* Added text-base */}
                                        <div className="flex-1 border border-gray-300 bg-white rounded px-3 py-2 text-sm flex flex-wrap items-center gap-1">
                                            {' '}
                                            {/* Increased to text-sm */}
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
                            <legend className="text-sm font-normal ml-1 px-1">Round Off Calculation</legend> {/* Increased to text-sm */}
                            <div className="space-y-3">
                                {['Cal 1', 'Cal 2', 'Cal 3', 'Cal 4'].map((cal, idx) => (
                                    <label key={idx} className="flex flex-col sm:flex-row items-start gap-2">
                                        <input type="radio" name="roundOffCalc" className="mt-1" />
                                        <span className="w-16 font-semibold leading-5 text-base">{cal}</span> {/* Added text-base */}
                                        <div className="flex-1 border border-gray-300 bg-white rounded px-3 py-2 text-sm flex flex-wrap items-center gap-1">
                                            {' '}
                                            {/* Increased to text-sm */}
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
                                                    <span className="font-bold">Sale Price</span> <span>= Round Off ; Where ( RS.</span>
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
                                <button key={idx} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base">
                                    {' '}
                                    {/* Added text-base */}
                                    {btn}
                                </button>
                            ))}
                        </footer>
                    </form>
                );

            case 'SalePrice':
                return (
                    <div className="bg-white-600 min-h-screen flex flex-col">
                        {/* Header */}

                        {/* Mrp To SalePrice Section */}
                        <fieldset className="flex flex-wrap sm:flex-nowrap items-center space-x-6 border border-gray-300 bg-white-600 p-3 rounded select-none">
                            <legend className="font-normal w-auto min-w-[110px] leading-9 text-base">Mrp To SalePrice</legend>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-1 text-sm">
                                    <input type="radio" name="mrpToSalePrice" />
                                    <span>Percentage</span>
                                </label>
                                <label className="flex items-center space-x-1 text-sm">
                                    <input type="radio" name="mrpToSalePrice" />
                                    <span>Rs.</span>
                                </label>
                                <label className="flex items-center space-x-1 ml-6 text-sm">
                                    <input type="radio" name="plusMinus" />
                                    <span>Plus (+)</span>
                                </label>
                                <label className="flex items-center space-x-1 text-sm">
                                    <input type="radio" name="plusMinus" />
                                    <span>Minus (-)</span>
                                </label>
                            </div>
                        </fieldset>

                        {/* Sale Price 1-4 Calculation Section */}
                        <fieldset className="border border-gray-300 rounded p-3 space-y-4">
                            <legend className="font-semibold text-gray-900 text-sm px-2 -mt-3 select-none leading-9 text-base">Sale Price 1 - 4 Calculation</legend>

                            {/* Auto Calculate Row */}
                            <div className="flex flex-wrap sm:flex-nowrap items-center space-x-6 border border-gray-300 bg-white-600 p-3 rounded select-none">
                                <label className="w-32 font-normal text-sm">Auto Calculate</label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center space-x-1 text-sm">
                                        <input type="radio" name="autoCalculate" />
                                        <span>Enable</span>
                                    </label>
                                    <label className="flex items-center space-x-1 text-sm">
                                        <input type="radio" name="autoCalculate" />
                                        <span>Disable</span>
                                    </label>
                                </div>
                            </div>

                            {['SP1', 'SP2', 'SP3', 'SP4'].map((sp, idx) => (
                                <div key={idx} className="flex flex-wrap sm:flex-nowrap items-center space-x-3 border border-gray-300 bg-gray-100 p-3 rounded select-none">
                                    <label className="w-16 font-normal text-sm">{sp}</label>
                                    <select className="border border-gray-300 bg-white h-8 w-32"></select>
                                    <select className="border border-gray-300 bg-white h-8 w-32"></select>
                                    <input type="text" className="border border-gray-300 h-8 w-24 px-1" />
                                    <span className="select-none text-sm">%</span>
                                </div>
                            ))}
                        </fieldset>
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                                <button key={idx} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base">
                                    {btn}
                                </button>
                            ))}
                        </footer>

                        {/* Footer Buttons */}
                    </div>
                );




            // Implement other tabs similarly...
            default:
                return (
                    <div className="p-8 text-center text-gray-600">
                        <p>{activeTab} content will be displayed here.</p>
                    </div>
                );
        }
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Calculation</h1>

                {/* Tabs */}
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8 overflow-x-auto scrollbar-hide ">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === tab ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="bg-white shadow rounded-lg mt-6 overflow-hidden">{renderTabContent()}</div>
            </div>
            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    `}</style>
        </div>
    );
};

export default MasterCalculation;



