import { Link } from "react-router-dom";
import { FaHome, FaLock } from "react-icons/fa";
import { ImSwitch } from "react-icons/im";
import { useTranslation } from "react-i18next";
import bannerImage from '../../../public/images/HomeBanner.jpg';


const Home = () => {

    const { i18n } = useTranslation();

    const btns = [
        { code: 'en', lang: 'English' },
        { code: 'bn', lang: 'Bangla' },
    ]


    return (
        <div>

            {/* header */}
            <div className="bg-white flex justify-between items-center gap-2 px-4 py-3 font-semibold">
                <Link to={'/'}>Bankers</Link>
                <div>
                    <ul className="flex gap-3">
                        <li><Link to={'/'} className="flex items-center gap-1"><FaHome />Home</Link></li>
                        <li><Link to={'/our-policy'} className="flex items-center gap-1"><FaLock />Our Policy</Link></li>
                        <li><Link to={'/login'} className="flex items-center gap-1"><ImSwitch />Log In</Link></li>
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    {
                        btns?.map(btn =>
                            <button key={btn.code} className={`${btn.code == i18n.language ? 'bg-green-600 text-white' : 'bg-white border border-slate-300 rounded-sm'} px-3 py-1 font-bold`}>
                                {btn.lang}
                            </button>
                        )
                    }
                </div>
            </div>

            <div className="mx-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* banner image */}
                <div className="p-4 shadow-sm bg-white">
                    <h2 className="text-lg md:text-2xl font-bold">Device Responsive</h2>
                    <p className="border-b border-b-slate-300 pb-3 mb-5">Can be used simultaneously on mobile and computer </p>
                    <img src={bannerImage} className="w-full object-contain" alt="Demo image - Responsive" />
                </div>

                {/* services */}
                <div>
                    
                </div>

            </div>

        </div>
    );
};

export default Home;