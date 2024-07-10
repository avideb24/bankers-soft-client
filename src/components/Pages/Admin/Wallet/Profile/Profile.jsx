import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


const Profile = ({ profileData }) => {

    // translation ------------------
    const { t, i18n } = useTranslation();
    const lang = t('Wallet');
    // ------------------------------


    return (
        <div className='relative mb-6'>
            <div className="w-full h-24 bg-slate-300 rounded-sm"></div>
            <div className="flex gap-4 absolute left-4 -bottom-7">
                <img src={profileData?.image} className='max-w-16 max-h-16 object-contain rounded-md' alt={profileData?.nameEn} />
                <div className='flex flex-col justify-between py-1'>
                    <h2 className="font-bold text-base md:text-lg">{i18n.language == 'en' ? `${profileData?.nameEn}` : `${profileData?.nameBn}`}</h2>
                    <p><span className='font-bold'>{lang.area}: </span>{profileData?.presentAddress}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;


Profile.propTypes = {
    profileData: PropTypes.shape({
        image: PropTypes.string,
        nameEn: PropTypes.string,
        nameBn: PropTypes.string,
        presentAddress: PropTypes.string
    })
};
