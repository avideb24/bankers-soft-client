import { FaEdit } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import PropTypes from "prop-types";


const EditInfos = ({ modalId, title, data }) => {

    const { nameEn, nameBn, father, mother, presentAddress, permanentAddress, birthDate, identityType, identityNumber, mobile, email, accountNumber, occupation, gender } = data;

    // update profile info
    const handleUpdateInfos = e => {
        e.preventDefault();

        const updatedCustomerInfos = {
            nameEn: e.target.nameEn.value,
            nameBn: e.target.nameBn.value,
            father: e.target.father.value,
            mother: e.target.mother.value,
            presentAddress: e.target.presentAddress.value,
            permanentAddress: e.target.permanentAddress.value,
            birthDate: e.target.birthDate.value,
            registrationDate: e.target.registrationDate.value,
            identityType: e.target.identityType.value,
            identityNumber: e.target.identityNumber.value,
            mobile: e.target.mobile.value,
            email: e.target.email.value,
            accountNumber: e.target.accountNumber.value,
            occupation: e.target.occupation.value,
            gender: e.target.gender.value,
        }

        const updatedNomineeInfos = {
            nameEn: e.target.nameEn.value,
            nameBn: e.target.nameBn.value,
            father: e.target.father.value,
            mother: e.target.mother.value,
            presentAddress: e.target.presentAddress.value,
            permanentAddress: e.target.permanentAddress.value,
            birthDate: e.target.birthDate.value,
            relation: e.target.relation.value,
            identityType: e.target.identityType.value,
            identityNumber: e.target.identityNumber.value,
            mobile: e.target.mobile.value,
            email: e.target.email.value,
            accountNumber: e.target.accountNumber.value,
            occupation: e.target.occupation.value,
            gender: e.target.gender.value,
        }

        console.log(updatedCustomerInfos, updatedNomineeInfos);

        if(title == 'Customer'){
            // call api with => updatedCustomerInfos
        }
        else{
            // call api with => updatedNomineeInfos
        }

    };

    return (
        <>
            {/* edit profile btn */}
            <button onClick={() => document.getElementById(`my_modal_${modalId}`).showModal()} className="bg-blue-600 px-3 py-1 text-white font-semibold flex items-center gap-2 rounded-[4px]"><FaEdit />Edit</button>
            {/* edit profile modal */}
            <dialog id={`my_modal_${modalId}`} className="modal">
                <div className="modal-box p-4 relative bg-white rounded-none">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaEdit />Edit {title} Details</h3>
                    {/* date form */}
                    <form onSubmit={handleUpdateInfos} className="pt-4 space-y-2 text-left">
                        {/* name - bangla and english */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="nameEn" className="font-bold">Name (English)</label>
                                <input type="text" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300" name="nameEn" id="nameEn" placeholder="Type here..." defaultValue={nameEn} required />
                            </div>
                            <div>
                                <label htmlFor="nameBn" className="font-bold">Name (বাংলা)</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="nameBn" id="nameBn" placeholder="Type here..." defaultValue={nameBn} required />
                            </div>
                        </div>

                        {/* father & mother */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="father" className="font-bold">Father</label>
                                <input type="text" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300" name="father" id="father" placeholder="Type here..." defaultValue={father} required />
                            </div>
                            <div>
                                <label htmlFor="mother" className="font-bold">Mother</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="mother" id="mother" placeholder="Type here..." defaultValue={mother} required />
                            </div>
                        </div>

                        {/* addresses */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="presentAddress" className="font-bold">Present Address</label>
                                <input type="text" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300" name="presentAddress" id="presentAddress" placeholder="Type here..." defaultValue={presentAddress} required />
                            </div>
                            <div>
                                <label htmlFor="permanentAddress" className="font-bold">Permanent Address</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="permanentAddress" id="permanentAddress" placeholder="Type here..." defaultValue={permanentAddress} required />
                            </div>
                        </div>

                        {/* dates */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="birthDate" className="font-bold">Birth Date</label>
                                <input type="date" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300" name="birthDate" id="birthDate" placeholder="Type here..." defaultValue={birthDate} required />
                            </div>
                            {
                                title == 'Customer' ?
                                    <div>
                                        <label htmlFor="registrationDate" className="font-bold">Registration Date</label>
                                        <input type="date" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="registrationDate" id="registrationDate" placeholder="Type here..." defaultValue={data?.registrationDate} required />
                                    </div>
                                    :
                                    <div>
                                        <label htmlFor="relation" className="font-bold">Relation</label>
                                        <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="relation" id="relation" placeholder="Type here..." defaultValue={data?.relation} required />
                                    </div>
                            }
                        </div>

                        {/* identity type / identity number */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="identityType" className="font-bold">Identity Type</label>
                                <select name="identityType" id="identityType" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" defaultValue={identityType}>
                                    <option value="NID">NID</option>
                                    <option value="Birth Certificate">Birth Certificate</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="identityNumber" className="font-bold">Identity No.</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="identityNumber" id="identityNumber" placeholder="Type here..." defaultValue={identityNumber} required />
                            </div>
                        </div>

                        {/* mobile / email */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="mobile" className="font-bold">Mobile</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="mobile" id="mobile" placeholder="Type here..." defaultValue={mobile} required />
                            </div>
                            <div>
                                <label htmlFor="email" className="font-bold">E-mail</label>
                                <input type="email" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="email" id="email" placeholder="Type here..." defaultValue={email} required />
                            </div>
                        </div>

                        {/* account / occupation */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="accountNumber" className="font-bold">Account No.</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="accountNumber" id="accountNumber" placeholder="Type here..." required defaultValue={accountNumber} />
                            </div>
                            <div>
                                <label htmlFor="occupation" className="font-bold">Occupation</label>
                                <input type="text" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" name="occupation" id="occupation" placeholder="Type here..." defaultValue={occupation} required />
                            </div>
                        </div>

                        {/* gender */}
                        <div>
                            <label htmlFor="gender" className="font-bold">Gender</label>
                            <select name="gender" id="gender" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300" defaultValue={gender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        {/* submit btn */}
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute -top-6 right-2">
                        <form method="dialog">
                            <button className="text-red-600 text-xl md:text-3xl font-semibold px-3 py-1 rounded-sm mt-5"><FaCircleXmark /></button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default EditInfos;


EditInfos.propTypes = {
    modalId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
};