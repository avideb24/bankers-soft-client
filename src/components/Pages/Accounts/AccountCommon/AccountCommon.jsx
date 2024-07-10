import PropTypes from 'prop-types';
import Header from '../../../Shared/Header/Header';
import Button from '../../../Shared/Button/Button';
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const AccountCommon = ({ accountType, title, icon: Icon }) => {

    // fake data
    const data = [
        { id: 1, name: 'Belal', image: 'https://i.ibb.co/NZFtFPL/user.png', accountNo: '5456412', balance: '5000' },
        { id: 2, name: 'Belal', image: 'https://i.ibb.co/NZFtFPL/user.png', accountNo: '5456412', balance: '5000' },
        { id: 3, name: 'Belal', image: 'https://i.ibb.co/NZFtFPL/user.png', accountNo: '5456412', balance: '5000' },
        { id: 4, name: 'Belal', image: 'https://i.ibb.co/NZFtFPL/user.png', accountNo: '5456412', balance: '5000' },
        { id: 5, name: 'Belal', image: 'https://i.ibb.co/NZFtFPL/user.png', accountNo: '5456412', balance: '5000' },
    ]

    // -----------------------

     // translation -----------
     const {t} = useTranslation();
     const lang = t('Accounts').AccountCommon;
     // -----------------------

    const navigate = useNavigate();
    

    const handleNavigate = () => {
        navigate('/admin/customers-list')
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
                <Button text={`${lang.new} ${title}`} icon={FaCirclePlus} bg='bg-blue-600' handleClick={handleNavigate} />
                <Button text={lang.searchCustomer} icon={IoSearch} bg='bg-orange-600' handleClick={() => document.getElementById('my_modal_1').showModal()} />

                {/* modal body */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box min-w-80 relative bg-white">
                        <div className="rounded-sm">
                            <h2 className="flex items-center gap-2 text-base md:text-xl font-bold pb-2"><IoSearch />Search Customer</h2>
                            <form onSubmit={handleSearchCustomer} className="space-y-3">
                                <label className="text-sm md:text-base font-semibold" htmlFor="mobile">Search By Mobile/AC</label>
                                <input type="number" name="mobile" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="mobile" placeholder="Type here..." required />
                                <div className="text-right">
                                    <input type="submit" value="Search" className="bg-green-600 px-3 py-1 rounded-sm text-white font-semibold cursor-pointer" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-action absolute right-28 bottom-6">
                            <form method="dialog">
                                {/* close btn */}
                                <button className="bg-red-600 text-white px-3 py-1 rounded-sm">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

            <div className='bg-white m-4 p-5 shadow-sm'>

                <h2 className='text-lg md:text-2xl flex items-center gap-2 font-semibold pb-3 border-b border-b-slate-300'><Icon className='mt-1' />{title} {lang.customer}</h2>

                {/* content */}
                <div className='mt-3 border border-slate-300 p-4 rounded-sm'>
                    {
                        data?.length == 0 ?
                            <p>{lang.notFound}</p>
                            :
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                                {
                                    data?.map((data, idx) =>
                                        <Link to={`/admin/wallet/${accountType}/${data?.id}`} key={idx} className='flex gap-3 border border-slate-300 p-2 rounded-sm'>
                                            <img src={data?.image} className='max-w-14 max-h-16 object-contain rounded-md' alt={data?.name} />
                                            <div className='hover:text-blue-600 duration-300'>
                                                <h3 className='font-bold'>{data?.name}</h3>
                                                <p><span className='font-bold'>{lang.accountNo}: </span>{data?.accountNo}</p>
                                                <p><span className='font-bold'>{lang.balance}: </span><span className='text-base md:text-lg'>৳</span>{data?.balance}</p>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                    }
                </div>

            </div>

        </div>
    );
};

export default AccountCommon;

AccountCommon.propTypes = {
    title: PropTypes.string,
    accountType: PropTypes.string,
    icon: PropTypes.elementType,
}