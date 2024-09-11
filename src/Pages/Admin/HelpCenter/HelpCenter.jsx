import Header from "../../../components/Shared/Header/Header";
import { TfiEmail } from "react-icons/tfi";
import { MdAddIcCall } from "react-icons/md";
import { useTranslation } from "react-i18next";


const HelpCenter = () => {

    // translation ---------------
    const {t} = useTranslation();
    const lang = t('HelpCenter');
    // ---------------------------

    return (
        <div>
            <Header title={lang.helpCenter} />

            <div className="bg-white m-4 p-5 shadow-sm">

                <div className="text-center space-y-3">
                    <h1 className="text-lg md:text-3xl font-bold text-blue-700">{lang.title}</h1>
                    <p className="text-sm md:text-base font-bold">{lang.slogan}</p>
                </div>

                <div className="flex flex-col items-center gap-3 pt-8">
                    <h3 className="font-bold"><span className="text-red-600">{lang.facingIssues}</span> {lang.pleaseContact}</h3>
                    <div className="flex gap-4 py-2">
                        <p className="p-2 shadow-md flex items-end gap-1">
                            <TfiEmail className="text-lg md:text-2xl" />
                            <span className="font-semibold pr-2">{lang.email}:</span>bankingsoftware@gmail.com
                        </p>
                        <p className="p-2 shadow-md flex items-end gap-1">
                            <MdAddIcCall className="text-lg md:text-2xl" />
                            <span className="font-semibold pr-2">{lang.phone}:</span><a href="tel:+8801723622125" className="hover:underline">+8801723622125</a>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HelpCenter;