import { BsFillGridFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { SiGooglesheets } from "react-icons/si";
import { FaUsers, FaUsersGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const Overview = () => {

    // fake data
    const customers = [
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
    ];

    
    // ------------------------------------------

    // translation ----------------------
    const { t } = useTranslation();
    const lang = t('AdminDashboard').Overview;
    // ----------------------------------


    return (
        <div className="bg-white p-4 shadow-sm mt-6 h-max">

            <div className="flex justify-between gap-4 pb-3 mb-3 border-b border-b-slate-300">
                {/* title */}
                <h2 className="text-base md:text-xl font-bold flex items-center gap-2"><BsFillGridFill className="mt-1" />{lang.overview}</h2>
                <div className="flex items-center gap-3">
                    <Link to={'/message-reports'}>
                        <p className="flex items-center gap-1 bg-slate-200 px-3 py-1"><IoIosMail /> 0</p>
                    </Link>
                    <Link to={'/settlement-reports'}>
                        <p className="flex items-center gap-1 bg-slate-200 px-3 py-1"><SiGooglesheets />{lang.fullReport}</p>
                    </Link>
                </div>
            </div>

            {/* balances */}
            <div className="font-bold space-y-3">
                <div className="bg-blue-600 p-3 rounded-md text-white">
                    <p>{lang.availableBalance}</p>
                    <p className="font-semibold"><span className="text-base md:text-lg">৳</span>5000000</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-200 p-3 rounded-md">
                        <p>{lang.businessCapital}</p>
                        <p className="font-semibold"><span className="text-base md:text-lg">৳</span>0</p>
                    </div>
                    <div className="bg-slate-200 p-3 rounded-md">
                        <p>{lang.profits}</p>
                        <p className="font-semibold"><span className="text-base md:text-lg">৳</span>0</p>
                    </div>
                </div>
            </div>

            {/* active customers */}
            <div>
                <div className="flex justify-between gap-4 pb-3 mb-3 border-b border-b-slate-300 pt-10">
                    {/* title */}
                    <h2 className="text-base md:text-xl font-bold flex items-center gap-2"><FaUsersGear className="mt-1" />{lang.activeCustomers}</h2>
                    <Link to={'/customers-list'}>
                        <p className="flex items-center gap-1 bg-slate-200 px-3 py-1"><FaUsers />{lang.totalCustomers}:{customers?.length}</p>
                    </Link>
                </div>

                {/* customers */}
                <div className="flex gap-3 overflow-x-scroll">
                    {
                        customers?.map((customer, idx) =>
                            <div key={idx} className="space-y-3 my-3">
                                <img src={customer?.image} className="max-w-28 max-h-28 object-cover rounded-full flex flex-col justify-center" alt={customer?.name} />
                                <a href={`tel:${customer?.mobile}`} className="block text-center hover:underline">{customer?.mobile}</a>
                                <Link to={'/customer-profile'} className="w-24 mx-auto flex items-center gap-1 text-white font-semibold bg-blue-600 px-3 py-1 rounded-md">
                                    <FaUserCircle />
                                    {lang.profile}
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default Overview;