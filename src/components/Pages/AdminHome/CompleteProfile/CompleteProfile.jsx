import { PiSealWarningFill } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import Button from "../../../Shared/Button/Button";
import { Link } from "react-router-dom";


const CompleteProfile = () => {


    const handleSetupProfile = () => {

    }

    return (
        <div className="bg-white p-4 shadow-sm">
            <h2 className="text-lg md:text-2xl text-red-600 font-bold flex items-center gap-2 pb-3 border-b border-b-slate-300"><PiSealWarningFill className="mt-1" />Warning</h2>
            <p className="font-semibold py-3 mb-3 border-b border-b-slate-300">Your profile is incomplete. Please submit all information including your photo in the profile. </p>
            <Link to={'/profile'} className="flex justify-end">
                <Button text="Profile Setup" icon={FaUserEdit} bg="bg-red-600" handleClick={handleSetupProfile} />
            </Link>
        </div>
    );
};

export default CompleteProfile;