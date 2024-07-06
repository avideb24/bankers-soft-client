import { useTranslation } from "react-i18next";
import { FaEdit } from "react-icons/fa";


const EditUserProfile = () => {


    // translation ------------------
    const { t } = useTranslation();
    const lang = t('Profile').User;
    // ------------------------------


    // update profile info
    const handleUpdateProfile = e => {
        e.preventDefault();

        const updatedInfos = {
            nameEn: e.target.nameEn.value,
            nameBn: e.target.nameBn.value,
            father: e.target.father.value,
            mother: e.target.mother.value,
            presentAddress: e.target.presentAddress.value,
            permanentAddress: e.target.permanentAddress.value,
            birthDate: e.target.birthDate.value,
            joiningnDate: e.target.joiningnDate.value,
            gender: e.target.gender.value,
            designation: e.target.designation.value,
        }

        console.log(updatedInfos);

    }

    return (
        <>
            {/* edit profile btn */}
            <button onClick={() => document.getElementById('my_modal_4').showModal()} className="bg-blue-600 px-3 py-1 text-white font-semibold flex items-center gap-2 rounded-sm"><FaEdit />{lang.editProfile}</button>
            {/* edit profile modal */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box p-4 relative bg-white">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaEdit />Edit Profile</h3>
                    {/* date form */}
                    <form onSubmit={handleUpdateProfile} className="pt-4 space-y-2">
                        {/* name - bangla and english */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="nameEn" className="font-bold">Name (English)</label>
                                <input type="text" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300" name="nameEn" id="nameEn" placeholder="Type here..." required />
                            </div>
                            <div>
                                <label htmlFor="nameBn" className="font-bold">Name (বাংলা)</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="nameBn" id="nameBn" placeholder="Type here..." required />
                            </div>
                        </div>

                        {/* father & mother */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="father" className="font-bold">Father</label>
                                <input type="text" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300" name="father" id="father" placeholder="Type here..." required />
                            </div>
                            <div>
                                <label htmlFor="mother" className="font-bold">Mother</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="mother" id="mother" placeholder="Type here..." required />
                            </div>
                        </div>

                        {/* addresses */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="presentAddress" className="font-bold">Present Address</label>
                                <input type="text" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300" name="presentAddress" id="presentAddress" placeholder="Type here..." required />
                            </div>
                            <div>
                                <label htmlFor="permanentAddress" className="font-bold">Permanent Address</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="permanentAddress" id="permanentAddress" placeholder="Type here..." required />
                            </div>
                        </div>

                        {/* dates */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="birthDate" className="font-bold">Birth Date</label>
                                <input type="date" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300" name="birthDate" id="birthDate" placeholder="Type here..." required />
                            </div>
                            <div>
                                <label htmlFor="joiningnDate" className="font-bold">Registration Date</label>
                                <input type="date" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="joiningnDate" id="registrationDate" placeholder="Type here..." required />
                            </div>
                        </div>

                        {/* gender and designation */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="gender" className="font-bold">Gender</label>
                                <select name="gender" id="gender" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="designation" className="font-bold">Designation</label>
                                <select name="designation" id="designation" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" defaultValue={'Field Worker'}>
                                    <option value="Field Worker">Field Worker</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Share">Holder</option>
                                </select>
                            </div>
                        </div>

                        {/* submit btn */}
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

export default EditUserProfile;