import { useTranslation } from "react-i18next";
import { FaEdit } from "react-icons/fa";


const EditProfile = () => {

     // translation---------------
     const {t} = useTranslation();
     const lang = t('AdminProfile');
     // --------------------------

    // update profile info
    const handleUpdateProfile = e => {
        e.preventDefault();

        const updatedInfos = {
            nameEn: e.target.nameEn.value,
            nameBn: e.target.nameBn.value,
            email: e.target.email.value,
            mobile: e.target.mobile.value,
            father: e.target.father.value,
            mother: e.target.mother.value,
            presentAddress: e.target.presentAddress.value,
            permanentAddress: e.target.permanentAddress.value,
            birthDate: e.target.birthDate.value,
            registrationDate: e.target.registrationDate.value,
            gender: e.target.gender.value,
        }

        console.log(updatedInfos);

    }

    return (
        <>
            {/* edit profile btn */}
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="bg-blue-600 px-3 py-1 text-white font-semibold flex items-center gap-2 rounded-sm"><FaEdit />{lang.editProfile}</button>
            {/* edit profile modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box p-4 relative bg-white">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaEdit />{lang.editProfile}</h3>
                    {/* date form */}
                    <form onSubmit={handleUpdateProfile} className="pt-4 space-y-2">
                        {/* name - bangla and english */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="nameEn" className="font-bold">{lang.name} (English)</label>
                                <input type="text" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="nameEn" id="nameEn" placeholder={lang.name} required />
                            </div>
                            <div>
                                <label htmlFor="nameBn" className="font-bold">{lang.name} (বাংলা)</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="nameBn" id="nameBn" placeholder={lang.name} required />
                            </div>
                        </div>

                        {/* mobile and email */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="font-bold">{lang.email}</label>
                                <input type="email" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="email" id="email" placeholder={lang.email} required />
                            </div>
                            <div>
                                <label htmlFor="mobile" className="font-bold">{lang.mobile}</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="mobile" id="mobile" placeholder={lang.mobile} required />
                            </div>
                        </div>

                        {/* father & mother */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="father" className="font-bold">{lang.father}</label>
                                <input type="text" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="father" id="father" placeholder={lang.father} required />
                            </div>
                            <div>
                                <label htmlFor="mother" className="font-bold">{lang.mother}</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="mother" id="mother" placeholder={lang.mother} required />
                            </div>
                        </div>

                        {/* addresses */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="presentAddress" className="font-bold">{lang.prsentAddress}</label>
                                <input type="text" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="presentAddress" id="presentAddress" placeholder={lang.prsentAddress} required />
                            </div>
                            <div>
                                <label htmlFor="permanentAddress" className="font-bold">{lang.permanentAddress}</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="permanentAddress" id="permanentAddress" placeholder={lang.permanentAddress} required />
                            </div>
                        </div>

                        {/* dates */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="birthDate" className="font-bold">{lang.birth}</label>
                                <input type="date" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="birthDate" id="birthDate" placeholder={lang.birth} required />
                            </div>
                            <div>
                                <label htmlFor="registrationDate" className="font-bold">{lang.registrationDate}</label>
                                <input type="date" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="registrationDate" id="registrationDate" placeholder={lang.registrationDate} required />
                            </div>
                        </div>

                        {/* gender */}
                        <div>
                            <label htmlFor="gender" className="font-bold">{lang.gender}</label>
                            <select name="gender" id="gender" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none">
                                <option value="Male">{lang.male}</option>
                                <option value="Female">{lang.female}</option>
                            </select>
                        </div>

                        {/* submit btn */}
                        <div className="text-right">
                            <input type="submit" value={lang.save} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-24 bottom-4">
                        <form method="dialog">
                            <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{lang.close}</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default EditProfile;