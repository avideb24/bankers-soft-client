import EditInfos from "../EditInfos/EditInfos";


const NomineeInfos = () => {

    // fake data
    const nominee = {
        nameEn: 'Belal',
        nameBn: 'বেলাল',
        father: 'Hasan Ali',
        mother: 'Moriam Begum',
        birthDate: '1999-08-03',
        relation: 'Wife',
        occupation: 'Farmer',
        gender: 'Male',
        presentAddress: 'Nilphamari',
        permanentAddress: 'Nilphamari',
        accountNumber: '586354',
        identityType: 'Birth Certificate',
        identityNumber: '7854654654',
        mobile: '01723622125',
        email: 'belal@gmail.com',
    };


    return (
        <div>
            {/* nominee infos */}
            < div className="pt-24 md:pt-20 pl-5 border-b pb-4 border-b-slate-300" >

                <div className=" pb-3 mb-4 border-b border-b-slate-300 flex justify-between items-center flex-wrap">
                    <h2 className="text-lg md:text-xl font-bold">Nominee Details</h2>
                    <EditInfos modalId={2} title={'Nominee'} data={nominee} />
                </div>

                <div className="space-y-2">

                    {/* name english */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Name (English)</span>
                        <span>:</span>
                        <span>{nominee.nameEn}</span>
                    </div>

                    {/* name bangla */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Name (বাংলা)</span>
                        <span>:</span>
                        <span>{nominee?.nameBn}</span>
                    </div>

                    {/* father */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Father</span>
                        <span>:</span>
                        <span>{nominee?.father}</span>
                    </div>

                    {/* mother */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Mother</span>
                        <span>:</span>
                        <span>{nominee?.mother}</span>
                    </div>

                    {/* father */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Birthdate</span>
                        <span>:</span>
                        <span>{nominee?.birthDate}</span>
                    </div>

                    {/* cccupation */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Occupation</span>
                        <span>:</span>
                        <span>{nominee?.occupation}</span>
                    </div>

                    {/* gender */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Gender</span>
                        <span>:</span>
                        <span>{nominee?.gender}</span>
                    </div>

                    {/* present address */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Present Address</span>
                        <span>:</span>
                        <span>{nominee?.presentAddress}</span>
                    </div>

                    {/* permanent address */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Permanent Address</span>
                        <span>:</span>
                        <span>{nominee?.permanentAddress}</span>
                    </div>

                    {/* registration date */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Relation</span>
                        <span>:</span>
                        <span>{nominee?.relation}</span>
                    </div>

                    {/* identity type */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Identity Type</span>
                        <span>:</span>
                        <span>{nominee?.identityType}</span>
                    </div>

                    {/* account no. */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Account No.</span>
                        <span>:</span>
                        <span>{nominee?.accountNumber}</span>
                    </div>

                    {/* identity no. */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Identity No.</span>
                        <span>:</span>
                        <span>{nominee?.identityNumber}</span>
                    </div>

                    {/* mobile */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Mobile</span>
                        <span>:</span>
                        <span>{nominee?.mobile}</span>
                    </div>

                    {/* email */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">E-mail</span>
                        <span>:</span>
                        <span>{nominee?.email}</span>
                    </div>

                </div>

            </div >
        </div>
    );
};

export default NomineeInfos;