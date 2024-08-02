import Header from "../../../../components/Shared/Header/Header";
import { FaExclamationCircle, FaSave } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import useCurrentLanguage from "../../../../hooks/useCurrentLanguage";


const BusinessSettings = () => {

    // translation------------------
    const { t, i18n } = useTranslation();
    const lang = t('BusinessSettings');
    // -----------------------------

    const { setCurrentLanguage } = useCurrentLanguage();
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };


    // update settings fn
    const handleUpdateSettings = e => {
        e.preventDefault();

        const newInfos = {
            companyName: e.target.companyName.value,
            address: e.target.address.value,
            mobile: e.target.mobile.value,
            email: e.target.email.value,
            transitions: e.target.transactions.checked,
            sms: e.target.sms.checked,
            mainBalance: e.target.mainBalance.value,

        }

        console.log(newInfos);
    };


    // change language
    const handleChangeLanguage = e => {
        const selectedLan = e.target.value;
        i18n.changeLanguage(selectedLan);
        setCurrentLanguage(selectedLan);
    };


    return (
        <div>
            <Header title={lang.businessSettings} />

            <div className="bg-white m-4 p-5 pt-2">

                {/* language */}
                <div className="pb-5 flex gap-2 items-start">
                    <h2 className="text-lg md:text-xl font-bold flex items-center gap-1"><GrLanguage />{lang.language}: </h2>
                    <select onChange={(e) => handleChangeLanguage(e)} className="bg-white px-4 py-1 border border-slate-300 rounded-sm" defaultValue={i18n?.language}>
                        <option value="en">English</option>
                        <option value="bn">বাংলা</option>
                    </select>
                </div>

                {/* detail form */}
                <form onSubmit={handleUpdateSettings}>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-b border-b-slate-300 pb-5 mb-6">
                        {/* 1st col */}
                        <div>
                            <h2 className="flex items-center gap-1 text-lg md:text-xl font-bold pb-3 mb-3 border-b border-b-slate-300"><FaExclamationCircle className="mt-1" />{lang.companyDetails}</h2>
                            <div className="flex items-center gap-2">
                                <div className="w-5/12 flex justify-between font-semibold">
                                    <span>{lang.companyName}</span>
                                    <span>:</span>
                                </div>
                                <div className="w-7/12">
                                    {/* company name input */}
                                    <input type="text" name="companyName" className="w-full bg-white px-2 py-1 outline-none rounded-sm border border-slate-300" placeholder={lang.companyName} required />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 my-2">
                                <div className="w-5/12 flex justify-between font-semibold">
                                    <span>{lang.address}</span>
                                    <span>:</span>
                                </div>
                                <div className="w-7/12">
                                    {/* company address input */}
                                    <input type="text" name="address" className="w-full bg-white px-2 py-1 outline-none rounded-sm border border-slate-300" placeholder={lang.address} required />
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-5/12 flex justify-between font-semibold">
                                    <span>{lang.mobile}</span>
                                    <span>:</span>
                                </div>
                                <div className="w-7/12">
                                    {/* number input */}
                                    <input type="number" name="mobile" className="w-full bg-white px-2 py-1 outline-none rounded-sm border border-slate-300" placeholder={lang.mobile} required />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 my-2">
                                <div className="w-5/12 flex justify-between font-semibold">
                                    <span>{lang.email}</span>
                                    <span>:</span>
                                </div>
                                <div className="w-7/12">
                                    {/* email input */}
                                    <input type="email" name="email" className="w-full bg-white px-2 py-1 outline-none rounded-sm border border-slate-300" placeholder={lang.email} required />
                                </div>
                            </div>
                            <div className="flex items-start gap-2 my-2">
                                <div className="w-5/12 flex justify-between font-semibold">
                                    <span>{lang.logo}</span>
                                    <span>:</span>
                                </div>
                                {/* uploaded image */}
                                <div className="w-7/12 pt-1">
                                    <label htmlFor="file-upload" className="flex justify-center items-center w-full h-44 border-2 border-slate-200 rounded-lg cursor-pointer relative overflow-hidden">
                                        {image ? <img src={image} alt="uploaded" className="absolute inset-0 w-full h-full object-contain" /> : <div className=" text-gray-500 flex flex-col items-center"><IoCloudUploadOutline className="text-xl" /> <span>{lang.uploadPhoto}</span></div>}
                                    </label>
                                    <input type="file" id="file-upload" className="hidden" onChange={handleImageChange} />
                                </div>
                            </div>
                        </div>

                        {/* 2nd col */}
                        <div>
                            <h2 className="flex items-center gap-1 text-lg md:text-xl font-bold pb-3 mb-3 border-b border-b-slate-300"><BsNintendoSwitch className="mt-1" />{lang.activities}</h2>
                            <div className="flex items-center gap-4">
                                <div className="w-5/12 flex justify-between font-semibold">
                                    <span>{lang.transactions}</span>
                                    <span>:</span>
                                </div>
                                <div className="w-7/12">
                                    {/* transactions input */}
                                    <input type="checkbox" name="transactions" className="toggle toggle-success" />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 my-2">
                                <div className="w-5/12 flex justify-between font-semibold">
                                    <span>{lang.sms}</span>
                                    <span>:</span>
                                </div>
                                <div className="w-7/12">
                                    {/* sms input */}
                                    <input type="checkbox" name="sms" className="toggle toggle-success" />
                                </div>
                            </div>
                        </div>

                        {/* 3st col */}
                        <div>
                            <h2 className="flex items-center gap-1 text-lg md:text-xl font-bold pb-3 mb-3 border-b border-b-slate-300"><IoMdWallet className="mt-1" />{lang.balanceSettings}</h2>
                            <div className="flex items-center gap-4">
                                <div className="w-5/12 flex justify-between font-semibold">
                                    <span>{lang.mainBalance}</span>
                                    <span>:</span>
                                </div>
                                <div className="w-7/12">
                                    {/* balance input */}
                                    <input type="number" name="mainBalance" className="w-full bg-white px-2 py-1 outline-none rounded-sm border border-slate-300" placeholder={lang.mainBalance} required />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="flex items-center gap-1 font-semibold text-white bg-blue-600 px-3 py-1 rounded-sm">
                            <FaSave />
                            <span>{lang.update}</span>
                        </button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default BusinessSettings;