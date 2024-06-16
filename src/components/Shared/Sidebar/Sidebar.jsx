import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { MdOutlineDesktopMac, MdSpaceDashboard, MdMessage,MdSettings } from "react-icons/md";
import { FaUsers, FaUserTie } from "react-icons/fa";
import { RiUserAddFill, RiDonutChartFill, RiStackshareFill,RiBankCardFill, RiFlowerFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { GrGrid } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { BsPieChartFill, BsBarChartLineFill, BsFileEarmarkSpreadsheetFill,BsGridFill  } from "react-icons/bs";
import { PiBankFill } from "react-icons/pi";
import { SiGoogletagmanager } from "react-icons/si";

const SidebarLink = ({ to, icon: Icon, iconSize, children }) => (
    <NavLink  to={to} className='flex items-center gap-2'>
        <Icon className={iconSize} />
        {children}
    </NavLink>
);


const Sidebar = () => {
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
        <div className="w-full min-h-screen bg-transparent flex flex-col items-start gap-3 text-black px-8 py-5 text-base shadow-xl">

            {/* logo */}
            <Link to={'/'} className="text-3xl font-bold py-2">Bankers</Link>

            {/* dashboard */}
            <SidebarLink to='/' icon={MdOutlineDesktopMac}>Dashboard</SidebarLink>

            {/* users */}
            <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('users')}>
                <span className="flex items-center gap-2"><FaUserTie />Users</span>
                <IoIosArrowDown className={expandMenus.users ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.users ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={RiUserAddFill}>Add User</SidebarLink>
                    <SidebarLink to='/' icon={FaUsers}>Users</SidebarLink>
                </div>
            </div>

            {/* customers */}
            <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('customers')}>
                <span className="flex items-center gap-2"><FaUserGroup />Customers</span>
                <IoIosArrowDown className={expandMenus.customers ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.customers ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={MdSpaceDashboard}>Area</SidebarLink>
                    <SidebarLink to='/' icon={RiUserAddFill}>Add New</SidebarLink>
                    <SidebarLink to='/' icon={FaUsers}>Customer List</SidebarLink>
                    <SidebarLink to='/' icon={GrGrid}>Customer Laser</SidebarLink>
                </div>
            </div>

            {/* reports */}
            <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('reports')}>
                <span className="flex items-center gap-2"><BsPieChartFill />Reports</span>
                <IoIosArrowDown className={expandMenus.reports ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.reports ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={RiDonutChartFill}>Sattlement Reports</SidebarLink>
                    <SidebarLink to='/' icon={BsBarChartLineFill}>Coolection Reports</SidebarLink>
                    <SidebarLink to='/' icon={BsFileEarmarkSpreadsheetFill}>Collection Sheet</SidebarLink>
                    <SidebarLink to='/' icon={MdMessage}>Message Reports</SidebarLink>
                </div>
            </div>

            {/* accounts */}
            <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                <span className="flex items-center gap-2"><BsPieChartFill />Accounts</span>
                <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={RiStackshareFill}>Share</SidebarLink>
                    <SidebarLink to='/' icon={RiBankCardFill }>Savings</SidebarLink>
                    <SidebarLink to='/' icon={RiDonutChartFill}>Fixed Deposite</SidebarLink>
                    <SidebarLink to='/' icon={SiGoogletagmanager}>DPS</SidebarLink>
                    <SidebarLink to='/' icon={BsGridFill }>Loan</SidebarLink>
                    <SidebarLink to='/' icon={RiFlowerFill}>Insurance</SidebarLink>
                </div>
            </div>






{/* accounts */}
<button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                <span className="flex items-center gap-2"><BsPieChartFill />Accounts</span>
                <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={RiStackshareFill}>Share</SidebarLink>
                    <SidebarLink to='/' icon={RiBankCardFill }>Savings</SidebarLink>
                    <SidebarLink to='/' icon={RiDonutChartFill}>Fixed Deposite</SidebarLink>
                    <SidebarLink to='/' icon={SiGoogletagmanager}>DPS</SidebarLink>
                    <SidebarLink to='/' icon={BsGridFill }>Loan</SidebarLink>
                    <SidebarLink to='/' icon={RiFlowerFill}>Insurance</SidebarLink>
                </div>
            </div>{/* accounts */}
            <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                <span className="flex items-center gap-2"><BsPieChartFill />Accounts</span>
                <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={RiStackshareFill}>Share</SidebarLink>
                    <SidebarLink to='/' icon={RiBankCardFill }>Savings</SidebarLink>
                    <SidebarLink to='/' icon={RiDonutChartFill}>Fixed Deposite</SidebarLink>
                    <SidebarLink to='/' icon={SiGoogletagmanager}>DPS</SidebarLink>
                    <SidebarLink to='/' icon={BsGridFill }>Loan</SidebarLink>
                    <SidebarLink to='/' icon={RiFlowerFill}>Insurance</SidebarLink>
                </div>
            </div>{/* accounts */}
            <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                <span className="flex items-center gap-2"><BsPieChartFill />Accounts</span>
                <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={RiStackshareFill}>Share</SidebarLink>
                    <SidebarLink to='/' icon={RiBankCardFill }>Savings</SidebarLink>
                    <SidebarLink to='/' icon={RiDonutChartFill}>Fixed Deposite</SidebarLink>
                    <SidebarLink to='/' icon={SiGoogletagmanager}>DPS</SidebarLink>
                    <SidebarLink to='/' icon={BsGridFill }>Loan</SidebarLink>
                    <SidebarLink to='/' icon={RiFlowerFill}>Insurance</SidebarLink>
                </div>
            </div>{/* accounts */}
            <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                <span className="flex items-center gap-2"><BsPieChartFill />Accounts</span>
                <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={RiStackshareFill}>Share</SidebarLink>
                    <SidebarLink to='/' icon={RiBankCardFill }>Savings</SidebarLink>
                    <SidebarLink to='/' icon={RiDonutChartFill}>Fixed Deposite</SidebarLink>
                    <SidebarLink to='/' icon={SiGoogletagmanager}>DPS</SidebarLink>
                    <SidebarLink to='/' icon={BsGridFill }>Loan</SidebarLink>
                    <SidebarLink to='/' icon={RiFlowerFill}>Insurance</SidebarLink>
                </div>
            </div>{/* accounts */}
            <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                <span className="flex items-center gap-2"><BsPieChartFill />Accounts</span>
                <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={RiStackshareFill}>Share</SidebarLink>
                    <SidebarLink to='/' icon={RiBankCardFill }>Savings</SidebarLink>
                    <SidebarLink to='/' icon={RiDonutChartFill}>Fixed Deposite</SidebarLink>
                    <SidebarLink to='/' icon={SiGoogletagmanager}>DPS</SidebarLink>
                    <SidebarLink to='/' icon={BsGridFill }>Loan</SidebarLink>
                    <SidebarLink to='/' icon={RiFlowerFill}>Insurance</SidebarLink>
                </div>
            </div>{/* accounts */}
            <button className="w-full flex justify-between items-center gap-2" onClick={() => toggleMenu('accounts')}>
                <span className="flex items-center gap-2"><BsPieChartFill />Accounts</span>
                <IoIosArrowDown className={expandMenus.accounts ? 'rotate-180 duration-200' : 'duration-200'} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandMenus.accounts ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3 ml-8">
                    <SidebarLink to='/' icon={RiStackshareFill}>Share</SidebarLink>
                    <SidebarLink to='/' icon={RiBankCardFill }>Savings</SidebarLink>
                    <SidebarLink to='/' icon={RiDonutChartFill}>Fixed Deposite</SidebarLink>
                    <SidebarLink to='/' icon={SiGoogletagmanager}>DPS</SidebarLink>
                    <SidebarLink to='/' icon={BsGridFill }>Loan</SidebarLink>
                    <SidebarLink to='/' icon={RiFlowerFill}>Insurance</SidebarLink>
                </div>
            </div>  









            {/* banking */}
            <SidebarLink to='/' icon={PiBankFill} iconSize={'text-xl'}>Banking</SidebarLink>

            <div className="w-full h-[1px] bg-slate-200"></div>

            {/* setting */}
            <SidebarLink to='/' icon={MdSettings} iconSize={'text-xl'}>Setting</SidebarLink>

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
