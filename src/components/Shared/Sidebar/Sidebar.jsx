import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { MdOutlineDesktopMac, MdSpaceDashboard, MdMessage, MdGraphicEq, MdOutlineSupportAgent } from "react-icons/md";
import { FaUsers, FaUserTie, FaUserCircle } from "react-icons/fa";
import { RiUserAddFill, RiDonutChartFill, RiStackshareFill, RiBankCardFill, RiFlowerFill } from "react-icons/ri";
import { FaUserGroup, FaMoneyCheckDollar, FaGear, FaKey, FaXmark } from "react-icons/fa6";
import { GrGrid } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { BsPieChartFill, BsBarChartLineFill, BsFileEarmarkSpreadsheetFill, BsGridFill, BsGraphUp } from "react-icons/bs";
import { PiBankFill } from "react-icons/pi";
import { SiGoogletagmanager } from "react-icons/si";
import { ImSwitch } from "react-icons/im";
import { useTranslation } from "react-i18next";

const SidebarLink = ({ to, icon: Icon, iconSize, children }) => (
    <NavLink to={to} className='flex items-center gap-5 font-semibold'>
        <Icon className={iconSize} />
        {children}
    </NavLink>
);

const Sidebar = ({ showSidebar, setShowSidebar }) => {

    // translation ------------
    const {t} = useTranslation();
    const lang = t('Sidebar');
    // ------------------------



    const [expandMenus, setExpandMenus] = useState({
        users: false,
        customers: false,
        reports: false,
        accounts: false,
        settings: false
    });

    const toggleMenu = (menu) => {
        setExpandMenus((prev) => ({
            users: false,
            customers: false,
            reports: false,
            accounts: false,
            settings: false,
            [menu]: !prev[menu],
        }));
    };

    return (
        <div className={`lg:w-[250px] xl:w-[300px] ${showSidebar ? 'left-0' : '-left-[400]'} fixed top-0 lg:left-0 z-[100] z h-full overflow-y-scroll sidebar-custom-scrollbar flex items-start transition-all duration-500 ease-in-out`}>

            <div className="w-full min-h-screen bg-white flex flex-col items-start gap-3 text-black px-8 py-5  shadow-xl relative">

                {/* logo */}
                <Link to={'/'} className="text-3xl font-bold py-2">Bankers</Link>

                {/* dashboard */}
                <div className="pb-1">
                    <SidebarLink to='/' icon={MdOutlineDesktopMac}>{lang?.dashboard}</SidebarLink>
                </div>

                {/* customers */}
                <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('customers')}>
                    <span className="flex items-center gap-5 font-semibold"><FaUserGroup />{lang?.customers}</span>
                    <IoIosArrowDown className={expandMenus.customers ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.customers ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8 ">
                        <SidebarLink to='/area' icon={MdSpaceDashboard}>{lang?.area}</SidebarLink>
                        <SidebarLink to='/add-customer' icon={RiUserAddFill}>{lang?.addNew}</SidebarLink>
                        <SidebarLink to='/customers-list' icon={FaUsers}>{lang?.customerList}</SidebarLink>
                        <SidebarLink to='/customer-laser' icon={GrGrid}>{lang?.customerLaser}</SidebarLink>
                    </div>
                </div>

                {/* reports */}
                <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('reports')}>
                    <span className="flex items-center gap-6 font-semibold"><BsPieChartFill />{lang?.reports}</span>
                    <IoIosArrowDown className={expandMenus.reports ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.reports ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/settlement-reports' icon={RiDonutChartFill}>{lang?.settlementReports}</SidebarLink>
                        <SidebarLink to='/collection-reports' icon={BsBarChartLineFill}>{lang?.collectionReports}</SidebarLink>
                        <SidebarLink to='/collection-sheet' icon={BsFileEarmarkSpreadsheetFill}>{lang?.collectionSheet}</SidebarLink>
                        <SidebarLink to='/message-reports' icon={MdMessage}>{lang?.messageReports}</SidebarLink>
                    </div>
                </div>

                {/* accounts */}
                <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                    <span className="flex items-center gap-6 font-semibold"><BsPieChartFill />{lang?.accounts}</span>
                    <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/share' icon={RiStackshareFill}>{lang?.share}</SidebarLink>
                        <SidebarLink to='/savings' icon={RiBankCardFill}>{lang?.savings}</SidebarLink>
                        <SidebarLink to='/fixed-deposit' icon={RiDonutChartFill}>{lang?.fixedDeposit}</SidebarLink>
                        <SidebarLink to='/dps' icon={SiGoogletagmanager}>{lang?.dps}</SidebarLink>
                        <SidebarLink to='/loan' icon={BsGridFill}>{lang?.loan}</SidebarLink>
                        <SidebarLink to='/insurance' icon={RiFlowerFill}>{lang?.insurance}</SidebarLink>
                    </div>
                </div>

                {/* banking */}
                <SidebarLink to='/banking' icon={PiBankFill} iconSize={'text-xl'}>{lang?.banking}</SidebarLink>

                {/* income - expenditure */}
                <div className="py-2">
                    <SidebarLink to='/income-expenditure' icon={BsGraphUp} iconSize={'text-base'}>{lang?.incomeExpenditure}</SidebarLink>
                </div>

                {/* salary */}
                <SidebarLink to='/salaries-of-employeees' icon={FaMoneyCheckDollar} iconSize={'text-base'}>{lang?.salariesOfEmployees}</SidebarLink>

                {/* profits */}
                <div className="py-2">
                    <SidebarLink to='/profits-distribution' icon={MdGraphicEq} iconSize={'text-xl'}>{lang?.profitDistribution}</SidebarLink>
                </div>

                <div className="w-full h-[1px] bg-slate-200"></div>

                {/* settings */}
                <button className="w-full flex justify-between items-center gap-5" onClick={() => toggleMenu('settings')}>
                    <span className="flex items-center gap-5 font-semibold"><FaGear />{lang?.settings}</span>
                    <IoIosArrowDown className={expandMenus.settings ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.settings ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/business-settings' icon={FaKey}>{lang?.businessSettings}</SidebarLink>
                        <SidebarLink to='/profile' icon={FaUserCircle}>{lang?.profile}</SidebarLink>
                    </div>
                </div>

                {/* users */}
                <button className="w-full flex justify-between items-center gap-5" onClick={() => toggleMenu('users')}>
                    <span className="flex items-center gap-5 font-semibold"><FaUserTie />{lang?.users}</span>
                    <IoIosArrowDown className={expandMenus.users ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.users ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/add-user' icon={RiUserAddFill}>{lang?.addNew}</SidebarLink>
                        <SidebarLink to='/userslist' icon={FaUsers}>{lang?.userList}</SidebarLink>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-slate-200"></div>

                {/* help center */}
                <div className="py-2">
                    <SidebarLink to='/help-center' icon={MdOutlineSupportAgent} iconSize={'text-xl'}>{lang?.helpCenter}</SidebarLink>
                </div>

                {/* logout */}
                <SidebarLink to='/' icon={ImSwitch} iconSize={'text-base'}>{lang?.logout}</SidebarLink>

            </div>

            {/* mobile - menu hide btn */}
            <button onClick={() => setShowSidebar(false)} className="absolute top-3 right-4 text-2xl bg-white border-2 border-slate-700 mt-3 lg:hidden"><FaXmark /></button>

        </div>
    );
};

export default Sidebar;


SidebarLink.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    children: PropTypes.node.isRequired,
    iconSize: PropTypes.string,
};

Sidebar.propTypes = {
    showSidebar: PropTypes.bool,
    setShowSidebar: PropTypes.func,
}
