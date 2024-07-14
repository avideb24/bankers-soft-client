import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import userImg from '../../../../../assets/user.png';
import { useTranslation } from "react-i18next";

const ChangeCustomerImage = () => {

    // translation ----------
    const {t} = useTranslation();
    const lang = t('Modals').ChangePicture;
    // ----------------------

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };


    return (
        <div className="max-w-16 md:max-w-20 border-2 border-white rounded-sm relative">

            <img src={userImg} className="w-full object-cover" alt="" />

            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-white p-1 rounded-full absolute right-1 bottom-1 text-base md:text-xl"><FaCamera /></button>

            {/* modal body */}
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box p-4 relative bg-white">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 mb-4"><FaCamera />{lang.changePicture}</h3>
                    {/* date form */}
                    <form onSubmit={handleImageChange}>
                        <div className="w-full">
                            <label htmlFor="file-upload" className="flex justify-center items-center w-full h-44 border-2 border-slate-200 rounded-lg cursor-pointer relative overflow-hidden">
                                {
                                    image ?
                                        <img src={image} alt="uploaded" className="absolute inset-0 w-full h-full object-contain" />
                                        :
                                        <div className=" text-gray-500 flex flex-col items-center"><IoCloudUploadOutline className="text-xl" /> <span>{lang.uploadPhoto}</span></div>}
                            </label>
                            <input type="file" id="file-upload" className="hidden" onChange={handleImageChange} />
                        </div>
                        <div className="text-right">
                            <input type="submit" value={lang.upload} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-28 bottom-4">
                        <form method="dialog">
                            <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{lang.close}</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default ChangeCustomerImage;