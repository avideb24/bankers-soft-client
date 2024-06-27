import { MdLock } from "react-icons/md";

const ChangePassword = () => {
    return (
        <>
            {/* edit profile btn */}
            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="bg-orange-600 px-3 py-1 text-white font-semibold flex items-center gap-2 rounded-sm"><MdLock />Change Password</button>
            {/* edit profile modal */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box p-4 relative bg-white">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><MdLock />Change Password</h3>
                    {/* date form */}
                    <form className="pt-4">
                        <div>
                            <label htmlFor="pass" className="font-bold">New Password</label>
                            <input type="password" className="w-full px-3 py-1 mt-2 bg-white border border-slate-300" name="password" id="pass" placeholder="Type here..." required />
                        </div>
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
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

export default ChangePassword;