import Header from "../../../../components/Shared/Header/Header";
import { MdDoubleArrow } from "react-icons/md";
import EditProfile from "../../../../components/Pages/AdminProfile/EditProfile/EditProfile";
import ChangePassword from "../../../../components/Pages/AdminProfile/ChangePassword/ChangePassword";
import ChangeImage from "../../../../components/Pages/AdminProfile/ChangeImage/ChangeImage";
import { useTranslation } from "react-i18next";



const Profile = () => {

    // translation---------------
    const {t} = useTranslation();
    const lang = t('AdminProfile');
    // --------------------------


    const profileComplete = '38';

    return (
        <div>
            <Header title={lang.profile} />

            <div className="bg-white m-4 p-5">

                <div className="relative">
                    <div className="bg-slate-300 px-4 pt-4 pb-20 flex justify-end relative">
                        <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] bg-white flex items-center gap-2">
                            <p className="w-5/12 flex items-center font-bold px-3">{lang.profileSetUp} <MdDoubleArrow className="mt-1" /></p>
                            <div className="w-7/12">
                                <div style={{ width: `${profileComplete}%` }} className="bg-green-600 py-1">
                                    <p className="text-white font-semibold flex justify-center">{profileComplete}%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* name & others infos */}
                    <div className="absolute left-0 -bottom-20 md:-bottom-12 w-full flex flex-col md:flex-row md:justify-between md:items-end pl-5">
                        <div className="flex items-end gap-6">
                            <ChangeImage />
                            <div className="space-y-2">
                                <h2 className="text-lg md:text-xl font-bold">Avi Debnath</h2>
                                <p><span className="font-bold">{lang.designation}: </span>Admin</p>
                                <p><span className="font-bold">{lang.mobile}: </span>01723622125</p>
                            </div>
                        </div>
                        {/* update profile btn */}
                        <div className="mt-3 flex gap-2">
                            <ChangePassword />
                            <EditProfile />
                        </div>

                    </div>
                </div>

                {/* admin infos */}
                <div className="pt-24 md:pt-20 pl-5">

                    <h2 className="text-lg md:text-xl font-bold pb-3 mb-4 border-b border-b-slate-300">Profile Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* name english */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.name} (English)</span>
                            <span>:</span>
                            <span>Hasan</span>
                        </div>

                        {/* name bangla */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.name} (বাংলা)</span>
                            <span>:</span>
                            <span>হাসান</span>
                        </div>

                        {/* father */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.father}</span>
                            <span>:</span>
                            <span>Robil Ali</span>
                        </div>

                        {/* mother */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.mother}</span>
                            <span>:</span>
                            <span>Mayana</span>
                        </div>

                        {/* father */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.birth}</span>
                            <span>:</span>
                            <span>03-10-1996</span>
                        </div>

                        {/* gender */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.gender}</span>
                            <span>:</span>
                            <span>Male</span>
                        </div>
                        {/* gender */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.email}</span>
                            <span>:</span>
                            <span>hasan@gmail.com</span>
                        </div>

                        {/* present address */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.prsentAddress}</span>
                            <span>:</span>
                            <span>Nilphamari</span>
                        </div>

                        {/* permanent address */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.permanentAddress}</span>
                            <span>:</span>
                            <span>Nilphamari</span>
                        </div>

                        {/* registration date */}
                        <div className="flex gap-4  overflow-hidden">
                            <span className="font-bold w-[40%]">{lang.registrationDate}</span>
                            <span>:</span>
                            <span>25-05-2024</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Profile;
