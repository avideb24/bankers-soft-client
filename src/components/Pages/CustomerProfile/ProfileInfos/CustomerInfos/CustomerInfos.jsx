import ChangeCustomerPassword from "../ChangeCustomerPassword/ChangeCustomerPassword";
import EditInfos from "../EditInfos/EditInfos";


const CustomerInfos = () => {

    // fake data
    const customer = {
        nameEn: 'Belal',
        nameBn: 'বেলাল',
        father: 'Hasan Ali',
        mother: 'Moriam Begum',
        birthDate: '1999-08-03',
        registrationDate: '2024-06-25',
        occupation: 'Farmer',
        gender: 'Male',
        presentAddress: 'Nilphamari',
        permanentAddress: 'Nilphamari',
        accountNumber: '586354',
        identityType: 'NID',
        identityNumber: '7854654654',
        mobile: '01723622125',
        email: 'belal@gmail.com',
    };


    return (
        <div>
            {/* customer infos */}
            <div className="pl-5 border-b border-b-slate-300 pb-4" >

                <div className=" pb-3 mb-4 border-b border-b-slate-300 flex justify-between items-center flex-wrap">
                    <h2 className="text-lg md:text-xl font-bold">Customer Details</h2>
                    <EditInfos modalId={1} title={'Customer'} data={customer} />
                </div>

                <div className="space-y-2">

                    {/* name english */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Name (English)</span>
                        <span>:</span>
                        <span>{customer.nameEn}</span>
                    </div>

                    {/* name bangla */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Name (বাংলা)</span>
                        <span>:</span>
                        <span>{customer?.nameBn}</span>
                    </div>

                    {/* father */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Father</span>
                        <span>:</span>
                        <span>{customer?.father}</span>
                    </div>

                    {/* mother */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Mother</span>
                        <span>:</span>
                        <span>{customer?.mother}</span>
                    </div>

                    {/* father */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Birthdate</span>
                        <span>:</span>
                        <span>{customer?.birthDate}</span>
                    </div>

                    {/* cccupation */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Occupation</span>
                        <span>:</span>
                        <span>{customer?.occupation}</span>
                    </div>

                    {/* gender */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Gender</span>
                        <span>:</span>
                        <span>{customer?.gender}</span>
                    </div>

                    {/* present address */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Present Address</span>
                        <span>:</span>
                        <span>{customer?.presentAddress}</span>
                    </div>

                    {/* permanent address */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Permanent Address</span>
                        <span>:</span>
                        <span>{customer?.permanentAddress}</span>
                    </div>

                    {/* registration date */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Registration Date</span>
                        <span>:</span>
                        <span>{customer?.registrationDate}</span>
                    </div>

                    {/* identity type */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Identity Type</span>
                        <span>:</span>
                        <span>{customer?.identityType}</span>
                    </div>

                    {/* account no. */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Account No.</span>
                        <span>:</span>
                        <span>{customer?.accountNumber}</span>
                    </div>

                    {/* identity no. */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Identity No.</span>
                        <span>:</span>
                        <span>{customer?.identityNumber}</span>
                    </div>

                    {/* mobile */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">Mobile</span>
                        <span>:</span>
                        <span>{customer?.mobile}</span>
                    </div>

                    {/* email */}
                    <div className="flex gap-4  overflow-hidden">
                        <span className="font-bold w-[40%]">E-mail</span>
                        <span>:</span>
                        <span>{customer?.email}</span>
                    </div>

                </div>

            </div>

            {/* pass change btn */}
            <div className="py-4">
                <ChangeCustomerPassword />
            </div>

        </div>
    );
};

export default CustomerInfos;