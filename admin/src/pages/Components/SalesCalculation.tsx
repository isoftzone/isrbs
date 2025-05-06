


import React, { useState, useRef } from 'react';



const SalesCalculation = () => {
    const [activeTab, setActiveTab] = useState('Sales Entry');
    const [selectedCalculation, setSelectedCalculation] = useState('');
    const [selectedRoundOff, setSelectedRoundOff] = useState('');

    // Tab definitions
    const tabs = [
        'Sales Entry',
        'Sales GST',
        'Delivery Challan',
        'Sales 1',
        'Sales 2',
        
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

   
            case 'Sales Entry':
                return (
                    <div className="w-full border-gray-200 bg-gray-300">
                        {/* Content */}
                        <div className="p-4 text-gray-800 select-text bg-white">
                            {/* Tax With Including GST */}
                            <section className="mb-8 leading-relaxed">
                                <div className="leading-relaxed">
                                    <div className="text-sm font-semibold leading-10">Tax With Including GST</div>
                                    <div className="text-sm font-bold text-red-800 select-text  [word-spacing:5px]">TAX = CGST + SGST + IGST</div>
                                </div>

                                {/* Cal 1 */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
                                    <input type="radio" name="taxInc" className="w-5 h-5 mt-1 md:mt-0" />
                                    <div className="flex items-center justify-between gap-3 border border-gray-300 rounded-lg px-4 py-3 w-full">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="text-base font-bold select-text">EX:</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Total Amount</div>
                                                <div className="font-mono font-semibold">100</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Net Amount</div>
                                                <div className="font-mono font-semibold">100</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 2 */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
                                    <input type="radio" name="taxInc" className="w-5 h-5 mt-1 md:mt-0" />
                                    <div className="flex  items-center justify-between gap-3 border border-gray-300 rounded-lg px-4 py-3 w-full">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="text-base font-bold select-text">EX:</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Total Amount</div>
                                                <div className="font-mono font-semibold">100</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Fright Amount</div>
                                                <div className="font-mono font-semibold">5</div>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Net Amount</div>
                                                <div className="font-mono font-semibold">105</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 3 */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
                                    <input type="radio" name="taxInc" className="w-5 h-5 mt-1 md:mt-0" />
                                    <div className="flex flex-wrap items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 w-full">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="text-base font-bold select-text">EX:</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Total Amount</div>
                                                <div className="font-mono font-semibold">100</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Fright Amount</div>
                                                <div className="font-mono font-semibold">5</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Other Amount</div>
                                                <div className="font-mono font-semibold">10</div>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Net Amount</div>
                                                <div className="font-mono font-semibold">115</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 4 */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                    <input type="radio" name="taxInc" className="w-5 h-5 mt-1 md:mt-0" />
                                    <div className="flex flex-wrap items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 w-full">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="text-base font-bold select-text">EX:</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Total Amount</div>
                                                <div className="font-mono font-semibold">100</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Fright Amount</div>
                                                <div className="font-mono font-semibold">5</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Other Amount</div>
                                                <div className="font-mono font-semibold">10</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Commision Amount</div>
                                                <div className="font-mono font-semibold">50</div>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Net Amount</div>
                                                <div className="font-mono font-semibold">165</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Tax With Excluding GST */}
                            <section className="leading-relaxed">
                                <div className="leading-relaxed">
                                    <div className="text-sm font-semibold leading-10">Tax With Excluding GST</div>
                                    <div className="text-sm font-bold text-red-800 select-text  [word-spacing:5px]">TAX = CGST + SGST + IGST</div>
                                </div>

                                {/* Cal 1 */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
                                    <input type="radio" name="taxExc" className="w-5 h-5 mt-1 md:mt-0" />
                                    <div className="flex flex-wrap items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 w-full">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="text-base font-bold select-text">EX:</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Total Amount</div>
                                                <div className="font-mono font-semibold">100</div>
                                            </div>
                                            <div className="font-bold text-xl">-</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Disc (%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Disc (Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Amt After Disc.</div>
                                                <div className="font-mono font-semibold">95</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Net Amount</div>
                                                <div className="font-mono font-semibold">99.75</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 2 */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
                                    <input type="radio" name="taxExc" className="w-5 h-5 mt-1 md:mt-0" />
                                    <div className="flex flex-wrap items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 w-full">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="text-base font-bold select-text">EX:</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Total Amount</div>
                                                <div className="font-mono font-semibold">100</div>
                                            </div>
                                            <div className="font-bold text-xl">-</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Disc (%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Disc (Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Amt After Disc.</div>
                                                <div className="font-mono font-semibold">95</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>F. Amount</div>
                                                <div className="font-mono font-semibold">5</div>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Net Amount</div>
                                                <div className="font-mono font-semibold">104.75</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 3 */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
                                    <input type="radio" name="taxExc" className="w-5 h-5 mt-1 md:mt-0" />
                                    <div className="flex flex-wrap items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 w-full">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="text-base font-bold select-text">EX:</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Total Amount</div>
                                                <div className="font-mono font-semibold">100</div>
                                            </div>
                                            <div className="font-bold text-xl">-</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Disc (%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Disc (Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Amt After Disc.</div>
                                                <div className="font-mono font-semibold">95</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>F. Amount</div>
                                                <div className="font-mono font-semibold">5</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>OA</div>
                                                <div className="font-mono font-semibold">10</div>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Net Amount</div>
                                                <div className="font-mono font-semibold">114.75</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 4 */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                    <input type="radio" name="taxExc" className="w-5 h-5 mt-1 md:mt-0" />
                                    <div className="flex flex-wrap items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 w-full">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="text-base font-bold select-text">EX:</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Total Amount</div>
                                                <div className="font-mono font-semibold">100</div>
                                            </div>
                                            <div className="font-bold text-xl">-</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Disc (%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Disc (Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Amt After Disc.</div>
                                                <div className="font-mono font-semibold">95</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex items-center gap-1 text-base font-mono">
                                                <span>(</span>
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                                <span>)</span>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>F. Amt</div>
                                                <div className="font-mono font-semibold">5</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>OA</div>
                                                <div className="font-mono font-semibold">10</div>
                                            </div>
                                            <div className="font-bold text-xl">+</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Com. Amt</div>
                                                <div className="font-mono font-semibold">10</div>
                                            </div>
                                            <div className="font-bold text-xl">=</div>
                                            <div className="flex flex-col items-center text-base">
                                                <div>Net Amt</div>
                                                <div className="font-mono font-semibold">124.75</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Footer Buttons */}
                        <footer className="p-4 flex justify-center space-x-4 select-none bg-white">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                                <button key={idx} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline text-base">
                                    {btn}
                                </button>
                            ))}
                        </footer>
                    </div>
                );

            case 'Sales GST':
                return (
                    <main className="border border-gray-300 m-1 p-2 min-h-[300px] select-none">
                        <form>
                            <fieldset className="border border-gray-300 p-2 mb-4">
                                <legend className="text-base font-sans text-black ml-2 px-1 select-none">Before Discount</legend>

                                <div className="flex items-start space-x-2 mb-3">
                                    <div className="flex flex-col items-center text-sm font-sans text-black w-12 select-none">
                                        <input type="radio" name="beforeDiscount" id="beforeCal1" className="mt-1" />
                                        <label htmlFor="beforeCal1" className="mt-1 text-sm">
                                            Cal 1
                                        </label>
                                    </div>
                                    <div className="border border-gray-300 bg-white-600 p-2 flex-1 text-sm font-sans text-black leading-tight">
                                        <p className="text-sm">Excluding GST</p>
                                        <p className="text-sm">Sale Price + Tax = Amount</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <div className="flex flex-col items-center text-sm font-sans text-black w-12 select-none">
                                        <input type="radio" name="beforeDiscount" id="beforeCal2" className="mt-1" />
                                        <label htmlFor="beforeCal2" className="mt-1 text-sm">
                                            Cal 2
                                        </label>
                                    </div>
                                    <div className="border border-gray-300 bg-white-600 p-2 flex-1 text-sm font-sans text-black leading-tight">
                                        <p className="text-sm">Including GST</p>
                                        <p className="text-sm">Sale Price = Amount</p>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className="border border-gray-300 p-2">
                                <legend className="text-base font-sans text-black ml-2 px-1 select-none">After Discount</legend>

                                <div className="flex items-start space-x-2 mb-3">
                                    <div className="flex flex-col items-center text-sm font-sans text-black w-12 select-none">
                                        <input type="radio" name="afterDiscount" id="afterCal1" className="mt-1" />
                                        <label htmlFor="afterCal1" className="mt-1 text-sm">
                                            Cal 1
                                        </label>
                                    </div>
                                    <div className="border border-gray-300 bg-white-600 p-2 flex-1 text-sm font-sans text-black leading-tight">
                                        <p className="text-sm">Excluding GST</p>
                                        <p className="text-sm">Sale Price + Tax = Amount</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <div className="flex flex-col items-center text-sm font-sans text-black w-12 select-none">
                                        <input type="radio" name="afterDiscount" id="afterCal2" className="mt-1" />
                                        <label htmlFor="afterCal2" className="mt-1 text-sm">
                                            Cal 2
                                        </label>
                                    </div>
                                    <div className="border border-gray-300 bg-gray-100 p-2 flex-1 text-sm font-sans text-black leading-tight">
                                        <p className="text-sm">Including GST</p>
                                        <p className="text-sm">Sale Price = Amount</p>
                                    </div>
                                </div>
                            </fieldset>
                            {/* Footer Buttons */}
                            <footer className=" p-4 flex justify-center space-x-4 select-none">
                                {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                                    <button key={idx} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base">
                                        {btn}
                                    </button>
                                ))}
                            </footer>
                        </form>
                    </main>
                );

            case 'Delivery Challan':
                return (
                    <div className="bg-white-600 min-h-screen flex flex-col">
                        <fieldset className="border border-gray-300 p-3 space-y-3">
                            <legend className="text-sm text-gray-700 px-1">Sales Order Validation</legend>
                            <div className="flex items-center space-x-3">
                                <div className="flex flex-col items-center w-12 text-sm font-semibold">
                                    <span className="text-sm">Cal 1</span>
                                    <input type="radio" name="salesOrderValidation" value="enable" className="mt-1" />
                                </div>
                                <label className="flex-1 border border-gray-300 p-3 cursor-pointer text-sm">Enable</label>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex flex-col items-center w-12 text-sm font-semibold">
                                    <span className="text-sm">Cal 2</span>
                                    <input type="radio" name="salesOrderValidation" value="disable" className="mt-1" />
                                </div>
                                <label className="flex-1 border border-gray-300 p-3 cursor-pointer text-sm">Disable</label>
                            </div>
                        </fieldset>

                        <fieldset className="border border-gray-300 p-3 space-y-3">
                            <legend className="text-sm text-gray-700 px-1">Sales Order Qty Validation</legend>
                            <div className="flex items-center space-x-3">
                                <div className="flex flex-col items-center w-12 text-sm font-semibold">
                                    <span className="text-sm">Cal 1</span>
                                    <input type="radio" name="salesOrderQtyValidation" value="enable" className="mt-1" />
                                </div>
                                <label className="flex-1 border border-gray-300 p-3 cursor-pointer text-sm">Enable</label>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex flex-col items-center w-12 text-sm font-semibold">
                                    <span className="text-sm">Cal 2</span>
                                    <input type="radio" name="salesOrderQtyValidation" value="disable" className="mt-1" />
                                </div>
                                <label className="flex-1 border border-gray-300 p-3 cursor-pointer text-sm">Disable</label>
                            </div>
                        </fieldset>
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

            case 'Sales 1':
                return (
                    <div>
                        <label className="flex items-center text-base leading-10">On Page Load Cursor Start From</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="cursorStart" value="mode" />
                                <span>Mode</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="cursorStart" value="mobile" />
                                <span>Mobile</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="cursorStart" value="salesman" />
                                <span>Salesman</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="cursorStart" value="barcode" />
                                <span>Barcode</span>
                            </label>
                        </div>

                        <label className="flex items-center text-base mt-4">In Billing Item Adding Start By</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="billingStart" value="salesman" />
                                <span>Salesman</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="billingStart" value="barcode" />
                                <span>Barcode</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="billingStart" value="lookup" />
                                <span>Lookup</span>
                            </label>
                        </div>

                        <label className="flex items-center text-base mt-4">Sales Return</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="salesReturn" value="anyItem" />
                                <span>Any Item</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="salesReturn" value="byBill" />
                                <span>By Bill</span>
                            </label>
                        </div>

                        <label className="flex items-center text-base mt-4">In Sales Bill General Item Sales by OTP</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="salesBillOtp" value="enable" />
                                <span>Enable</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="salesBillOtp" value="disable" />
                                <span>Disable</span>
                            </label>
                        </div>

                        <label className="flex items-center text-base mt-4">In Sales Bill Auto Print (When Click On Save)</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="autoPrint" value="enable" />
                                <span>Enable</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="autoPrint" value="disable" />
                                <span>Disable</span>
                            </label>
                        </div>

                        <label className="flex items-center text-base mt-4">After Print Auto Open New Bill (When Click On Save)</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="afterPrintOpen" value="enable" />
                                <span>Enable</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="afterPrintOpen" value="disable" />
                                <span>Disable</span>
                            </label>
                        </div>

                        <label className="flex items-center text-base mt-4">Printing Option</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="printingOption" value="directPrint" />
                                <span>Direct Print (Default Printer or ThPrinter)</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="printingOption" value="printPreview" />
                                <span>Print Preview</span>
                            </label>
                        </div>

                        <label className="flex items-center text-base mt-4">Sale Bill Discount For Employee</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="saleBillDiscount" value="enable" />
                                <span>Enable</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="saleBillDiscount" value="disable" />
                                <span>Disable</span>
                            </label>
                        </div>

                        <label className="flex items-center text-base mt-4">Item Discount</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="itemDiscount" value="enable" />
                                <span>Enable</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="itemDiscount" value="disable" />
                                <span>Disable</span>
                            </label>
                        </div>

                        <label className="flex items-center text-base mt-4">After Lookup</label>
                        <div className="col-span-2 flex space-x-8 bg-white-600 border border-gray-300 rounded px-4 py-2">
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="afterLookup" value="salePrice" />
                                <span>Sale Price</span>
                            </label>
                            <label className="flex items-center space-x-1 text-sm">
                                <input type="radio" name="afterLookup" value="qty" />
                                <span>Qty</span>
                            </label>
                        </div>

                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none mt-4">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                                <button key={idx} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base">
                                    {btn}
                                </button>
                            ))}
                        </footer>
                    </div>
                );

            case 'Sales 2':
                return (
                    <div>
                        <div>
                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                <label className="font-bold w-20 text-base leading-10">MRP :</label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <span>Prefix</span>
                                    <input type="text" className="border border-gray-400 px-1 py-0.5 w-20 text-sm" />
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <span>Suffix</span>
                                    <input type="text" className="border border-gray-400 px-1 py-0.5 w-20 text-sm" />
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <span>First No. Plus</span>
                                    <input type="text" className="border border-gray-400 px-1 py-0.5 w-20 text-sm" />
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <span>Amount Plus</span>
                                    <input type="text" className="border border-gray-400 px-1 py-0.5 w-20 text-sm" />
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <span>Amount Divide/Multi</span>
                                    <input type="text" className="border border-gray-400 px-1 py-0.5 w-20 text-sm" />
                                </label>
                            </div>

                            <div className="mb-4 flex flex-wrap items-center gap-2 border border-gray-300 p-2">
                                <label className="font-bold w-20 text-base">POINT :</label>
                                <span className="text-sm">Rs.</span>
                                <input type="text" className="border border-gray-400 px-1 py-0.5 w-28 text-sm" />
                                <span className="text-sm">Point</span>
                                <input type="text" className="border border-gray-400 px-1 py-0.5 w-28 text-sm" />
                                <span className="text-sm">Point Value</span>
                                <input type="text" className="border border-gray-400 px-1 py-0.5 w-28 text-sm" />
                            </div>

                            <div className="mb-4 flex flex-wrap items-center gap-2 border border-gray-300 p-2">
                                <label className="font-bold w-20 text-base">Bill Disc :</label>
                                <span className="text-sm">Fix Discount (%)</span>
                                <input type="text" className="border border-gray-400 px-1 py-0.5 w-24 text-sm" />
                                <span className="text-sm">Net Amount Round Off</span>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="netAmountRoundOff" />
                                    <span>Enable</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="netAmountRoundOff" />
                                    <span>Disable</span>
                                </label>
                            </div>

                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                <label className="font-bold w-60 text-base">Fill Auto Cash in Sales :</label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="fillAutoCashInSales" />
                                    <span>Enable</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="fillAutoCashInSales" />
                                    <span>Disable</span>
                                </label>
                            </div>

                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                <label className="font-bold w-60 text-base">Fill Auto Cash in Sales ( Cash Amount = Net Amount - Card Amount ) :</label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="fillAutoCashInSales2" />
                                    <span>Enable</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="fillAutoCashInSales2" />
                                    <span>Disable</span>
                                </label>
                            </div>

                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                <label className="font-bold w-60 text-base">Open Customer Master Page</label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="openCustomerMasterPage" />
                                    <span>Enable</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="openCustomerMasterPage" />
                                    <span>Disable</span>
                                </label>
                            </div>

                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                <label className="font-bold w-60 text-base">SaleOrder Format</label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="saleOrderFormat" />
                                    <span>Formate1</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="saleOrderFormat" />
                                    <span>Formate2</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="saleOrderFormat" />
                                    <span>Formate3</span>
                                </label>
                            </div>

                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                <label className="font-bold w-40 text-base">Edit Selected Item</label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="editSelectedItem" />
                                    <span>Sale price</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="editSelectedItem" />
                                    <span>Qty</span>
                                </label>

                                <label className="font-bold w-24 text-center text-base">Club Item</label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="clubItem" />
                                    <span>Enable</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="clubItem" />
                                    <span>Disable</span>
                                </label>

                                <label className="font-bold w-48 text-center text-base">Customer Name on Sale</label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="customerNameOnSale" />
                                    <span>Enable</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="customerNameOnSale" />
                                    <span>Disable</span>
                                </label>
                            </div>

                            <div className="mb-4 flex flex-wrap items-center gap-2">
                                <label className="font-bold w-40 text-base">Cash Vs Discount</label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="cashVsDiscount" />
                                    <span>Enable</span>
                                </label>
                                <label className="inline-flex items-center space-x-1 text-sm">
                                    <input type="radio" name="cashVsDiscount" />
                                    <span>Disable</span>
                                </label>
                                <span className="text-red-700 font-bold ml-4 whitespace-nowrap text-sm">Note : Only Cash Payment work. No part payment and credit amount work with this.</span>
                            </div>
                        </div>
                        {/* Footer Buttons */}
                        <footer className=" p-4 flex justify-center space-x-4 select-none">
                            {['Update', 'Cancel', 'Close'].map((btn, idx) => (
                                <button key={idx} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base">
                                    {btn}
                                </button>
                            ))}
                        </footer>
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

export default SalesCalculation;