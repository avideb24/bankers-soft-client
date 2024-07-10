import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


const CustomerInfo = ({ customer }) => {

    // translation ------------------
    const { t } = useTranslation();
    const lang = t('FormTexts');
    // ------------------------------

    return (
        <div className="pt-5 md:pt-0 border-b border-b-slate-300 pb-4" >

            <div className=" pb-3 mb-4 border-b border-b-slate-300 flex justify-between items-center flex-wrap">
                <h2 className="text-lg md:text-xl font-bold">{lang.customerDetails}</h2>
            </div>

            <div className="space-y-2">

                {/* name english */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.name} (English)</span>
                    <span>:</span>
                    <span>{customer.nameEn}</span>
                </div>

                {/* name bangla */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.name} (বাংলা)</span>
                    <span>:</span>
                    <span>{customer?.nameBn}</span>
                </div>

                {/* father */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.father}</span>
                    <span>:</span>
                    <span>{customer?.father}</span>
                </div>

                {/* mother */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.mother}</span>
                    <span>:</span>
                    <span>{customer?.mother}</span>
                </div>

                {/* father */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.dateOfBirth}</span>
                    <span>:</span>
                    <span>{customer?.birthDate}</span>
                </div>

                {/* cccupation */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.occupation}</span>
                    <span>:</span>
                    <span>{customer?.occupation}</span>
                </div>

                {/* gender */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.gender}</span>
                    <span>:</span>
                    <span>{customer?.gender}</span>
                </div>

                {/* present address */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.presentAddress}</span>
                    <span>:</span>
                    <span>{customer?.presentAddress}</span>
                </div>

                {/* permanent address */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.permanentAddress}</span>
                    <span>:</span>
                    <span>{customer?.permanentAddress}</span>
                </div>

                {/* registration date */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.registrationDate}</span>
                    <span>:</span>
                    <span>{customer?.registrationDate}</span>
                </div>

                {/* identity type */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.identityType}</span>
                    <span>:</span>
                    <span>{customer?.identityType}</span>
                </div>

                {/* identity no. */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.identityNumber}</span>
                    <span>:</span>
                    <span>{customer?.identityNumber}</span>
                </div>

                {/* account no. */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.accountNo}</span>
                    <span>:</span>
                    <span>{customer?.accountNumber}</span>
                </div>

                {/* mobile */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.mobile}</span>
                    <span>:</span>
                    <span>{customer?.mobile}</span>
                </div>

                {/* email */}
                <div className="flex gap-4  overflow-hidden">
                    <span className="font-bold w-[40%]">{lang.email}</span>
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