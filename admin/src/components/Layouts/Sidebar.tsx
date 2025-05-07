import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMinus from '../Icon/IconMinus';
import IconMenuChat from '../Icon/Menu/IconMenuChat';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '../Icon/Menu/IconMenuTodo';
import IconMenuNotes from '../Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '../Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '../Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../Icon/Menu/IconMenuElements';
import IconMenuCharts from '../Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '../Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '../Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '../Icon/Menu/IconMenuTables';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuPages from '../Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '../Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '../Icon/Menu/IconMenuDocumentation';
// import ExchangePolicy from '../../pages/Authentication/ExchangePolicy';
import AgentSales from './../../pages/SalesTables/Comparison/AgentSales';

const Sidebar = () => {
    // const [currentMenu, setCurrentMenu] = useState<string>('');
    const [currentMenus, setCurrentMenus] = useState<string>('false');

    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [currentMenu, setCurrentMenu] = useState(null);
    const [basicSubMenuOpen, setBasicSubMenuOpen] = useState(false);
    const [userSubMenuOpen, setUserSubMenuOpen] = useState(false);
    const [purchaseSubMenuOpen, setPurchaseSubMenuOpen] = useState(false);
    const [stockSubMenuOpen, setStockSubMenuOpen] = useState(false);
    const [salesSubMenuOpen, setSalesSubMenuOpen] = useState(false);
    const [chartsSubMenuOpen, setChartsSubMenuOpen] = useState(false);
    const [accountSubMenuOpen, setAccountSubMenuOpen] = useState(false);
    const [stransferSubMenuOpen, setStransferSubMenuOpen] = useState(false);
    const [gstSubMenuOpen, setGstSubMenuOpen] = useState(false);
    const [gstReturnSubMenuOpen, setGstReturnSubMenuOpen] = useState(false);
    const [empSubMenuOpen, setEmpSubMenuOpen] = useState(false);
    const [pivotSubMenuOpen, setPivotSubMenuOpen] = useState(false);
    const [orderSubMenuOpen, setOrderSubMenuOpen] = useState(false);
    const [innPurchaseSubMenuOpen, setInnPurchaseSubMenuOpen] = useState(false);
    const [salesReportSubMenuOpen, setSalesReportSubMenuOpen] = useState(false);
    const [purReturnSubMenuOpen, setPurReturnSubMenuOpen] = useState(false);
    const [salesReturnSubMenuOpen, setSalesReturnSubMenuOpen] = useState(false);
    const [bestInSubMenuOpen, setBestInSubMenuOpen] = useState(false);
    const [comparisionSubMenuOpen, setComparisionSubMenuOpen] = useState(false);
    const [deliverySubMenuOpen, setDeliverySubMenuOpen] = useState(false);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [calcSubMenuOpen, setcalcSubMenuOpen] = useState(false);

    const toggleMenu = (menu: any) => {
        if (menu === 'basic') {
            setBasicSubMenuOpen(!basicSubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if (menu === 'calc') {
            setcalcSubMenuOpen(!calcSubMenuOpen);
            setUserSubMenuOpen(false);
            setBasicSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'purchase') {
            setPurchaseSubMenuOpen(!purchaseSubMenuOpen);
            setUserSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setInnPurchaseSubMenuOpen(false);
            setPurReturnSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'stock') {
            setStockSubMenuOpen(!stockSubMenuOpen);
            setBasicSubMenuOpen(false);
            setUserSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'sales') {
            setSalesSubMenuOpen(!salesSubMenuOpen);
            setBasicSubMenuOpen(false);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
            setSalesReportSubMenuOpen(false);
        } else if (menu === 'charts') {
            setChartsSubMenuOpen(!chartsSubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'account') {
            setAccountSubMenuOpen(!accountSubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'stock_transfer') {
            setStransferSubMenuOpen(!stransferSubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'gst') {
            setGstSubMenuOpen(!gstSubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'gst_return') {
            setGstReturnSubMenuOpen(!gstReturnSubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'emp_sch') {
            setEmpSubMenuOpen(!empSubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'pivot_rep') {
            setPivotSubMenuOpen(!pivotSubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'order') {
            setOrderSubMenuOpen(!orderSubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } else if (menu === 'inn_purchase') {
            setInnPurchaseSubMenuOpen(!innPurchaseSubMenuOpen);
            setPurchaseSubMenuOpen(true);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
        } else if (menu === 'pur_return') {
            setPurReturnSubMenuOpen(!purReturnSubMenuOpen);
            setPurchaseSubMenuOpen(true);
            setInnPurchaseSubMenuOpen(false);
        } else if (menu === 'inn_sales') {
            setSalesReportSubMenuOpen(!salesReportSubMenuOpen);
            setSalesSubMenuOpen(true);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
            setSalesReturnSubMenuOpen(false);
            setBestInSubMenuOpen(false);
        } else if (menu === 'sales_return') {
            setSalesReturnSubMenuOpen(!salesReturnSubMenuOpen);
            setSalesReportSubMenuOpen(false);
            setSalesSubMenuOpen(true);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
            setBestInSubMenuOpen(false);
        } else if (menu === 'best_in') {
            setBestInSubMenuOpen(!bestInSubMenuOpen);
            setSalesReportSubMenuOpen(false);
            setSalesReturnSubMenuOpen(false);
            setSalesSubMenuOpen(true);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
            setComparisionSubMenuOpen(false);
        } else if (menu === 'comparision') {
            setComparisionSubMenuOpen(!comparisionSubMenuOpen);
            setSalesReportSubMenuOpen(false);
            setSalesReturnSubMenuOpen(false);
            setSalesSubMenuOpen(true);
            setBestInSubMenuOpen(false);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
        } else if (menu === 'del_challan') {
            setDeliverySubMenuOpen(!deliverySubMenuOpen);
            setUserSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setOrderSubMenuOpen(false);
        } else {
            setCurrentMenu(currentMenu === menu ? null : menu);
            setUserSubMenuOpen(false);
            setBasicSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setInnPurchaseSubMenuOpen(false);
            setPurReturnSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
            setSalesReportSubMenuOpen(false);
        }
    };

    useEffect(() => {
        const storedBasicSubMenuState = localStorage.getItem('basicSubMenuOpen');
        const storedUserSubMenuState = localStorage.getItem('userSubMenuOpen');
        const storedPurchaseSubMenuState = localStorage.getItem('purchaseSubMenuOpen');
        const storedStockSubMenuState = localStorage.getItem('stockSubMenuOpen');
        const storedSalesSubMenuState = localStorage.getItem('salesSubMenuOpen');
        const storedChartsSubMenuState = localStorage.getItem('chartsSubMenuOpen');
        const storedAccountSubMenuState = localStorage.getItem('accountSubMenuOpen');
        const storedsTransferSubMenuState = localStorage.getItem('stransferSubMenuOpen');
        const storedsGstSubMenuState = localStorage.getItem('gstSubMenuOpen');
        const storedsGstReturnSubMenuState = localStorage.getItem('gstReturnSubMenuOpen');
        const storedsEmpSubMenuState = localStorage.getItem('empSubMenuOpen');
        const storedsPivotSubMenuState = localStorage.getItem('pivotSubMenuOpen');
        const storedsinnPurchaseSubMenuState = localStorage.getItem('innPurchaseSubMenuOpen');
        const storedsPurReturnSubMenuState = localStorage.getItem('purReturnSubMenuOpen');
        const storedsSalesReturnSubMenuState = localStorage.getItem('salesReturnSubMenuOpen');
        const storedsBestInSubMenuState = localStorage.getItem('bestInSubMenuOpen');
        const storedsComparisionSubMenuState = localStorage.getItem('comparisionSubMenuOpen');
        const storedsSalesReportSubMenuState = localStorage.getItem('salesReportSubMenuOpen');
        const storedcalcSubMenuOpenState = localStorage.getItem('calcSubMenuOpen');
        if (storedBasicSubMenuState) {
            setBasicSubMenuOpen(storedBasicSubMenuState === 'true');
        }
        if (storedUserSubMenuState) {
            setUserSubMenuOpen(storedUserSubMenuState === 'true');
        }
        if (storedPurchaseSubMenuState) {
            setPurchaseSubMenuOpen(storedPurchaseSubMenuState === 'true');
        }
        if (storedStockSubMenuState) {
            setStockSubMenuOpen(storedStockSubMenuState === 'true');
        }
        if (storedSalesSubMenuState) {
            setSalesSubMenuOpen(storedSalesSubMenuState === 'true');
        }
        if (storedChartsSubMenuState) {
            setChartsSubMenuOpen(storedChartsSubMenuState === 'true');
        }
        if (storedAccountSubMenuState) {
            setAccountSubMenuOpen(storedAccountSubMenuState === 'true');
        }
        if (storedsTransferSubMenuState) {
            setStransferSubMenuOpen(storedsTransferSubMenuState === 'true');
        }
        if (storedsGstSubMenuState) {
            setGstSubMenuOpen(storedsGstSubMenuState === 'true');
        }
        if (storedsGstReturnSubMenuState) {
            setGstReturnSubMenuOpen(storedsGstReturnSubMenuState === 'true');
        }
        if (storedsEmpSubMenuState) {
            setEmpSubMenuOpen(storedsEmpSubMenuState === 'true');
        }
        if (storedsPivotSubMenuState) {
            setPivotSubMenuOpen(storedsPivotSubMenuState === 'true');
        }
        if (storedsinnPurchaseSubMenuState) {
            setInnPurchaseSubMenuOpen(storedsinnPurchaseSubMenuState === 'true');
        }
        if (storedsPurReturnSubMenuState) {
            setPurReturnSubMenuOpen(storedsPurReturnSubMenuState === 'true');
        }
        if (storedsSalesReportSubMenuState) {
            setSalesReportSubMenuOpen(storedsSalesReportSubMenuState === 'true');
        }
        if (storedsSalesReturnSubMenuState) {
            setSalesReturnSubMenuOpen(storedsSalesReturnSubMenuState === 'true');
        }
        if (storedsBestInSubMenuState) {
            setBestInSubMenuOpen(storedsBestInSubMenuState === 'true');
        }
        if (storedsComparisionSubMenuState) {
            setComparisionSubMenuOpen(storedsComparisionSubMenuState === 'true');
        }
        if (storedcalcSubMenuOpenState) {
            setcalcSubMenuOpen(storedcalcSubMenuOpenState === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('basicSubMenuOpen', basicSubMenuOpen.toString());
        localStorage.setItem('userSubMenuOpen', userSubMenuOpen.toString());
        localStorage.setItem('purchaseSubMenuOpen', purchaseSubMenuOpen.toString());
        localStorage.setItem('stockSubMenuOpen', stockSubMenuOpen.toString());
        localStorage.setItem('salesSubMenuOpen', salesSubMenuOpen.toString());
        localStorage.setItem('chartsSubMenuOpen', chartsSubMenuOpen.toString());
        localStorage.setItem('accountSubMenuOpen', accountSubMenuOpen.toString());
        localStorage.setItem('stransferSubMenuOpen', stransferSubMenuOpen.toString());
        localStorage.setItem('gstSubMenuOpen', gstSubMenuOpen.toString());
        localStorage.setItem('gstReturnSubMenuOpen', gstReturnSubMenuOpen.toString());
        localStorage.setItem('empSubMenuOpen', empSubMenuOpen.toString());
        localStorage.setItem('pivotSubMenuOpen', pivotSubMenuOpen.toString());
        localStorage.setItem('innPurchaseSubMenuOpen', innPurchaseSubMenuOpen.toString());
        localStorage.setItem('purReturnSubMenuOpen', purReturnSubMenuOpen.toString());
        localStorage.setItem('salesReturnSubMenuOpen', salesReturnSubMenuOpen.toString());
        localStorage.setItem('bestInSubMenuOpen', bestInSubMenuOpen.toString());
        localStorage.setItem('comparisionSubMenuOpen', comparisionSubMenuOpen.toString());
        localStorage.setItem('salesReportSubMenuOpen', salesReportSubMenuOpen.toString());
        localStorage.setItem('calcSubMenuOpen', calcSubMenuOpen.toString());
    }, [
        basicSubMenuOpen,
        userSubMenuOpen,
        purchaseSubMenuOpen,
        stockSubMenuOpen,
        salesSubMenuOpen,
        chartsSubMenuOpen,
        accountSubMenuOpen,
        stransferSubMenuOpen,
        gstSubMenuOpen,
        gstReturnSubMenuOpen,
        empSubMenuOpen,
        pivotSubMenuOpen,
        innPurchaseSubMenuOpen,
        purReturnSubMenuOpen,
        salesReportSubMenuOpen,
        salesReturnSubMenuOpen,
        bestInSubMenuOpen,
        comparisionSubMenuOpen,
        calcSubMenuOpen,
    ]);
    // useEffect(() => {
    //     setBasicSubMenuOpen(false);
    //     setUserSubMenuOpen(false);
    // }, []);

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    interface MenuItem {
        FormName: string;
    }

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    const navigate = useNavigate();
    const handleLogout = () => {
        // Perform logout actions here (e.g., clearing authentication token, resetting state)
        // Then redirect to login page
        navigate('/', { replace: true }); // Use replace option to prevent going back
    };

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <NavLink to="" className="main-logo flex items-center shrink-0">
                            <img className="w-8 ml-[5px] flex-none" src="/assets/images/auth/Logo-04.png" alt="logo" />
                            <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">{t('i-SOFTZONE')}</span>
                        </NavLink>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                                    <div className="flex items-center">
                                        <IconMenuDashboard className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('dashboard')}</span>
                                    </div>

                                    <div className={currentMenu !== 'dashboard' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/index">{t('sales')}</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="nav-item">
                                <ul></ul>
                            </li>

                            <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                                <IconMinus className="w-4 h-5 flex-none hidden" />
                                <span>{t('tables_and_forms')}</span>
                            </h2>

                            <li className="menu nav-item">
                                {/* <button type="button" className={`${currentMenu === 'web' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('web')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('System')}</span>
                                    </div>

                                    <div className={currentMenu !== 'web' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button> */}
                                <button type="button" className={`${currentMenu === 'web' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('web')}>
                                    <div className="flex items-center">
                                        <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">System</span>
                                    </div>
                                    <div className={currentMenu !== 'web' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'web' || calcSubMenuOpen ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <button type="button" className={`${calcSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('calc')}>
                                                <div className="flex items-center">
                                                    <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Calculation</span>
                                                </div>
                                                <div className={calcSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                                    <IconCaretDown />
                                                </div>
                                            </button>

                                            <AnimateHeight duration={300} height={calcSubMenuOpen ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                    <li>
                                                        <NavLink to="/components/MasterCalculations">Master Calculation</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/PurchaseCalculations">Purchase Calculation</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/SalesCalculations">Sales Calculation</NavLink>
                                                    </li>
                                                </ul>
                                            </AnimateHeight>
                                        </li>

                                        <li>
                                            <NavLink to="/components/discountcoupon">Item Setting</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">Item Rate Calculation</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">Rate Code</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">Print Margin</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">SMS Sending</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">HSN Code</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">Sale Price Discount</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">Category</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">Mark Up/Down</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">Refresh</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'datalabel' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('datalabel')}>
                                    <div className="flex items-center">
                                        <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Master</span>
                                    </div>
                                    <div className={currentMenu !== 'datalabel' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'datalabel' || basicSubMenuOpen ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <button type="button" className={`${basicSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('basic')}>
                                                <div className="flex items-center">
                                                    <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Setting</span>
                                                </div>
                                                <div className={basicSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                                    <IconCaretDown />
                                                </div>
                                            </button>

                                            <AnimateHeight duration={300} height={basicSubMenuOpen ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                    <li>
                                                        <NavLink to="/datatables/advanced">Item</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/finyear">FinYear</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/city">City</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/state">State</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/country">Country</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/title">Title</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/reasonofreturn">Reason of Return</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/location">Location</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/district">District</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/maritalstatus">Marital Status</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/bankname">Bank Name</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/accounttype">Account Type</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/company">Company</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/bank">Bank</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/search">Search</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/worktype">Work Type</NavLink>
                                                    </li>
                                                </ul>
                                            </AnimateHeight>
                                        </li>
                                        <li>
                                            <NavLink to="/components/agentmaster">Agent</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/customermaster">Customers</NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/components/dealer">Dealers</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/employee">Employees</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/item">Items</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/user">User</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'pur' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('pur')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Purchase')}</span>
                                    </div>

                                    <div className={currentMenu !== 'pur' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <AnimateHeight duration={300} height={currentMenu === 'pur' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        {/* <li>
                                            <NavLink to="/pages/knowledge-base">{t('knowledge_base')}</NavLink>
                                        </li> */}
                                        <li>
                                            <NavLink to="/components/purchaseentry">Entry</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">Search</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/discountcoupon">Return</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/purchasesearch">Search</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/customermaster">Barcode</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'sto' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('sto')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Stock')}</span>
                                    </div>

                                    <div className={currentMenu !== 'sto' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <AnimateHeight duration={300} height={currentMenu === 'sto' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        {/* <li>
                                            <NavLink to="/pages/knowledge-base">{t('knowledge_base')}</NavLink>
                                        </li> */}
                                        <li>
                                            <NavLink to="/components/stockview">Stock View</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/openingstock">Opening Stock</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/stockservice">Transfer Stock and Series</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/stockverification">Stock Verification</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components">Stock Verification Search</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/stockinward">Stock Inward</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/stockinwardsearch">Stock Inward Search</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/stockoutward">Stock Outward</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/stockoutwardsearch">Stock Outward Search</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'sal' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('sal')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Sales')}</span>
                                    </div>

                                    <div className={currentMenu !== 'sal' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <AnimateHeight duration={300} height={currentMenu === 'sal' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        {/* <li>
                                            <NavLink to="/pages/knowledge-base">{t('knowledge_base')}</NavLink>
                                        </li> */}
                                        <li>
                                            <NavLink to="/components/entry">Entry</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/SearchSales">Search</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/salesdetailsearch">Detail Search</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/salesreturn">Return</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/refferalcoupan">Search</NavLink>
                                        </li>

                                        {/* <li className="menu nav-item">
                                            
                                            <AnimateHeight duration={300} height={errorSubMenu ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                <li>
                                                                    <NavLink to="/datatables/masterInput">Search</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="/datatables/masterInput">Search</NavLink>
                                                                </li>
                                                    
                                                                <li>
                                                                    <NavLink to="/datatables/masterInput">Search</NavLink>
                                                                </li>
                                                </ul>
                                            </AnimateHeight>
                                        </li> */}

                                        {/* <li>
                                            <NavLink to="/pages/maintenence" target="_blank">
                                                {t('maintenence')}
                                            </NavLink>
                                        </li> */}
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'datala' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('datala')}>
                                    <div className="flex items-center">
                                        <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Report</span>
                                    </div>
                                    <div className={currentMenu !== 'datala' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'datala' || basicSubMenuOpen ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <button type="button" className={`${stockSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('stock')}>
                                                <div className="flex items-center">
                                                    <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Master</span>
                                                </div>
                                                <div className={stockSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                                    <IconCaretDown />
                                                </div>
                                            </button>

                                            <AnimateHeight duration={300} height={stockSubMenuOpen ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                    <li>
                                                        <NavLink to="/components/reportfromstock?page=agent">Agent</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/reportfromstock?page=customer">Customer</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/reportfromstock?page=dealer">Dealer</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/reportfromstock?page=employee">Employee</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/reportfromstock?page=item">Items</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/components/reportfromstock?page=transport">Transport</NavLink>
                                                    </li>
                                                </ul>
                                            </AnimateHeight>

                                            {/* <AnimateHeight duration={300} height={stockSubMenuOpen ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                    {menuItems.map((item, index) => (
                                                        <li key={index}>
                                                            <NavLink to={`/stockTables/${item.FormName.toLowerCase().replace(/\s+/g, '')}`}>{item.FormName}</NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </AnimateHeight> */}
                                        </li>
                                        <li>
                                            <button type="button" className={`${purchaseSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('purchase')}>
                                                <div className="flex items-center">
                                                    <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Purchase</span>
                                                </div>
                                                <div className={purchaseSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                                    <IconCaretDown />
                                                </div>
                                            </button>

                                            <AnimateHeight duration={300} height={purchaseSubMenuOpen ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                    <li>
                                                        <button type="button" className={`${innPurchaseSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('inn_purchase')}>
                                                            <div className="flex items-center">
                                                                {/* <IconMenuDatatables className="group-hover:!text-primary shrink-0" /> */}
                                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Purchase</span>
                                                            </div>
                                                            <div className={innPurchaseSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                                                <IconCaretDown />
                                                            </div>
                                                        </button>

                                                        <AnimateHeight duration={300} height={innPurchaseSubMenuOpen ? 'auto' : 0}>
                                                            <ul className="sub-menu text-gray-500">
                                                                <li>
                                                                    <NavLink to="/components/purchasedetail">Purchase Detail</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="/components/purchaseregister">Purchase Register</NavLink>
                                                                </li>
                                                                {/* <li>
                                                                    <NavLink to="#">Purchase Detail</NavLink>
                                                                </li> */}
                                                                <li>
                                                                    <NavLink to="/components/purchasesummary">Purchase Summary</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="/components/purchasegroupwise">Purchase Group Wise</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="/components/dealerwisepurchase">Dealer Wise Purchase</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="/components/dealerwisepurchasedetails">Dealer Wise Purchase Detail</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="/components/dealerwisepurchasecomparison">Dealer Wise Purchase Comparison</NavLink>
                                                                </li>
                                                            </ul>
                                                        </AnimateHeight>
                                                    </li>
                                                </ul>
                                            </AnimateHeight>
                                        </li>
                                        <li>
                                            <button type="button" className={`${bestInSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('best_in')}>
                                                <div className="flex items-center">
                                                    <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Stock</span>
                                                </div>
                                                <div className={bestInSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                                    <IconCaretDown />
                                                </div>
                                            </button>

                                            <AnimateHeight duration={300} height={bestInSubMenuOpen ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                    <li>
                                                        <NavLink to="/components/reportfromstock?page=Stockdetail">Stock Detail</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">Brand Item Wise</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">Item Brand Item Wise</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">Brand Size Wise</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">Stock Movement</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">Stock Report</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">Stcok Aging</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="#">Stock Summary Item Name Wise</NavLink>
                                                    </li>
                                                </ul>
                                            </AnimateHeight>
                                        </li>
                                        <li>
                                            <button type="button" className={`${salesSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('sales')}>
                                                <div className="flex items-center">
                                                    <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Sales</span>
                                                </div>
                                                <div className={salesSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                                    <IconCaretDown />
                                                </div>
                                            </button>

                                            <AnimateHeight duration={300} height={salesSubMenuOpen ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                    <li>
                                                        <button type="button" className={`${salesReportSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('inn_sales')}>
                                                            <div className="flex items-center">
                                                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Sales</span>
                                                            </div>
                                                            <div className={salesReportSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                                                <IconCaretDown />
                                                            </div>
                                                        </button>

                                                        <AnimateHeight duration={300} height={salesReportSubMenuOpen ? 'auto' : 0}>
                                                            <ul className="sub-menu text-gray-500">
                                                                <li>
                                                                    <NavLink to="/components/reportfromstock?page=salesreport">Sales Report</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="#">Sales Register</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="/components/reportfromstock?page=salessummary">Sales Summary</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="#">Sales Detail Report</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="#">Sales Detail Report</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="#">Sales Profit</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="#">Sales Outstanding</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="#">Sales Profit MR</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="#">Discount Sale</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="#">Discount Wise Sales</NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink to="#">Sales</NavLink>
                                                                </li>
                                                            </ul>
                                                        </AnimateHeight>
                                                    </li>
                                                </ul>
                                            </AnimateHeight>
                                        </li>
                                        <li>
                                            <NavLink to="/components/reportfromstock?page=salesreturn">Sales Return</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <NavLink to="/Components/item-master" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Item Master')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="/components/aboutus" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('About')}</span>
                                    </div>
                                </NavLink>
                            </li>

                            <li className="menu nav-item">
                                <NavLink to="/components/contactus" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Contact')}</span>
                                    </div>
                                </NavLink>
                            </li>

                            <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                                <IconMinus className="w-4 h-5 flex-none hidden" />
                                <span>{t('user_and_pages')}</span>
                            </h2>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'page' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('page')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('pages')}</span>
                                    </div>

                                    <div className={currentMenu !== 'page' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'page' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        {/* <li>
                                            <NavLink to="/pages/knowledge-base">{t('knowledge_base')}</NavLink>
                                        </li> */}
                                        <li>
                                            <NavLink to="/pages/contact-us-boxed" target="_blank">
                                                {t('contact_us_boxed')}
                                            </NavLink>
                                        </li>
                                        {/* <li>
                                            <NavLink to="/pages/contact-us-cover" target="_blank">
                                                {t('contact_us_cover')}
                                            </NavLink>
                                        </li> */}
                                        <li>
                                            <NavLink to="/pages/faq">{t('faq')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/pages/coming-soon-boxed" target="_blank">
                                                {t('coming_soon_boxed')}
                                            </NavLink>
                                        </li>
                                        {/* <li>
                                            <NavLink to="/pages/coming-soon-cover" target="_blank">
                                                {t('coming_soon_cover')}
                                            </NavLink>
                                        </li> */}
                                        <li className="menu nav-item">
                                            <button
                                                type="button"
                                                className={`${
                                                    errorSubMenu ? 'open' : ''
                                                } w-full before:bg-gray-300 before:w-[5px] before:h-[5px] before:rounded ltr:before:mr-2 rtl:before:ml-2 dark:text-[#888ea8] hover:bg-gray-100 dark:hover:bg-gray-900`}
                                                onClick={() => setErrorSubMenu(!errorSubMenu)}
                                            >
                                                {t('error')}
                                                <div className={`${errorSubMenu ? 'rtl:rotate-90 -rotate-90' : ''} ltr:ml-auto rtl:mr-auto`}>
                                                    <IconCaretsDown fill={true} className="w-4 h-4" />
                                                </div>
                                            </button>
                                            <AnimateHeight duration={300} height={errorSubMenu ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                    <li>
                                                        <a href="/pages/error404" target="_blank">
                                                            {t('404')}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/pages/error500" target="_blank">
                                                            {t('500')}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/pages/error503" target="_blank">
                                                            {t('503')}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </AnimateHeight>
                                        </li>

                                        <li>
                                            <NavLink to="/pages/maintenence" target="_blank">
                                                {t('maintenence')}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'auth' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('auth')}>
                                    <div className="flex items-center">
                                        <IconMenuAuthentication className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('authentication')}</span>
                                    </div>

                                    <div className={currentMenu !== 'auth' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'auth' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <button onClick={handleLogout}>{t('login_cover')}</button>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
