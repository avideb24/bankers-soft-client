import { useTranslation } from "react-i18next";
import ChangeUserImage from "../ChangeUserImage/ChangeUserImage";
import ChangeUserPassword from "../ChangeUserPassword/ChangeUserPassword";
import EditUserProfile from "../EditUserProfile/EditUserProfile";

const ProfileInfos = () => {

    // fake data
    const userData = {
        nameEn: "Hasan",
        nameBn: "হাসান",
        designation: "Manager",
        mobile: "01723622125",
        father: "Robil Ali",
        mother: "Mayana",
        dateOfBirth: "03-10-1996",
        gender: "Male",
        presentAddress: "Nilphamari",
        permanentAddress: "Nilphamari",
        joiningDate: "25-05-2024"
    };

    // -----------------------------------------------

    // translation ------------------
    const { t } = useTranslation();
    const lang = t('Profile').User;
    const info = t('FormTexts');
    // ------------------------------



    return (
        <div className="w-full bg-white p-5 shadow-sm">
            <div className="relative">
                <div className="bg-slate-300 px-4 pt-4 pb-20 flex justify-end relative"></div>

                {/* name & other infos */}
                <div className="absolute left-0 -bottom-16 md:-bottom-10 w-full flex flex-col xl:flex-row xl:justify-between xl:items-end pl-5">
                    <div className="flex items-end gap-2">
                        <ChangeUserImage />
                        <div>
                            <h2 className="text-base md:text-lg font-bold">{userData?.nameEn}</h2>
                            <p><span className="font-bold">{lang.designation}: </span>{userData?.designation}</p>
                            <p><span className="font-bold">{lang.mobile}: </span>{userData?.mobile}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* user infos */}
            <div className="pt-24 md:pt-20 pl-5">
                <h2 className="text-lg md:text-xl font-bold pb-3 mb-4 border-b border-b-slate-300">{lang.userDetails}</h2>
                <div className="grid grid-cols-1 gap-4">
                    {/* name english */}
                    <div className="flex gap-4 overflow-hidden">
                        <span className="font-bold w-[40%]">{info.name} (English)</span>
                        <span>:</span>
                        <span>{userData?.nameEn}</span>
                    </div>

                    {/* name bangla */}
                    <div className="flex gap-4 overflow-hidden">
                        <span className="font-bold w-[40%]">{info.name} (বাংলা)</span>
                        <span>:</span>
                        <span>{userData?.nameBn}</span>
                    </div>

                    {/* father */}
                    <div className="flex gap-4 overflow-hidden">
                        <span className="font-bold w-[40%]">{info.father}</span>
                        <span>:</span>
                        <span>{userData?.father}</span>
                    </div>

                    {/* mother */}
                    <div className="flex gap-4 overflow-hidden">
                        <span className="font-bold w-[40%]">{info.mother}</span>
                        <span>:</span>
                        <span>{userData?.mother}</span>
                    </div>

                    {/* date of birth */}
                    <div className="flex gap-4 overflow-hidden">
                        <span className="font-bold w-[40%]">{info.dateOfBirth}</span>
                        <span>:</span>
                        <span>{userData?.dateOfBirth}</span>
                    </div>

                    {/* gender */}
                    <div className="flex gap-4 overflow-hidden">
                        <span className="font-bold w-[40%]">{info.gender}</span>
                        <span>:</span>
                        <span>{userData?.gender}</span>
                    </div>

                    {/* present address */}
                    <div className="flex gap-4 overflow-hidden">
                        <span className="font-bold w-[40%]">{info.presentAddress}</span>
                        <span>:</span>
                        <span>{userData?.presentAddress}</span>
                    </div>

                    {/* permanent address */}
                    <div className="flex gap-4 overflow-hidden">
                        <span className="font-bold w-[40%]">{info.permanentAddress}</span>
                        <span>:</span>
                        <span>{userData?.permanentAddress}</span>
                    </div>

                    {/* joining date */}
                    <div className="flex gap-4 overflow-hidden">
                        <span className="font-bold w-[40%]">{info.joiningDate}</span>
                        <span>:</span>
                        <span>{userData?.joiningDate}</span>
                    </div>
                </div>

                {/* change password and update profile buttons */}
                <div className="my-5 flex justify-end gap-3">
                    <ChangeUserPassword />
                    <EditUserProfile userData={userData} />
                </div>
            </div>
        </div>
    );
};

export default ProfileInfos;
