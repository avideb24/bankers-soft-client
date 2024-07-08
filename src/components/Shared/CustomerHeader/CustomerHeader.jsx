import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


const CustomerHeader = ({ title }) => {

    const langs = [
        {code: 'en', lang: 'English'},
        {code: 'bn', lang: 'বাংলা'},
    ];


    const {i18n} = useTranslation();

    const handleChangeLanguage = code => {
        i18n.changeLanguage(code);
    }


    return (
        <div className='sticky z-40 left-0 top-0 p-4 bg-white shadow-md'>
            <div className='ml-8 mt-[2px] lg:ml-0 lg:mt-0 flex justify-between gap-4'>
                <h2 className='text-base lg:text-xl font-bold capitalize'>{title}</h2>
                <div className='flex items-center gap-3'>
                    {
                        langs?.map(lang => 
                            <button onClick={() => handleChangeLanguage(lang.code)} key={lang.code} className={`${i18n.language == lang.code ? 'bg-green-600 text-white border border-green-600' : 'border border-slate-500 bg-white'} font-semibold px-3 py-1 rounded-sm`}>{lang.lang}</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerHeader;


CustomerHeader.propTypes = {
    title: PropTypes.string,
};