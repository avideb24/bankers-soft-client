import PropTypes from 'prop-types';
import Header from '../../../Shared/Header/Header';
import Button from '../../../Shared/Button/Button';
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const AccountCommon = ({ title, icon: Icon }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/customers-list')
    };


    // search customer fn
    const handleSearchCustomer = e => {
        e.preventDefault();

        const searchText = e.target.mobile.value;

        console.log(searchText);
    };


    return (
        <div>
            <Header title={title} />

            <div className='m-4 py-2 flex gap-4'>
                    <Button text={`New ${title}`} icon={FaCirclePlus} bg='bg-blue-600' handleClick={handleNavigate} />
                    <Button text='Search Customer' icon={IoSearch} bg='bg-orange-600' handleClick={() => document.getElementById('my_modal_1').showModal()} />

                    {/* modal body */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box min-w-80 relative">
                            <div className="p-4 rounded-sm">
                                <h2 className="flex items-center gap-2 text-base md:text-xl font-bold pb-2"><IoSearch />Search Customer</h2>
                                <form onSubmit={handleSearchCustomer} className="space-y-3">
                                    <label className="text-sm md:text-base font-semibold" htmlFor="mobile">Search By Mobile/AC</label>
                                    <input type="number" name="mobile" className="w-full border border-slate-300 rounded-sm px-2 py-1 outline-none" id="mobile" placeholder="Type here..." required />
                                    <div className="text-right">
                                        <input type="submit" value="Search" className="bg-green-600 px-3 py-1 rounded-sm text-white font-semibold cursor-pointer" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* close btn */}
                                    <button className="btn absolute right-24 bottom-4 bg-red-600 text-white px-3 py-1 rounded-sm">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>

            <div className='bg-white m-4 p-5 shadow-sm'>

                <h2 className='text-lg md:text-2xl flex items-center gap-2 font-semibold pb-3 border-b border-b-slate-300'><Icon className='mt-1' />{title} Customers</h2>

                {/* content */}
                <div className='mt-3 border border-slate-300 p-4 rounded-sm'>
                    <p>No records found!</p>
                </div>

            </div>

        </div>
    );
};

export default AccountCommon;

AccountCommon.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
}