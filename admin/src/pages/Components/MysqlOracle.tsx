import React, { useState } from 'react';
interface CheckboxItemProps {
    label: string;
}
interface CategoryHeaderProps {
    title: string;
}
const MysqlOracle: React.FC<CheckboxItemProps> = ({ label }) => {
    const [activeTab, setActiveTab] = useState('masterDetails');
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
    const CheckboxItem: React.FC<CheckboxItemProps> = ({ label }) => (
        <div className="mb-2 sm:mb-1 md:mb-0.5 lg:mb-0 flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500" />
            <label className="ml-2 text-sm text-gray-700">{label}</label>
        </div>
    );
    const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title }) => <div className="mb-2 sm:mb-1 md:mb-0.5 lg:mb-0 font-semibold text-gray-800">{title}</div>;
    const masterOptions = [
        'Agent Master',
        'BarCodeDetail',
        'BarCodeMaster',
        'BOM_C',
        'BOM_L',
        'BOM_R',
        'BRANDCAL',
        'COMM_SLAB',
        'COMPANYMASTER',
        'CUSTOMERMASTER',
        'CSDETAIL_BAGA',
        'CSDETAIL_BQ',
        'CSMASTER_BA',
        'CSMASTER_BAGA',
        'CSMASTER_DNO',
        'CSMASTER_DV',
        'CSMASTER_FRATE',
        'CSMASTER_G',
        'CSMASTER_OITEM',
        'CSMASTER_RD',
        'Cust. Master',
        'CustOrder',
        'DCDetail',
        'Dealer',
        'EDS_BFT',
        'EDS_PER',
        'EDS_RS',
        'EMPDES_PER',
        'EMPDES_PER_C',
        'EMPDES_RS_C',
        'EMPMASTER',
        'ESDETAIL',
        'ESMASTER',
        'EXP_CODE',
        'EXPENSEMASTER',
        'IMPORTANTDATE',
        'IMSETTING',
        'IMSETTING_R',
        'ItemMaster',
        'JFDetail',
        'JFDetail_D',
        'JFMASTER',
        'JFMASTER_D',
        'JFMASTER_R',
        'JIL_TRXN',
        'JIR_TRXN',
        'JOBMASTER',
        'JOBMASTER_SP',
        'JOBS_C',
        'JOBS_H',
        'JOBS_R',
        'JOBTYPES',
        'JWISSUEDETAIL',
        'JWRECIEVEDETAIL',
        'LBCD',
        'LedgerBook_C',
        'LedgerBookD',
        'Machines',
        'MainFunction',
        'Master',
        'ObjectMaster',
        'PIVOTMASTER',
        '',
        'PRDetail',
        'PRMaster',
        'PurchaseDetail',
        'PurchaseMasterD',
        'PurchaseMaster',
        'PurchaseDetailD',
        'RATECODE',
        'ROLEOBJECTMASTER',
        'SALE_GST',
        'SALE_GST',
        'SalesDetail',
        'SalesMaster',
        'SCIDetail',
        'SCIMaster',
        'SCIMaster',
        'SD1',
        'SM1',
        'SMS_SENDING',
        'SOCDetail',
        'SOCMaster',
        'SODetail',
        'SOMaster',
        'SQDetail',
        'SQMaster',
        'SQTEMPLATE',
        'SRDetail',
        'SRMaster',
        'STATECODE',
        'STIDetail',
        'STIDetail_D',
        'STIMaster',
        'STIMaster_D',
        'Stock',
        'STOCK_IW',
        'STOCK_REPACK',
        'StockG',
        'STOCKMASTER_D',
        'STOCKVERIFICATION_D',
        'STODetail',
        'STOCKVERIFICATION_M',
        'STOMASTER',
        'StoDetail_D',
        'STOMASTER_D',
        'SUBCONMASTER',
        '',
    ];
    const otherOptions = [
        'Job Work Issue',
        'Master',
        'STIDetail_D',
        'JFDetail_D',
        'PRDECIMALMARGIN',
        '',
        'Stock In Out Depo',
        'Packing Slip',
        '',
        '',
        '',
        '',
        'Sales Order',
        'Job Work Rec.',
        '',
        '',
        '',
        '',
        'Purchase',
        'CSMASTER_OITEMCUST',
        '',
        '',
        '',
        '',
        'Stock In Out to Online Server',
        'Dealer Master',
        'SCMaster',
        '',
        '',
        '',
    ];
    // Function to chunk the array for responsive grid layout
    const chunkArray = (arr: string[], size: number): string[][] => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
    };
    // Define responsive grid columns
    const masterColumns = {
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
        '2xl': 6,
    };
    const otherColumns = {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 3,
        '2xl': 3,
    };
    return (
        <div>
            <div className="master-details-tab-panel-responsive-container">
                <h2>Master Details</h2>
                <div className="content-area">
                    <div className="tab-navigation">
                        <button className={`tab ${activeTab === 'masterDetails' ? 'active' : ''}`} onClick={() => handleTabClick('masterDetails')}>
                            Oracle to Mysql
                        </button>
                        <button className={`tab ${activeTab === 'others' ? 'active' : ''}`} onClick={() => handleTabClick('others')}>
                            Mysql to Oracle
                        </button>
                    </div>
                    <div className="tab-panel">
                        {activeTab === 'masterDetails' && (
                            <div className="space-y-4">
                                <div>
                                    <CategoryHeader title="Master Options" />
                                    <div
                                        className="grid gap-x-4 gap-y-2"
                                        style={{
                                            gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
                                        }}
                                    >
                                        {masterOptions.map((option, index) => option && <CheckboxItem key={`master-${index}`} label={option} />)}
                                    </div>
                                </div>
                                <div>
                                    <CategoryHeader title="Other Options" />
                                    <div
                                        className="grid gap-x-4 gap-y-2"
                                        style={{
                                            gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
                                        }}
                                    >
                                        {otherOptions.map((option, index) => option && <CheckboxItem key={`other-${index}`} label={option} />)}
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'others' && (
                            <div>
                                <div className="space-y-4">
                                    <div>
                                        <CategoryHeader title="Master Options" />
                                        <div
                                            className="grid gap-x-4 gap-y-2"
                                            style={{
                                                gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
                                            }}
                                        >
                                            {masterOptions.map((option, index) => option && <CheckboxItem key={`master-${index}`} label={option} />)}
                                        </div>
                                    </div>
                                    <div>
                                        <CategoryHeader title="Other Options" />
                                        <div
                                            className="grid gap-x-4 gap-y-2"
                                            style={{
                                                gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
                                            }}
                                        >
                                            {otherOptions.map((option, index) => option && <CheckboxItem key={`other-${index}`} label={option} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MysqlOracle;