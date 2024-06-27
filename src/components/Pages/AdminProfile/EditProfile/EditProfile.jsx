import { FaEdit } from "react-icons/fa";
import { FaCalendarAlt, FaExclamationCircle } from "react-icons/fa";


const EditProfile = () => {
    return (
        <>
             {/* edit profile btn */}
             <button onClick={() => document.getElementById('my_modal_1').showModal()} className="bg-blue-600 px-3 py-1 text-white font-semibold flex items-center gap-2 rounded-sm"><FaEdit />Edit Profile</button>
                            {/* edit profile modal */}
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box p-4 relative bg-white">
                                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCalendarAlt />Search By Date</h3>
                                    {/* date form */}
                                    <form className="pt-4">
                                        <div className="flex gap-5">
                                            <div className="w-1/2">
                                                <label htmlFor="from" className="font-bold">From Date</label>
                                                <input type="date" className="w-full mt-2 bg-white border border-slate-300" name="fromDate" id="from" required />
                                            </div>
                                            <div className="w-1/2">
                                                <label htmlFor="to" className="font-bold">To Date</label>
                                                <input type="date" className="w-full mt-2 bg-white border border-slate-300" name="toDate" id="to" required />
                                            </div>
                                        </div>
                                        <p className="mt-4"><span className="text-red-600 font-semibold"><FaExclamationCircle className="inline" /> Special Note: </span>If no dates are selected, deposits will be made on today&apos;s date.</p>
                                        <div className="text-right">
                                            <input type="submit" value="Search" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                                        </div>
                                    </form>
                                    {/* close btn */}
                                    <div className="modal-action text-right absolute right-24 bottom-4">
                                        <form method="dialog">
                                            <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
        </>
    );
};

export default EditProfile;