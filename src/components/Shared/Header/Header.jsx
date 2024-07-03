import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Button from '../Button/Button';
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = ({ title }) => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleSearchCustomer = e => {
        const searchText = e.target.value;
        console.log(searchText);
    }


    return (
        <div className='sticky z-40 left-0 top-0 p-4 bg-white shadow-md'>

            <div className='pl-10 lg:pl-0'>
                <div className='flex justify-between gap-2'>
                    {
                        title == 'home' ?
                            <form className='max-w-sm relative'>
                                <input type="text" onChange={(e) => handleSearchCustomer(e)} className='w-full bg-white pl-6 pr-2 py-1 border-2 border-slate-300 rounded-[4px] outline-none' placeholder='Search Customer...' />
                                <span className='absolute left-2 top-[10px] text-slate-600'><CiSearch /></span>
                            </form>
                            :
                            <h1 className='text-base lg:text-xl font-semibold capitalize'>{title}</h1>
                    }

                    <div className='relative'>
                        {/* menu btn */}
                        <Button text={"Add New"} icon={FaPlusCircle} bg={'bg-blue-600'} handleClick={() => setOpenMenu(!openMenu)} />
                        {/* menu */}
                        <div className={`${openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute -left-4 -bottom-28 flex bg-white z-50 flex-col shadow-md rounded-sm duration-300`}>
                            <Link to={'/customers-list'} className='px-3 py-1 hover:bg-slate-200 mt-2 duration-300'>+ New Loan</Link>
                            <Link to={'/customers-list'} className='px-3 py-1 hover:bg-slate-200 duration-300'>+ New Savings</Link>
                            <Link to={'/customers-list'} className='px-3 py-1 hover:bg-slate-200 mb-2 duration-300'>+ New DPS</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
