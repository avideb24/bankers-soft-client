import Header from "../../../../components/Shared/Header/Header";
import { FaUsers } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const UsersList = () => {

    // fake data
    const users = [
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
        { name: 'Belal', role: 'Manager', mobile: '01723622125', joiningDate: '30-06-24', img: 'https://i.ibb.co/XFw1xTb/user.png' },
    ];

    // -----------------------------

    // translation -----------------
    const { t } = useTranslation();
    const lang = t('Users').UserList;
    const modal = t('Modals').Warning;
    // -----------------------------


    // search user fn
    const handleSearchUser = e => {
        e.preventDefault();

        const userName = e.target.userName.value;

        console.log(userName);
    }

    // delete user fn
    const handleDeteleUser = id => {
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

    };


    return (
        <div>

            <Header title={lang.userList} />

            <div className="bg-white m-3 px-5 py-4">

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 border-b border-b-slate-300 pb-3">
                    <h2 className="flex items-center gap-2 text-base font-bold"><FaUsers className="text-2xl" /> <span>{lang.allUsers}</span></h2>
                    <form onSubmit={handleSearchUser} className="flex items-center gap-2">
                        <input type="text" name="userName" className="w-full border-2 border-slate-200 bg-transparent px-2 py-[6px] rounded-sm outline-none" placeholder={lang.searchUser} required />
                        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-sm">
                            <FaSearch />
                            <span>{lang.search}</span>
                        </button>
                    </form>
                </div>

                {/* users list */}
                {
                    users?.length == 0 ?
                        <div className="font-bold text-center py-4">{lang.notFound}</div>
                        :
                        <div>
                            {
                                users?.map((user, idx) =>
                                    <div key={idx} className="grid grid-cols-3 gap-3 items-center mb-4 pb-3 border-b border-b-slate-300">
                                        {/* img / name / role */}
                                        <Link to={'/admin/user-profile'} className="flex gap-3">
                                            <img src={user?.img} className="w-12 h-12 object-contain" alt={user?.name} />
                                            <div className="flex flex-col justify-between">
                                                <h2 className="font-bold">{user?.name}</h2>
                                                <p>{user?.role}</p>
                                            </div>
                                        </Link>
                                        {/* mobile / date */}
                                        <div className="text-center md:text-left">
                                            <p><span className="font-bold">{lang.mobile}:</span> {user?.mobile}</p>
                                            <p><span className="font-bold">{lang.joiningDate}: </span>{user?.joiningDate}</p>
                                        </div>
                                        <div className="text-right">
                                            {/* user delete btn */}
                                            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="text-xl md:text-2xl text-red-600">
                                                <RiDeleteBin6Fill />
                                            </button>

                                            {/* user delete modal */}
                                            <dialog id="my_modal_1" className="modal">
                                                <div className="modal-box p-4 relative bg-white">
                                                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize">{modal.pleaseConfirm}</h3>
                                                    <div className="text-center text-lg md:text-2xl font-bold  py-5 my-4 border-y border-y-slate-300">{modal.areYouSure}</div>
                                                    {/* full pay btn */}
                                                    <button onClick={() => handleDeteleUser(1)} className="bg-green-600 px-3 py-1 text-white font-semibold float-right">{modal.yes}</button>
                                                    {/* close btn */}
                                                    <div className="modal-action text-right absolute right-24 bottom-4">
                                                        <form method="dialog">
                                                            <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{modal.no}</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>


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

export default UsersList;