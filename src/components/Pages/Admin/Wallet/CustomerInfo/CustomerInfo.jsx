import PropTypes from 'prop-types';


const CustomerInfo = ({customer}) => {
    return (
        <div className="pt-5 md:pt-0 border-b border-b-slate-300 pb-4" >

                <div className=" pb-3 mb-4 border-b border-b-slate-300 flex justify-between items-center flex-wrap">
                    <h2 className="text-lg md:text-xl font-bold">Customer Details</h2>
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
    );
};

export default CustomerInfo;


CustomerInfo.propTypes = {
    customer: PropTypes.shape({
        nameEn: PropTypes.string,
        image: PropTypes.string,
        nameBn: PropTypes.string,
        father: PropTypes.string,
        mother: PropTypes.string,
        birthDate: PropTypes.string,
        registrationDate: PropTypes.string,
        occupation: PropTypes.string,
        gender: PropTypes.string,
        presentAddress: PropTypes.string,
        permanentAddress: PropTypes.string,
        accountNumber: PropTypes.string,
        identityType: PropTypes.string,
        identityNumber: PropTypes.string,
        mobile: PropTypes.string,
        email: PropTypes.string,
    })
};