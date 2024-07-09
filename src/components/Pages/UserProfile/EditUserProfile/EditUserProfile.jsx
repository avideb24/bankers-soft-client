import { useTranslation } from "react-i18next";
import { FaEdit } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import PropTypes from "prop-types";

const EditUserProfile = ({ userData }) => {
    // Translation -----------------
    const { t } = useTranslation();
    const lang = t('Profile').User;
    const form = t('FormTexts');
    // -----------------------------

    // Update profile info
    const handleUpdateProfile = (e) => {
        e.preventDefault();

        const updatedInfos = {
            nameEn: e.target.nameEn.value,
            nameBn: e.target.nameBn.value,
            father: e.target.father.value,
            mother: e.target.mother.value,
            presentAddress: e.target.presentAddress.value,
            permanentAddress: e.target.permanentAddress.value,
            dateOfBirth: e.target.dateOfBirth.value,
            joiningDate: e.target.joiningDate.value,
            gender: e.target.gender.value,
            designation: e.target.designation.value,
        };

        console.log(updatedInfos);
    };

    return (
        <>
            {/* Edit profile btn */}
            <button
                onClick={() => document.getElementById("my_modal_4").showModal()}
                className="bg-blue-600 px-3 py-1 text-white font-semibold flex items-center gap-2 rounded-sm"
            >
                <FaEdit />
                {lang.editProfile}
            </button>
            {/* Edit profile modal */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box p-4 relative bg-white">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2">
                        <FaEdit />
                        {lang.editProfile}
                    </h3>
                    {/* Data form */}
                    <form onSubmit={handleUpdateProfile} className="pt-4 space-y-2">
                        {/* Name - Bangla and English */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="nameEn" className="font-bold">{form.name} (English)</label>
                                <input
                                    type="text"
                                    className="w-full mt-2 bg-white px-3 py-1 border border-slate-300"
                                    name="nameEn"
                                    id="nameEn"
                                    placeholder={form.typeHere}
                                    defaultValue={userData?.nameEn}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="nameBn" className="font-bold">{form.name} (বাংলা)</label>
                                <input
                                    type="text"
                                    className="w-full bg-white px-3 py-1 mt-2 border border-slate-300"
                                    name="nameBn"
                                    id="nameBn"
                                    placeholder={form.typeHere}
                                    defaultValue={userData?.nameBn}
                                    required
                                />
                            </div>
                        </div>

                        {/* Father & Mother */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="father" className="font-bold">{form.father}</label>
                                <input
                                    type="text"
                                    className="w-full mt-2 bg-white px-3 py-1 border border-slate-300"
                                    name="father"
                                    id="father"
                                    placeholder={form.typeHere}
                                    defaultValue={userData?.father}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="mother" className="font-bold">{form.mother}</label>
                                <input
                                    type="text"
                                    className="w-full bg-white px-3 py-1 mt-2 border border-slate-300"
                                    name="mother"
                                    id="mother"
                                    placeholder={form.typeHere}
                                    defaultValue={userData?.mother}
                                    required
                                />
                            </div>
                        </div>

                        {/* Addresses */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="presentAddress" className="font-bold">{form.presentAddress}</label>
                                <input
                                    type="text"
                                    className="w-full mt-2 bg-white px-3 py-1 border border-slate-300"
                                    name="presentAddress"
                                    id="presentAddress"
                                    placeholder={form.typeHere}
                                    defaultValue={userData?.presentAddress}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="permanentAddress" className="font-bold">{form.permanentAddress}</label>
                                <input
                                    type="text"
                                    className="w-full bg-white px-3 py-1 mt-2 border border-slate-300"
                                    name="permanentAddress"
                                    id="permanentAddress"
                                    placeholder={form.typeHere}
                                    defaultValue={userData?.permanentAddress}
                                    required
                                />
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="dateOfBirth" className="font-bold">{form.dateOfBirth}</label>
                                <input
                                    type="date"
                                    className="w-full mt-2 bg-white px-3 py-1 border border-slate-300"
                                    name="dateOfBirth"
                                    id="dateOfBirth"
                                    defaultValue={userData?.dateOfBirth}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="joiningDate" className="font-bold">{form.joiningDate}</label>
                                <input
                                    type="date"
                                    className="w-full bg-white px-3 py-1 mt-2 border border-slate-300"
                                    name="joiningDate"
                                    id="joiningDate"
                                    defaultValue={userData?.joiningDate}
                                    required
                                />
                            </div>
                        </div>

                        {/* Gender and Designation */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="gender" className="font-bold">{form.gender}</label>
                                <select
                                    name="gender"
                                    id="gender"
                                    className="w-full bg-white px-3 py-1 mt-2 border border-slate-300"
                                    defaultValue={userData?.gender}
                                >
                                    <option value="Male">{form.male}</option>
                                    <option value="Female">{form.female}</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="designation" className="font-bold">{form.designation}</label>
                                <select
                                    name="designation"
                                    id="designation"
                                    className="w-full bg-white px-3 py-1 mt-2 border border-slate-300"
                                    defaultValue={userData?.designation}
                                >
                                    <option value="Field Worker">{form.manager}</option>
                                    <option value="Manager">{form.fieldWorker}</option>
                                    <option value="Share Holder">{form.shareHolder}</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit btn */}
                        <div className="text-right">
                            <input
                                type="submit"
                                value={form.save}
                                className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer"
                            />
                        </div>
                    </form>
                    {/* Close btn */}
                    <div className="modal-action text-right absolute right-6 top-0">
                        <form method="dialog">
                            <button className="text-red-600 text-xl md:text-3xl font-semibold rounded-sm">
                                <FaCircleXmark />
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

EditUserProfile.propTypes = {
    userData: PropTypes.shape({
        nameEn: PropTypes.string,
        nameBn: PropTypes.string,
        father: PropTypes.string,
        mother: PropTypes.string,
        presentAddress: PropTypes.string,
        permanentAddress: PropTypes.string,
        dateOfBirth: PropTypes.string,
        joiningDate: PropTypes.string,
        gender: PropTypes.string,
        designation: PropTypes.string,
    }),
};

export default EditUserProfile;
