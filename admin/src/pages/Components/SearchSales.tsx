import React, { useState } from 'react';

interface IndexPageProps {}

const SearchSales: React.FC<IndexPageProps> = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showEntries, setShowEntries] = useState(10);
    const [searchResultsVisible, setSearchResultsVisible] = useState(false); // State to control visibility

    const handleSearch = () => {
        // Implement your search logic here using the searchTerm
        console.log('Searching for:', searchTerm);
        setSearchResultsVisible(true); // Show the results section when search is clicked
    };

    return (
        <div className="index-page-responsive-container">
            <h2 className="index-title">Index</h2>

            <div className="filter-section">
                <div className="filter-row">
                    <div className="form-group">
                        <label htmlFor="customer" className='me-4'>Customer</label>
                        <input type="text" id="customer" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="series" className='me-4'>Series</label>
                        <input type="text" id="series" />
                    </div>
                    <div className="form-group date-group">
                        <label htmlFor="fromDate" className='me-4'>From Date</label>
                        <input type="date" id="fromDate" placeholder="dd/mm/yyyy" />
                    </div>
                    <div className="form-group date-group">
                        <label htmlFor="toDate" className='me-4'>To Date</label>
                        <input type="date" id="toDate" placeholder="dd/mm/yyyy" />
                    </div>
                </div>

                <div className="filter-row">
                    <div className="form-group">
                        <label htmlFor="mobile" className='me-4'>Mobile</label>
                        <input type="text" id="mobile" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="barCode" className='me-4'>BarCode</label>
                        <input type="text" id="barCode" />
                    </div>
                    <div className="form-group number-range-group">
                        <label htmlFor="noFrom" className='me-4'>No. From</label>
                        <input type="number" id="noFrom" />
                    </div>
                    <div className="form-group number-range-group">
                        <label htmlFor="noTo" className='me-4'>To</label>
                        <input type="number" id="noTo" />
                    </div>
                    <div className="form-group search-button-group">
                        <button type="button" className="search-button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="create-new-link">
                <a href="#create">Create new</a>
            </div>
            {searchResultsVisible && (
                <div className="table-responsive">
                    <select name="" id="">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <div className="form-group mt-5 group">
                        <label htmlFor="noTo">Search</label>
                        <input type="number" placeholder="search" id="noTo" />
                    </div>
                </div>
            )}
            <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Firm Name</th>
                            <th>Company Name</th>
                            <th>First Name</th>
                            <th>Full Name</th>
                            <th>Sale Series</th>
                            <th>Date</th>
                            <th>Mode</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Discount</th>
                            <th>Discount Amount</th>
                            <th>Net Amount</th>
                            <th>Amount Paid</th>
                            <th>Balance</th>
                            <th>Remarks</th>
                            <th>Created By</th>
                            <th>Created On</th>
                            <th>Updated By</th>
                            <th>Updated On</th>
                            <th>Customer</th>
                            <th>Cash Amount</th>
                            <th>Card Amount</th>
                            <th>CCNo</th>
                            <th>Cheque Amount</th>
                            <th>Cheque No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* You'll map through your data array here */}
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                            <td>Data 4</td>
                            <td>Data 5</td>
                            <td>Data 6</td>
                            <td>Data 7</td>
                            <td>Data 8</td>
                            <td>Data 9</td>
                            <td>Data 10</td>
                            <td>Data 11</td>
                            <td>Data 12</td>
                            <td>Data 13</td>
                            <td>Data 14</td>
                            <td>Data 15</td>
                            <td>Data 16</td>
                            <td>Data 17</td>
                            <td>Data 18</td>
                            <td>Data 19</td>
                            <td>Data 20</td>
                            <td>Data 21</td>
                            <td>Data 22</td>
                            <td>Data 23</td>
                            <td>Data 24</td>
                            <td>Data 25</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            <div className="copyright">© 2025 - All Softzone</div>
        </div>
    );
};

export default SearchSales;
