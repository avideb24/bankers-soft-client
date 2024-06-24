import Button from "../../../../components/Shared/Button/Button";
import Header from "../../../../components/Shared/Header/Header";
import { IoIosMailOpen } from "react-icons/io";
import { IoSearch } from "react-icons/io5";


const MessageReports = () => {


    const handleSearchCustomer = e => {
        e.preventDefault();

        const searchText = e.target.mobile.value;

        console.log(searchText);
    }

    return (
        <div>
            <Header title="Message Reports" />

            <div className="bg-white m-4 p-5 shadow-sm">

                <div className="flex justify-between items-center gap-2 pb-3 border-b border-b-slate-300">
                    <div className="flex items-center gap-2 text-lg md:text-2xl font-semibold">
                        <IoIosMailOpen className="" />
                        <h2>Message List</h2>
                    </div>

                    {/* search modal */}
                    <div>
                        <p onClick={() => document.getElementById('my_modal_1').showModal()} >
                            <Button text="Search" icon={IoSearch} bg="bg-sky-500" />
                        </p>
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

                </div>

                {/* message list */}
                <div className="py-3">
                    <p>No records found!</p>
                </div>

            </div>

        </div>
    );
};

export default MessageReports;