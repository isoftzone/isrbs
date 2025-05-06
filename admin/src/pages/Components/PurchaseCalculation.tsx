

import React, { useState, useRef } from 'react';



const PurchaseCalculation = () => {
    const [activeTab, setActiveTab] = useState('Purchase Entry');
    const [selectedCalculation, setSelectedCalculation] = useState('');
    const [selectedRoundOff, setSelectedRoundOff] = useState('');

    // Tab definitions
    const tabs = [
        'Purchase Entry',
        'Purchase GST',
        'Tax Slab',
        'Stock',
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
           
            case 'Purchase Entry':
                return (
                    <div className="max-w-full mx-auto border bg-white-600 select-none w-full ">
                        {/* Net Amount Calculation */}
                        <section className="leading-10">
                            <div>
                                <p className="text-sm font-semibold leading-10">Net Amount Calculation</p>
                                <span className="text-sm font-bold text-red-800 select-text  [word-spacing:5px]">TAX = CGST + SGST + IGST</span>
                            </div>
                            <div className="space-y-4">
                                {/* Cal 1 */}
                                <div className="flex items-start space-x-3">
                                    <div className="pt-2">
                                        <input type="radio" name="netCalc" id="netCalc1" className="w-4 h-4 mt-1" aria-label="Cal 1" />
                                    </div>
                                    <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-2 items-center border border-gray-300 rounded bg-white p-3 ">
                                        <div className="text-right font-semibold text-sm">
                                            Cal 1<div className="text-xs font-normal px-1 py-1">EX:</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Total Amount</div>

                                            <div className="text-sm text-center">100</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Net Amount</div>
                                            <div className="text-sm font-normal">105</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 2 */}
                                <div className="flex items-start space-x-3">
                                    <div className="pt-2">
                                        <input type="radio" name="netCalc" id="netCalc2" className="w-4 h-4 mt-1" aria-label="Cal 2" />
                                    </div>
                                    <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-2 items-center border border-gray-300 rounded bg-white p-3">
                                        <div className="text-right font-semibold text-sm">
                                            Cal 2<div className="text-xs font-normal px-1 py-1">EX:</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Total Amount</div>

                                            <div className="text-sm text-center">100</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">Fright Amount</div>
                                            <div className="text-sm font-normal">5</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Net Amount</div>
                                            <div className="text-sm font-normal">110</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 3 */}
                                <div className="flex items-start space-x-3">
                                    <div className="pt-2">
                                        <input type="radio" name="netCalc" id="netCalc3" className="w-4 h-4 mt-1" aria-label="Cal 3" />
                                    </div>
                                    <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-2 items-center border border-gray-300 rounded bg-white p-3">
                                        <div className="text-right font-semibold text-sm">
                                            Cal 3<div className="text-xs font-normal px-1 py-1">EX:</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Total Amount</div>

                                            <div className="text-sm text-center">100</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">Fright Amount</div>
                                            <div className="text-sm font-normal">5</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">Other Amount</div>
                                            <div className="text-sm font-normal">10</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Net Amount</div>
                                            <div className="text-sm font-normal">120</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 4 */}
                                <div className="flex items-start space-x-3">
                                    <div className="pt-2">
                                        <input type="radio" name="netCalc" id="netCalc4" className="w-4 h-4 mt-1" aria-label="Cal 4" />
                                    </div>
                                    <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-2 items-center border border-gray-300 rounded bg-white p-3">
                                        <div className="text-right font-semibold text-sm">
                                            Cal 4<div className="text-xs font-normal px-1 py-1">EX:</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Total Amount</div>

                                            <div className="text-sm text-center">100</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">Fright Amount</div>
                                            <div className="text-sm font-normal">5</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">Other Amount</div>
                                            <div className="text-sm font-normal">10</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">Commission Amount</div>
                                            <div className="text-sm font-normal">50</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Net Amount</div>
                                            <div className="text-sm font-normal">170</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Net Amount Calculation (With Discount) */}
                        <section>
                            <div>
                                <p className="text-sm font-semibold leading-10">Net Amount Calculation (With Discount)</p>
                                <span className="text-sm font-bold text-red-800 select-text leading-10 [word-spacing:5px]">TAX = CGST + SGST + IGST</span>
                            </div>
                            <div className="space-y-4">
                                {/* Cal 1 */}
                                <div className="flex items-start space-x-3">
                                    <div className="pt-2">
                                        <input type="radio" name="netCalcDisc" id="netCalcDisc1" className="w-4 h-4 mt-1" aria-label="Cal 1 with discount" />
                                    </div>

                                    <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-2 items-center border border-gray-300 rounded bg-white p-3">
                                        <div className="text-right font-semibold text-sm">
                                            Cal 1<div className="text-xs font-normal px-1 py-1">EX:</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Total Amount</div>

                                            <div className="text-sm text-center">100</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">-</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Disc (%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Disc (Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Amt After Disc.</div>
                                            <div className="text-sm font-normal">95</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Net Amount</div>
                                            <div className="text-sm font-normal">99.75</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 2 */}
                                <div className="flex items-start space-x-3">
                                    <div className="pt-2">
                                        <input type="radio" name="netCalcDisc" id="netCalcDisc2" className="w-4 h-4 mt-1" aria-label="Cal 2 with discount" />
                                    </div>
                                    <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-2 items-center border border-gray-300 rounded bg-white p-3">
                                        <div className="text-right font-semibold text-sm">
                                            Cal 2<div className="text-xs font-normal px-1 py-1">EX:</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Total Amount</div>

                                            <div className="text-sm text-center">100</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">-</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Disc (%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Disc (Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Amt After Disc.</div>
                                            <div className="text-sm font-normal">95</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">F. Amt</div>
                                            <div className="text-sm font-normal">5</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Net Amount</div>
                                            <div className="text-sm font-normal">104.75</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 3 */}
                                <div className="flex items-start space-x-3">
                                    <div className="pt-2">
                                        <input type="radio" name="netCalcDisc" id="netCalcDisc3" className="w-4 h-4 mt-1" aria-label="Cal 3 with discount" />
                                    </div>
                                    <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-2 items-center border border-gray-300 rounded bg-white p-3">
                                        <div className="text-right font-semibold text-sm">
                                            Cal 3<div className="text-xs font-normal px-1 py-1">EX:</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Total Amount</div>

                                            <div className="text-sm text-center">100</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">-</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Disc (%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Disc (Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Amt After Disc.</div>
                                            <div className="text-sm font-normal">95</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">F. Amt</div>
                                            <div className="text-sm font-normal">5</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">OA</div>
                                            <div className="text-sm font-normal">10</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Net Amount</div>
                                            <div className="text-sm font-normal">114.75</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cal 4 */}
                                <div className="flex items-start space-x-3">
                                    <div className="pt-2">
                                        <input type="radio" name="netCalcDisc" id="netCalcDisc4" className="w-4 h-4 mt-1" aria-label="Cal 4 with discount" />
                                    </div>
                                    <div className="flex-1 grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] gap-x-2 items-center border border-gray-300 rounded bg-white p-3">
                                        <div className="text-right font-semibold text-sm">
                                            Cal 4<div className="text-xs font-normal px-1 py-1">EX:</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Total Amount</div>

                                            <div className="text-sm text-center">100</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">-</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Disc (%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Disc (Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Amt After Disc.</div>
                                            <div className="text-sm font-normal">95</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold">(</div>
                                            <div className="flex justify-center space-x-2 text-sm font-normal">
                                                <span>Tax(%)</span>
                                                <span>5</span>
                                                <span>or</span>
                                                <span>Tax(Rs.)</span>
                                                <span>5</span>
                                            </div>
                                            <div className="text-xs font-semibold">)</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">F. Amt</div>
                                            <div className="text-sm font-normal">5</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">OA</div>
                                            <div className="text-sm font-normal">10</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">+</div>
                                        <div>
                                            <div className="text-sm font-semibold">Com. Amt</div>
                                            <div className="text-sm font-normal">10</div>
                                        </div>
                                        <div className="text-3xl font-bold text-center select-none">=</div>
                                        <div>
                                            <div className="text-sm font-semibold">Net Amt</div>
                                            <div className="text-sm font-normal">124.75</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

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

            case 'Purchase GST':
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
                                        <p className="text-sm">Rate + Tax = Amount</p>
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
                                        <p className="text-sm">Purchase Price = Amount</p>
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
                                        <p className="text-sm">Rate + Tax = Amount</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <div className="flex flex-col items-center text-sm font-sans text-black w-12 select-none">
                                        <input type="radio" name="afterDiscount" id="afterCal2" className="mt-1" />
                                        <label htmlFor="afterCal2" className="mt-1 text-sm">
                                            Cal 2
                                        </label>
                                    </div>
                                    <div className="border border-gray-300 bg-white-600 p-2 flex-1 text-sm font-sans text-black leading-tight">
                                        <p className="text-sm">Including GST</p>
                                        <p className="text-sm">Purchase Price = Amount</p>
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

            case 'Tax Slab':
                return (
                    <div className="bg-white-600 w-full flex flex-col">
                        {/* Section 1 */}
                        <fieldset className="border border-gray-300 p-3 rounded bg-white ">
                            <legend className="text-sm font-normal px-2 leading-9">Excluding GST Without Discount</legend>
                            <div className="grid grid-cols-[100px_auto_auto_auto_auto_auto_auto] gap-x-2 items-center">
                                <label className="text-right text-sm" htmlFor="exw-readymade-rate">
                                    Readymade
                                </label>
                                <span className="text-sm">Rate</span>
                                <input id="exw-readymade-rate" type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Upto (&le;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Above (&gt;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                            </div>
                            <div className="grid grid-cols-[100px_auto_auto_auto_auto_auto_auto] gap-x-2 items-center mt-2">
                                <label className="text-right text-sm" htmlFor="exw-footwear-rate">
                                    Footwear
                                </label>
                                <span className="text-sm">Rate</span>
                                <input id="exw-footwear-rate" type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Upto (&le;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Above (&gt;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                            </div>
                        </fieldset>

                        {/* Section 2 */}
                        <fieldset className="border border-gray-300 p-3 rounded bg-white">
                            <legend className="text-sm font-normal px-2 leading-9">Including GST Without Discount</legend>
                            <div className="grid grid-cols-[100px_auto_auto_auto_auto_auto_auto] gap-x-2 items-center">
                                <label className="text-right text-sm" htmlFor="ingw-readymade-rate">
                                    Readymade
                                </label>
                                <span className="text-sm">Rate</span>
                                <input id="ingw-readymade-rate" type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Upto (&le;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Above (&gt;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                            </div>
                            <div className="grid grid-cols-[100px_auto_auto_auto_auto_auto_auto] gap-x-2 items-center mt-2">
                                <label className="text-right text-sm" htmlFor="ingw-footwear-rate">
                                    Footwear
                                </label>
                                <span className="text-sm">Rate</span>
                                <input id="ingw-footwear-rate" type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Upto (&le;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Above (&gt;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                            </div>
                        </fieldset>

                        {/* Section 3 */}
                        <fieldset className="border border-gray-300 p-3 rounded bg-white">
                            <legend className="text-sm font-normal px-2 leading-9">Excluding GST With Discount</legend>
                            <div className="grid grid-cols-[100px_auto_auto_auto_auto_auto_auto] gap-x-2 items-center">
                                <label className="text-right text-sm" htmlFor="exwd-readymade-rate">
                                    Readymade
                                </label>
                                <span className="text-sm">Rate</span>
                                <input id="exwd-readymade-rate" type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Upto (&le;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Above (&gt;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                            </div>
                            <div className="grid grid-cols-[100px_auto_auto_auto_auto_auto_auto] gap-x-2 items-center mt-2">
                                <label className="text-right text-sm" htmlFor="exwd-footwear-rate">
                                    Footwear
                                </label>
                                <span className="text-sm">Rate</span>
                                <input id="exwd-footwear-rate" type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Upto (&le;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Above (&gt;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                            </div>
                        </fieldset>

                        {/* Section 4 */}
                        <fieldset className="border border-gray-300 p-3 rounded bg-white">
                            <legend className="text-sm font-normal px-2 leading-9">Including GST With Discount</legend>
                            <div className="grid grid-cols-[100px_auto_auto_auto_auto_auto_auto] gap-x-2 items-center">
                                <label className="text-right text-sm" htmlFor="ingwd-readymade-rate">
                                    Readymade
                                </label>
                                <span className="text-sm">Rate</span>
                                <input id="ingwd-readymade-rate" type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Upto (&le;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Above (&gt;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                            </div>
                            <div className="grid grid-cols-[100px_auto_auto_auto_auto_auto_auto] gap-x-2 items-center mt-2">
                                <label className="text-right text-sm" htmlFor="ingwd-footwear-rate">
                                    Footwear
                                </label>
                                <span className="text-sm">Rate</span>
                                <input id="ingwd-footwear-rate" type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Upto (&le;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
                                <span className="text-sm">Above (&gt;) Tax</span>
                                <input type="text" className="border border-gray-400 h-7 w-16 px-1 text-sm" />
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
                    </div>
                );

            case 'Stock':
                return (
                    <div className="bg-gray-200 font-sans min-h-screen flex flex-col bg-white">
                        <div className="w-full overflow-auto border border-gray-300 flex-grow" style={{ height: 'calc(100vh - 110px)' }}>
                            <div className="min-w-[900px]">
                                <fieldset className="border border-gray-300 p-3 space-y-3">
                                    <legend className="text-sm font-normal px-1">&nbsp;</legend>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-14 text-right pt-2 select-none text-sm">Cal 1</div>
                                        <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer text-sm">
                                            <input type="radio" name="calculation" className="mr-2 mt-1" />
                                            Reduce By Sales
                                        </label>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-14 text-right pt-2 select-none text-sm">Cal 2</div>
                                        <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer text-sm">
                                            <input type="radio" name="calculation" className="mr-2 mt-1" />
                                            Reduce By Delivery Challan
                                        </label>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-14 text-right pt-2 select-none text-sm">Cal 3</div>
                                        <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer text-sm">
                                            <input type="radio" name="calculation" className="mr-2 mt-1" />
                                            Reduce By Sales Order
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset className="border border-gray-300 p-3 space-y-3">
                                    <legend className="text-sm font-normal text-gray-700 px-1 select-none">Stock Validation</legend>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-14 text-right pt-2 select-none text-sm">Cal 1</div>
                                        <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer text-sm">
                                            <input type="radio" name="stockValidation" className="mr-2 mt-1" />
                                            Enable
                                        </label>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-14 text-right pt-2 select-none text-sm">Cal 2</div>
                                        <label className="flex-1 border border-gray-300 bg-white px-3 py-2 cursor-pointer text-sm">
                                            <input type="radio" name="stockValidation" className="mr-2 mt-1" />
                                            Disable
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset className="border border-gray-300 p-3 space-y-4">
                                    <legend className="text-sm font-normal text-gray-700 px-1 select-none">Stock Detail Show/Hide</legend>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-36 select-none text-sm">Show Purchase Price</div>
                                        <div className="flex space-x-6 flex-1 border border-gray-300 bg-white px-3 py-2 text-sm">
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
                                        <div className="w-36 select-none text-sm">Show MRP</div>
                                        <div className="flex space-x-6 flex-1 border border-gray-300 bg-white px-3 py-2 text-sm">
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
                                        <button key={idx} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base">
                                            {btn}
                                        </button>
                                    ))}
                                </footer>
                            </div>
                        </div>
                    </div>
                );

            case 'Purchase & OS':
                return (
                    <div>
                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 ">
                            <label className="w-28 text-base text-gray-900 select-none">Lookup</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-4">
                            <label className="w-28 text-base text-gray-900 select-none">LookUp</label>
                            <div className="flex items-center space-x-3 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-4xl overflow-x-auto">
                                <span className="text-sm text-gray-900 select-none">Field_1</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                                <span className="text-sm text-gray-900 select-none">Field_2</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                                <span className="text-sm text-gray-900 select-none">Field_3</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                                <span className="text-sm text-gray-900 select-none">Field_4</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                                <span className="text-sm text-gray-900 select-none">Field_5</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-4">
                            <label className="w-28 text-base text-gray-900 select-none">TAG :</label>
                            <div className="flex items-center space-x-3 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-4xl overflow-x-auto">
                                <span className="text-sm text-gray-900 select-none">Field_1</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                                <span className="text-sm text-gray-900 select-none">Field_2</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                                <span className="text-sm text-gray-900 select-none">Field_3</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                                <span className="text-sm text-gray-900 select-none">Field_4</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                                <span className="text-sm text-gray-900 select-none">Field_5</span>
                                <select className="border border-gray-400 rounded text-sm text-gray-900 px-1 py-0.5 w-28">
                                    <option></option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-4">
                            <label className="w-28 text-base text-gray-900 select-none">Clear Master When Item Add :</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-4">
                            <label className="w-28 text-base text-gray-900 select-none">Clear Item Name and Rate When Item Add :</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-4">
                            <label className="w-28 text-base text-gray-900 select-none">In Purchase Barcode Scanning :</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-4">
                            <label className="w-28 text-base text-gray-900 select-none">After Adding New Item Cursor On</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm text-gray-900">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-4">
                            <label className="w-28 text-base text-gray-900 select-none">Show Key Press Result</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-4">
                            <label className="w-28 text-base text-gray-900 select-none">Unique Barcode</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                    <input type="radio" name="uniqueBarcode" className="cursor-pointer" />
                                    <span>Enable</span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                                    <input type="radio" name="uniqueBarcode" className="cursor-pointer" />
                                    <span className="span-clr">Disable</span>
                                </label>
                            </div>
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

            case 'General':
                return (
                    <div>
                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
                            <label className="w-40 text-base">Customer Show In List</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0 mt-4">
                            <label className="w-40 text-base">Show DashBoard</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0 mt-4">
                            <label className="w-40 text-base">Sales Print While Adjust Credit Note</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2 space-y-2 md:space-y-0 mt-4">
                            <label className="w-40 text-base">Stock Verification</label>
                            <div className="flex space-x-2 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md">
                                <select name="type1" className="border border-gray-400 rounded text-sm px-1 py-0.5 w-24" aria-label="Type 1">
                                    <option>Type_1</option>
                                </select>
                                <select name="type2" className="border border-gray-400 rounded text-sm px-1 py-0.5 w-24" aria-label="Type 2">
                                    <option>Type_2</option>
                                </select>
                                <select name="type3" className="border border-gray-400 rounded text-sm px-1 py-0.5 w-24" aria-label="Type 3">
                                    <option>Type_3</option>
                                </select>
                                <select name="type4" className="border border-gray-400 rounded text-sm px-1 py-0.5 w-24" aria-label="Type 4">
                                    <option>Type_4</option>
                                </select>
                                <select name="type5" className="border border-gray-400 rounded text-sm px-1 py-0.5 w-24" aria-label="Type 5">
                                    <option>Type_5</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0 mt-4">
                            <label className="w-40 text-base">Email on Closing</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0 mt-4">
                            <label className="w-40 text-base">Voucher Amount</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0 mt-4">
                            <label className="w-40 text-base">Item Already Exist Msg</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0 mt-4">
                            <label className="w-40 text-base">Barcode Scanning</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm">
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

                        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0 mt-4">
                            <label className="w-40 text-base">Show Reminder</label>
                            <div className="flex space-x-6 bg-white-600 px-4 py-2 border border-gray-300 rounded w-full max-w-md text-sm">
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

export default PurchaseCalculation;