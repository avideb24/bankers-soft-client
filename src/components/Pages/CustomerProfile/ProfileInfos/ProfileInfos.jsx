import { useTranslation } from "react-i18next";
import ChangeCustomerImage from "./ChangeCustomerImage/ChangeCustomerImage";
import CustomerInfos from "./CustomerInfos/CustomerInfos";
import NomineeInfos from "./NomineeInfos/NomineeInfos";
import ProfileBtns from "./ProfileBtns/ProfileBtns";



const ProfileInfos = () => {

     // translations --------------
     const {t} = useTranslation();
     const lang = t('Profile').Customer;
     // ---------------------------


    return (
        <div className="w-full md:w-8/12 h-max bg-white p-5 shadow-sm">

            <div className="relative z-10">
                <div className="bg-slate-300 px-4 pt-4 pb-20 flex justify-end relative">
                </div>

                {/* name & others infos */}
                <div className="absolute left-0 -bottom-8 md:-bottom-10 w-full flex flex-col xl:flex-row xl:justify-between xl:items-end pl-5">
                    <div className="flex items-end gap-2">
                        <ChangeCustomerImage />
                        <div>
                            <h2 className="text-base md:text-lg font-bold">Avi Debnath</h2>
                            <p><span className="font-bold">{lang.area}: </span>Nilphamari</p>
                            <p><span className="font-bold">{lang.mobile}: </span>01723622125</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* profile btns */}
            <div className="pt-16">
                <ProfileBtns />
            </div>

            {/* customer and nominee infos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5">
                <CustomerInfos />
                <NomineeInfos />
            </div>

        </div>
    );
};

export default ProfileInfos;