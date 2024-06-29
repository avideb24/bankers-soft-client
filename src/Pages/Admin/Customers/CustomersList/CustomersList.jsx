import Header from "../../../../components/Shared/Header/Header";
import { FaUsers } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { RiDeleteBin6Fill } from "react-icons/ri";


const CustomersList = () => {

    
    // fake data
    const customers = [
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
    ];


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
            
            <Header title="Customers List" />

            <div className="bg-white m-3 px-5 py-4">

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-5 pb-3 border-b border-b-slate-300">
                    <h2 className="flex items-center gap-2 text-base font-bold"><FaUsers className="text-2xl" /> <span>All Customers</span></h2>
                    <form className="flex items-center gap-2">
                        <input type="text" className="w-full border-2 border-slate-200 bg-transparent px-2 py-[6px] rounded-sm outline-none" placeholder="Customers's name..." />
                        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-sm">
                            <FaSearch />
                            <span>Search</span>
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
                                                <p>{customer?.role}</p>
                                            </div>
                                        </Link>
                                        {/* mobile / date */}
                                        <div className="text-center md:text-left">
                                            <p><span className="font-bold">Mobile:</span> {customer?.mobile}</p>
                                            <p><span className="font-bold">Joining Date: </span>{customer?.joiningDate}</p>
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