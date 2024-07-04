import { Link } from "react-router-dom";
import { TbTransfer } from "react-icons/tb";
import { MdOutlineChecklist } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


const LastTransactions = () => {

    // fake data
    const transactions = [
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png'},
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png'},
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png'},
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png'},
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png'},
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png'},
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png'},
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png'},
    ];


    // translation ----------------------
    const { t } = useTranslation();
    const lang = t('AdminDashboard').LastTransactions;
    // ----------------------------------


    return (
        <div className="bg-white p-4 shadow-sm mt-6 h-max">

            <div className="flex justify-between gap-4 pb-3 mb-3 border-b border-b-slate-300">
                {/* title */}
                <h2 className="text-base md:text-xl font-bold flex items-center gap-2"><TbTransfer className="mt-1" />{lang.lastTransactions}</h2>
                <div className="flex items-center gap-3">
                    <Link to={'/transactions'}>
                        <p className="flex items-center gap-1 bg-slate-200 px-3 py-1"><MdOutlineChecklist /> {lang.seeAll}</p>
                    </Link>
                </div>
            </div>

            {/* transaction table */}
            <div className="overflow-x-scroll">
                <table className="w-full bg-slate-50 text-center">
                    <thead>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions?.map((transac, idx) =>
                            <tr key={idx} className="py-3 border-t border-t-slate-300">
                                <td>
                                    <img src={transac?.image} className="w-10 h-10 object-cover rounded-full" alt="" />
                                </td>
                                <td className="p-1">
                                    <p className="font-bold">Belal</p>
                                    <p>25-06-24</p>
                                </td>
                                <td className="p-1">
                                    <p>Finances (Expense) </p>
                                    <p className="flex justify-center items-center"><FaCirclePlus /><span className="text-sm md:text-lg ml-1">৳</span>100</p>
                                </td>
                                <td className="p-1">
                                    <p className="font-semibold">Approver</p>
                                    <p>Avi Debnath</p>
                                </td>
                                <td className="p-1">
                                    <Link to={'/income-expenditure'}>
                                        <button className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md">Check</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default LastTransactions;