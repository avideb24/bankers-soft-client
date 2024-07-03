import Header from "../../../../components/Shared/Header/Header";
import { FaUsers } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";


const CustomersList = () => {
    
    // fake data
    const customers = [
        { name: 'Belal', area: 'Nilphamari', mobile: '01723622125', accountNo: '657465456', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', area: 'Nilphamari', mobile: '01723622125', accountNo: '657465456', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', area: 'Nilphamari', mobile: '01723622125', accountNo: '657465456', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', area: 'Nilphamari', mobile: '01723622125', accountNo: '657465456', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', area: 'Nilphamari', mobile: '01723622125', accountNo: '657465456', img: 'https://i.ibb.co/XFw1xTb/user.png' },
    ];


    // ---------------------------------

    // translation -----------
    const { t } = useTranslation();
    const lang = t('Customers')
    // -----------------------


    // delete customer fn
    const handleDeteleCustomer = id => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete!"
        }).then((result) => {
            if (result.isConfirmed) {

                // call delete api here

                console.log(id);

                Swal.fire({
                    title: "Deleted!",
                    text: "User been deleted!",
                    icon: "success"
                });
            }
        });

    }


    return (
        <div>
            
            <Header title={lang.customerList} />

            <div className="bg-white m-3 px-5 py-4">

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-5 pb-3 border-b border-b-slate-300">
                    <h2 className="flex items-center gap-2 text-base font-bold"><FaUsers className="text-2xl" /> <span>{lang.allCustomers}</span></h2>
                    <form className="flex items-center gap-2">
                        <input type="text" className="w-full border-2 border-slate-200 bg-transparent px-2 py-[6px] rounded-sm outline-none" placeholder={`${lang.customerName}...`} />
                        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-sm">
                            <FaSearch />
                            <span>{lang.search}</span>
                        </button>
                    </form>
                </div>

                {/* customer list */}
                {
                    customers?.length == 0 ?
                        <div className="font-bold text-center py-4">No users found!</div>
                        :
                        <div>
                            {
                                customers?.map((customer, idx) =>
                                    <div key={idx} className="grid grid-cols-3 gap-3 items-center mb-4 pb-3 border-b border-b-slate-300">
                                        {/* img / name / role */}
                                        <Link to={'/customer-profile'} className="flex gap-3">
                                            <img src={customer?.img} className="w-12 h-12 object-contain" alt={customer?.name} />
                                            <div className="flex flex-col justify-between">
                                                <h2 className="font-bold">{customer?.name}</h2>
                                                <p><span className="font-bold">{lang.mobile}: </span>{customer?.mobile}</p>
                                            </div>
                                        </Link>
                                        {/* mobile / date */}
                                        <div className="text-center md:text-left">
                                            <p><span className="font-bold">{lang.area}:</span> {customer?.area}</p>
                                            <p><span className="font-bold">{lang.accountNo}: </span>{customer?.accountNo}</p>
                                        </div>
                                        {/* delete btn */}
                                        <div className="text-right">
                                            <button onClick={() => handleDeteleCustomer(1)} className="text-xl md:text-2xl text-red-600">
                                                <RiDeleteBin6Fill />
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }


            </div>

        </div>
    );
};

export default CustomersList;