import ChangeUserImage from "../ChangeUserImage/ChangeUserImage";
import ChangeUserPassword from "../ChangeUserPassword/ChangeUserPassword";
import EditUserProfile from "../EditUserProfile/EditUserProfile";


const ProfileInfos = () => {

    return (
        <div className="w-full bg-white p-5 shadow-sm">

            <div className="relative">
                <div className="bg-slate-300 px-4 pt-4 pb-20 flex justify-end relative">
                </div>

                {/* name & others infos */}
                <div className="absolute left-0 -bottom-16 md:-bottom-10 w-full flex flex-col xl:flex-row xl:justify-between xl:items-end pl-5">
                    <div className="flex items-end gap-2">
                        <ChangeUserImage />
                        <div>
                            <h2 className="text-base md:text-lg font-bold">Avi Debnath</h2>
                            <p><span className="font-bold">Designation: </span>Admin</p>
                            <p><span className="font-bold">Mobile: </span>01723622125</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* user infos */}
            <div className="pt-24 md:pt-20 pl-5">

                <h2 className="text-lg md:text-xl font-bold pb-3 mb-4 border-b border-b-slate-300">Profile Details</h2>

                <div className="grid grid-cols-1 gap-4">

                    {/* name english */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Name (English)</span>
                        <span>:</span>
                        <span>Hasan</span>
                    </div>

                    {/* name bangla */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Name (বাংলা)</span>
                        <span>:</span>
                        <span>হাসান</span>
                    </div>

                    {/* father */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Father</span>
                        <span>:</span>
                        <span>Robil Ali</span>
                    </div>

                    {/* mother */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Mother</span>
                        <span>:</span>
                        <span>Mayana</span>
                    </div>

                    {/* father */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Birthdate</span>
                        <span>:</span>
                        <span>03-10-1996</span>
                    </div>

                    {/* gender */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Gender</span>
                        <span>:</span>
                        <span>Male</span>
                    </div>

                    {/* present address */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Present Address</span>
                        <span>:</span>
                        <span>Nilphamari</span>
                    </div>

                    {/* permanent address */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Permanent Address</span>
                        <span>:</span>
                        <span>Nilphamari</span>
                    </div>

                    {/* registration date */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Joining Date</span>
                        <span>:</span>
                        <span>25-05-2024</span>
                    </div>

                </div>

                {/* change pass and update profile btns */}
                <div className="my-5 flex justify-end gap-3">
                    <ChangeUserPassword />
                    <EditUserProfile />
                </div>

            </div>

        </div>
    );
};

export default ProfileInfos;