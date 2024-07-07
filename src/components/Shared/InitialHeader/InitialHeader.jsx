import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ImSwitch } from "react-icons/im";
import { FaHome, FaLock } from "react-icons/fa";


const InitialHeader = () => {

    const { t, i18n } = useTranslation();

    const lang = t('HomePage');

    const langs = [
        { code: 'en', lang: 'English' },
        { code: 'bn', lang: 'Bangla' },
    ];

    // language change fn
    const handleChangeLang = (code) => {
        i18n.changeLanguage(code)
    }

    return (
        <div className="bg-white  px-4 py-3 font-semibold">
            <div className=" flex justify-between items-center gap-2">
                <Link to={'/'}>Bankers</Link>
                <div className="hidden md:block">
                    <ul className="flex gap-3">
                        <li><Link to={'/'} className="flex items-center gap-1"><FaHome />{lang.home}</Link></li>
                        <li><Link to={'/our-policy'} className="flex items-center gap-1"><FaLock />{lang.ourPolicy}</Link></li>
                        <li><Link to={'/login'} className="flex items-center gap-1"><ImSwitch />{lang.login}</Link></li>
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    {
                        langs?.map(lang =>
                            <button onClick={() => handleChangeLang(lang.code)} key={lang.code} className={`${lang.code == i18n.language ? 'bg-green-600 text-white' : 'bg-white border border-slate-300 rounded-sm'} px-3 py-1 font-bold`}>
                                {lang.lang}
                            </button>
                        )
                    }
                </div>
            </div>

            {/* mobie menu */}
            <div className="md:hidden">
                    <ul className="flex justify-center gap-3 py-3 bg-slate-200 mt-3">
                        <li><Link to={'/'} className="flex items-center gap-1"><FaHome />{lang.home}</Link></li>
                        <li><Link to={'/our-policy'} className="flex items-center gap-1"><FaLock />{lang.ourPolicy}</Link></li>
                        <li><Link to={'/login'} className="flex items-center gap-1"><ImSwitch />{lang.login}</Link></li>
                    </ul>
                </div>
        </div>
    );
};

export default InitialHeader;