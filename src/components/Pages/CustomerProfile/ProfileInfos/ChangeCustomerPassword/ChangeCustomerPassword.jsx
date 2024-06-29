import { MdLock } from "react-icons/md";

const ChangeCustomerPassword = () => {

    // change password fn
    const handleChangePass = e => {
        e.preventDefault();

        const oldPass = e.target.oldPass.value;
        const newPass = e.target.newPass.value;

        console.log(oldPass, newPass);
    }

    return (
        <>
            {/* edit profile btn */}
            <button onClick={() => document.getElementById('my_modal_7').showModal()} className="bg-orange-600 px-3 py-1 text-white font-semibold flex items-center gap-2 rounded-sm"><MdLock />Change Password</button>
            {/* edit profile modal */}
            <dialog id="my_modal_7" className="modal">
                <div className="modal-box p-4 relative bg-white">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><MdLock />Change Password</h3>
                    {/* date form */}
                    <form onSubmit={handleChangePass} className="pt-4">
                        <div>
                            <label htmlFor="oldPass" className="font-bold">Old Password</label>
                            <input type="password" className="w-full px-3 py-1 mt-2 bg-white border border-slate-300" name="oldPass" id="oldPass" placeholder="Type here..." required />
                        </div>
                        <div>
                            <label htmlFor="newpass" className="font-bold pt-2 inline-block">New Password</label>
                            <input type="password" className="w-full px-3 py-1 mt-2 bg-white border border-slate-300" name="newPass" id="newPass" placeholder="Type here..." required />
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

export default ChangeCustomerPassword;