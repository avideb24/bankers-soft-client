import PropTypes from 'prop-types';
import { CiSearch } from "react-icons/ci";


const Header = ({ title }) => {

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
                                <input type="text" onChange={(e) => handleSearchCustomer(e)} className='w-full bg-white pl-6 pr-2 py-1 border-2 border-slate-300 rounded-md outline-none' placeholder='Search Customer...' />
                                <span className='absolute left-2 top-[10px] text-slate-600'><CiSearch /></span>
                            </form>
                            :
                            <h1 className='text-base lg:text-xl font-semibold capitalize'>{title}</h1>
                    }
                    <button className='bg-primary-color text-white font-semibold px-3 py-1 rounded-sm'>+ Add New</button>
                </div>
            </div>
        </div>
    );
};

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
