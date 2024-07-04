import { PiSealWarningFill } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import Button from "../../../Shared/Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const CompleteProfile = () => {

    // translation---------------
    const { t } = useTranslation();
    const lang = t('AdminDashboard').CompleteProfile;
    // --------------------------

    // profile setup fn
    const handleSetupProfile = () => {

    }

    return (
        <div className="bg-white p-4 shadow-sm">
            <h2 className="text-lg md:text-2xl text-red-600 font-bold flex items-center gap-2 pb-3 border-b border-b-slate-300"><PiSealWarningFill className="mt-1" />{lang.warning}</h2>
            <p className="font-semibold py-3 mb-3 border-b border-b-slate-300">{lang.text}</p>
            <Link to={'/profile'} className="flex justify-end">
                <Button text={lang.profileSetUp} icon={FaUserEdit} bg="bg-red-600" handleClick={handleSetupProfile} />
            </Link>
        </div>
    );
};

export default CompleteProfile;