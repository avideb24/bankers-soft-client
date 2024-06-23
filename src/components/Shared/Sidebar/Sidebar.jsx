import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { MdOutlineDesktopMac, MdSpaceDashboard, MdMessage, MdGraphicEq, MdOutlineSupportAgent } from "react-icons/md";
import { FaUsers, FaUserTie } from "react-icons/fa";
import { RiUserAddFill, RiDonutChartFill, RiStackshareFill, RiBankCardFill, RiFlowerFill } from "react-icons/ri";
import { FaUserGroup, FaMoneyCheckDollar, FaXmark } from "react-icons/fa6";
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


const Sidebar = ({ showSidebar, setShowSidebar }) => {


    const [expandMenus, setExpandMenus] = useState({
        users: false,
        customers: false,
        reports: false,
        accounts: false,
    });

    const toggleMenu = (menu) => {
        setExpandMenus((prev) => ({
            users: false,
            customers: false,
            reports: false,
            accounts: false,
            [menu]: !prev[menu],
        }));
    };

    return (
        <div className={`w-72 lg:w-[20%] h-full overflow-y-scroll fixed z-50 top-0  ${showSidebar ? 'left-0' : '-left-full'} lg:left-0 sidebar-custom-scrollbar flex items-start duration-300`}>

            <div className="w-full min-h-screen bg-white flex flex-col items-start gap-3 text-black px-8 py-5 text-base shadow-xl relative">

                {/* logo */}
                <Link to={'/'} className="text-3xl font-bold py-2">Bankers</Link>

                {/* dashboard */}
                <div className="pb-1">
                    <SidebarLink to='/' icon={MdOutlineDesktopMac}>Dashboard</SidebarLink>
                </div>

                {/* users */}
                <button className="w-full flex justify-between items-center gap-5" onClick={() => toggleMenu('users')}>
                    <span className="flex items-center gap-5 font-semibold"><FaUserTie />Users</span>
                    <IoIosArrowDown className={expandMenus.users ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.users ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/add-user' icon={RiUserAddFill}>Add User</SidebarLink>
                        <SidebarLink to='/userslist' icon={FaUsers}>Users</SidebarLink>
                    </div>
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
                        <SidebarLink to='/' icon={BsFileEarmarkSpreadsheetFill}>Collection Sheet</SidebarLink>
                        <SidebarLink to='/' icon={MdMessage}>Message Reports</SidebarLink>
                    </div>
                </div>

                {/* accounts */}
                <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                    <span className="flex items-center gap-6 font-semibold"><BsPieChartFill />Accounts</span>
                    <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 ml-8">
                        <SidebarLink to='/' icon={RiStackshareFill}>Share</SidebarLink>
                        <SidebarLink to='/' icon={RiBankCardFill}>Savings</SidebarLink>
                        <SidebarLink to='/' icon={RiDonutChartFill}>Fixed Deposite</SidebarLink>
                        <SidebarLink to='/' icon={SiGoogletagmanager}>DPS</SidebarLink>
                        <SidebarLink to='/' icon={BsGridFill}>Loan</SidebarLink>
                        <SidebarLink to='/' icon={RiFlowerFill}>Insurance</SidebarLink>
                    </div>
                </div>

                {/* banking */}
                <SidebarLink to='/' icon={PiBankFill} iconSize={'text-xl'}>Banking</SidebarLink>

                {/* income - expenditure */}
                <div className="py-2">
                    <SidebarLink to='/' icon={BsGraphUp} iconSize={'text-base'}>Income - Expenditure</SidebarLink>
                </div>

                {/* salary */}
                <SidebarLink to='/' icon={FaMoneyCheckDollar} iconSize={'text-base'}>Salaries of Employees</SidebarLink>

                {/* profits */}
                <div className="py-2">
                    <SidebarLink to='/' icon={MdGraphicEq} iconSize={'text-xl'}>Profitsa of Distribution</SidebarLink>
                </div>

                <div className="w-full h-[1px] bg-slate-200"></div>

                {/* help center */}
                <div className="py-2">
                    <SidebarLink to='/' icon={MdOutlineSupportAgent} iconSize={'text-xl'}>Help Center</SidebarLink>
                </div>

                {/* logout */}
                <SidebarLink to='/' icon={ImSwitch} iconSize={'text-base'}>Log Out</SidebarLink>

            </div>

            {/* mobile - menu hide btn */}
            <button onClick={() => setShowSidebar(false)} className="absolute top-3 right-4 text-2xl bg-white border-2 text-primary-color border-primary-color mt-3 lg:hidden"><FaXmark /></button>

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
