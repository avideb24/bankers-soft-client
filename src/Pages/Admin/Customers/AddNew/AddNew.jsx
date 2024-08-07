import { useState } from "react";
import { FaPlusCircle, FaSave } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import Header from "../../../../components/Shared/Header/Header";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";



const AddNew = () => {

    // translation --------------
    const { t } = useTranslation();
    const lang = t('FormTexts');
    // --------------------------

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    // add new customer fn
    const handleAddCustomer = e => {
        e.preventDefault();

        const form = e.target;

        if (form.gender.value == 'df' || form.identityType.value == 'df' || form.area.value == 'df') {
            Swal.fire({
                icon: "question",
                title: "Please fill all inputs!",
            });
        }

        else{
            const newCustomer = {
                nameEn: form.nameEn.value,
                nameBn: form.nameBn.value,
                fatherName: form.fatherName.value,
                motherName: form.motherName.value,
                birthDate: form.birthdate.value,
                gender: form.gender.value,
                area: form.area.value,
                presentAddress: form.presentAddress.value,
                permanentAddress: form.permanentAddress.value,
                identityType: form.identityType.value,
                identityNumber: form.identityNumber.value,
                mobile: form.mobile.value,
                password: form.password.value,
                email: form.email.value,
                acNumber: form.acNumber.value,
                registrationFee: form.registrationFee.value,
                registrationDate: form.registrationDate.value,
                occupation: form.occupation.value,
            }
    
            console.log(newCustomer);
            // call api here

            form.reset();
            setImage(null);
        }
    }



    return (
        <div>
            <Header title={lang.newCustomer} />

            <div className="bg-white px-5 m-4">

                <div>
                    <h2 className="text-base font-bold flex items-center gap-2 pb-3 border-b-2 border-b-slate-200 pt-6"><FaPlusCircle />{lang.customerDetails}</h2>
                </div>

                <form onSubmit={handleAddCustomer}>

                    <div className="md:flex md:gap-4 pt-3 pb-3 border-b-2 border-b-slate-200">
                        <div className="md:w-10/12 space-y-4">
                            {/* 1st row */}
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2">
                                <div>
                                    <label htmlFor="nameEn" className="font-bold">{lang.name} (English)</label>
                                    <input type="text" name="nameEn" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="nameEn" required />
                                </div>
                                <div>
                                    <label htmlFor="nameBn" className="font-bold">{lang.name} (বাংলা)</label>
                                    <input type="text" name="nameBn" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="nameBn" required />
                                </div>
                                <div>
                                    <label htmlFor="gender" className="font-bold">{lang.gender}</label>
                                    <select name="gender" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="gender" defaultValue="df" required >
                                        <option value="df" disabled>{lang.chooseOne}</option>
                                        <option value="Male">{lang.male}</option>
                                        <option value="Female">{lang.female}</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="area" className="font-bold">{lang.area}</label>
                                    <select name="area" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="area" defaultValue="df" required>
                                        <option value="df" disabled>{lang.chooseOne}</option>
                                        <option value="Nilphamari">Nilphamari</option>
                                    </select>
                                </div>
                            </div>

                            {/* 2nd row */}
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2">
                                <div>
                                    <label htmlFor="fatherName" className="font-bold">{lang.father}</label>
                                    <input type="text" name="fatherName" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="fatherName" required />
                                </div>
                                <div>
                                    <label htmlFor="motherName" className="font-bold">{lang.mother}</label>
                                    <input type="text" name="motherName" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="motherName" required />
                                </div>
                                <div>
                                    <label htmlFor="presentAddress" className="font-bold">{lang.presentAddress}</label>
                                    <input type="text" name="presentAddress" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="presentAddress" required />
                                </div>
                                <div>
                                    <label htmlFor="permanentAddress" className="font-bold">{lang.permanentAddress}</label>
                                    <input type="text" name="permanentAddress" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="permanentAddress" required />
                                </div>
                            </div>

                            {/* 3rd row */}
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-5 gap-2">
                                <div>
                                    <label htmlFor="identityType" className="font-bold">{lang.identityType}</label>
                                    <select name="identityType" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="identityType" defaultValue="df" required>
                                        <option value="df" disabled>{lang.chooseOne}</option>
                                        <option value="NID">{lang.nid}</option>
                                        <option value="Birth Certificate">{lang.birthCertificate}</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="identityNumber" className="font-bold">{lang.identityNumber}</label>
                                    <input type="number" name="identityNumber" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="identityNumber" required />
                                </div>
                                <div>
                                    <label htmlFor="acNumber" className="font-bold">{lang.accountNo}</label>
                                    <input type="number" name="acNumber" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="acNumber" required />
                                </div>
                                <div>
                                    <label htmlFor="occupation" className="font-bold">{lang.occupation}</label>
                                    <input type="text" name="occupation" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="occupation" required />
                                </div>
                                <div>
                                    <label htmlFor="date" className="font-bold">{lang.dateOfBirth}</label>
                                    <input type="date" name="birthdate" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="date" required />
                                </div>
                            </div>
                            {/* 4th row */}
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-5 gap-2">
                                <div>
                                    <label htmlFor="number" className="font-bold">{lang.mobile}</label>
                                    <input type="number" name="mobile" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="number" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="font-bold">{lang.password}</label>
                                    <input type="password" name="password" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="password" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="font-bold">{lang.email}</label>
                                    <input type="email" name="email" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="email" required />
                                </div>
                                <div>
                                    <label htmlFor="registrationFee" className="font-bold">{lang.registrationFee}</label>
                                    <input type="number" name="registrationFee" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder={lang.typeHere} id="registrationFee" required />
                                </div>
                                <div>
                                    <label htmlFor="registrationDate" className="font-bold">{lang.registrationDate}</label>
                                    <input type="date" name="registrationDate" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="registrationDate" required />
                                </div>
                            </div>
                        </div>

                        {/* uploaded image */}
                        <div className="md:w-2/12 pt-3 md:pt-0">
                            <span className="font-bold block mb-3">{lang.uploadPhoto}</span>
                            <label htmlFor="file-upload" className="flex justify-center items-center w-full h-44 border-2 border-slate-200 rounded-lg cursor-pointer relative overflow-hidden">
                                {image ? <img src={image} alt="uploaded" className="absolute inset-0 w-full h-full object-contain" /> : <div className=" text-gray-500 flex flex-col items-center"><IoCloudUploadOutline className="text-xl" /> <span>{lang.uploadPhoto}</span></div>}
                            </label>
                            <input type="file" id="file-upload" className="hidden" onChange={handleImageChange} />
                        </div>
                    </div>

                    <button type="submit" className="bg-[#20b2aa] text-white font-semibold px-4 py-2 rounded-sm flex float-right items-center gap-2 mt-4 mb-7">
                        <FaSave />
                        <span>{lang.save}</span>
                    </button>

                </form>

            </div>

            <div>

            </div>

        </div>
    );
};

export default AddNew;