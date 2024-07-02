import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { MdOutlineDesktopMac, MdSpaceDashboard, MdMessage, MdGraphicEq, MdOutlineSupportAgent } from "react-icons/md";
import { FaUsers, FaUserTie ,FaUserCircle } from "react-icons/fa";
import { RiUserAddFill, RiDonutChartFill, RiStackshareFill, RiBankCardFill, RiFlowerFill } from "react-icons/ri";
import { FaUserGroup, FaMoneyCheckDollar,  FaGear ,FaKey, FaXmark } from "react-icons/fa6";
import { GrGrid } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { BsPieChartFill, BsBarChartLineFill, BsFileEarmarkSpreadsheetFill, BsGridFill, BsGraphUp } from "react-icons/bs";
import { PiBankFill } from "react-icons/pi";
import { SiGoogletagmanager } from "react-icons/si";
import { ImSwitch } from "react-icons/im";

const SidebarLink = ({ to, icon: Icon, iconSize, children }) => (
    <NavLink to={to} className='flex items-center gap-5 font-semibold'>
        <Icon className={iconSize} />
        {children}
    </NavLink>
);


const Sidebar = ({showSidebar, setShowSidebar}) => {


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
        <div className={`lg:w-[250px] xl:w-[300px] ${showSidebar ? 'left-0' : '-left-[400]'} fixed top-0 lg:left-0 z-[100] z h-full overflow-y-scroll sidebar-custom-scrollbar flex items-start duration-500`}>

            <div className="w-full min-h-screen bg-white flex flex-col items-start gap-3 text-black px-8 py-5  shadow-xl relative">

                {/* logo */}
                <Link to={'/'} className="text-3xl font-bold py-2">Bankers</Link>

                {/* dashboard */}
                <div className="pb-1">
                    <SidebarLink to='/' icon={MdOutlineDesktopMac}>Dashboard</SidebarLink>
                </div>

                {/* customers */}
                <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('customers')}>
                    <span className="flex items-center gap-5 font-semibold"><FaUserGroup />Customers</span>
                    <IoIosArrowDown className={expandMenus.customers ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.customers ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8 ">
                        <SidebarLink to='/area' icon={MdSpaceDashboard}>Area</SidebarLink>
                        <SidebarLink to='/add-customer' icon={RiUserAddFill}>Add New</SidebarLink>
                        <SidebarLink to='/customers-list' icon={FaUsers}>Customer List</SidebarLink>
                        <SidebarLink to='/customer-laser' icon={GrGrid}>Customer Laser</SidebarLink>
                    </div>
                </div>

                {/* reports */}
                <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('reports')}>
                    <span className="flex items-center gap-6 font-semibold"><BsPieChartFill />Reports</span>
                    <IoIosArrowDown className={expandMenus.reports ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.reports ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/settlement-reports' icon={RiDonutChartFill}>Sattlement Reports</SidebarLink>
                        <SidebarLink to='/collection-reports' icon={BsBarChartLineFill}>Collection Reports</SidebarLink>
                        <SidebarLink to='/collection-sheet' icon={BsFileEarmarkSpreadsheetFill}>Collection Sheet</SidebarLink>
                        <SidebarLink to='/message-reports' icon={MdMessage}>Message Reports</SidebarLink>
                    </div>
                </div>

                {/* accounts */}
                <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                    <span className="flex items-center gap-6 font-semibold"><BsPieChartFill />Accounts</span>
                    <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/share' icon={RiStackshareFill}>Share</SidebarLink>
                        <SidebarLink to='/savings' icon={RiBankCardFill}>Savings</SidebarLink>
                        <SidebarLink to='/fixed-deposit' icon={RiDonutChartFill}>Fixed Deposite</SidebarLink>
                        <SidebarLink to='/dps' icon={SiGoogletagmanager}>DPS</SidebarLink>
                        <SidebarLink to='/loan' icon={BsGridFill}>Loan</SidebarLink>
                        <SidebarLink to='/insurance' icon={RiFlowerFill}>Insurance</SidebarLink>
                    </div>
                </div>

                {/* banking */}
                <SidebarLink to='/banking' icon={PiBankFill} iconSize={'text-xl'}>Banking</SidebarLink>

                {/* income - expenditure */}
                <div className="py-2">
                    <SidebarLink to='/income-expenditure' icon={BsGraphUp} iconSize={'text-base'}>Income - Expenditure</SidebarLink>
                </div>

                {/* salary */}
                <SidebarLink to='/salaries-of-employeees' icon={FaMoneyCheckDollar} iconSize={'text-base'}>Salaries of Employees</SidebarLink>

                {/* profits */}
                <div className="py-2">
                    <SidebarLink to='/profits-distribution' icon={MdGraphicEq} iconSize={'text-xl'}>Profits Distribution</SidebarLink>
                </div>

                <div className="w-full h-[1px] bg-slate-200"></div>

                {/* settings */}
                <button className="w-full flex justify-between items-center gap-5" onClick={() => toggleMenu('settings')}>
                    <span className="flex items-center gap-5 font-semibold"><FaGear />Settings</span>
                    <IoIosArrowDown className={expandMenus.settings ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.settings ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/business-settings' icon={FaKey}>Bussiness Settings</SidebarLink>
                        <SidebarLink to='/profile' icon={FaUserCircle}>Profile</SidebarLink>
                    </div>
                </div>

                {/* users */}
                <button className="w-full flex justify-between items-center gap-5" onClick={() => toggleMenu('users')}>
                    <span className="flex items-center gap-5 font-semibold"><FaUserTie />Users</span>
                    <IoIosArrowDown className={expandMenus.users ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.users ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/add-user' icon={RiUserAddFill}>Add User</SidebarLink>
                        <SidebarLink to='/userslist' icon={FaUsers}>Users List</SidebarLink>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-slate-200"></div>

                {/* help center */}
                <div className="py-2">
                    <SidebarLink to='/help-center' icon={MdOutlineSupportAgent} iconSize={'text-xl'}>Help Center</SidebarLink>
                </div>

                {/* logout */}
                <SidebarLink to='/' icon={ImSwitch} iconSize={'text-base'}>Log Out</SidebarLink>

            </div>

            {/* mobile - menu hide btn */}
            <button onClick={() => setShowSidebar(false)}  className="absolute top-3 right-4 text-2xl bg-white border-2 border-slate-700 mt-3 lg:hidden"><FaXmark /></button> 

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
