import { useTranslation } from "react-i18next";
import Header from "../../../components/Shared/Header/Header";


const ProfitsDistribution = () => {


    // translations---------------
    const {t} = useTranslation();
    const lang = t('ProfitDistribution');
    // ----------------------------


    return (
        <div>
            <Header title={lang.profitDistribution} />

            <div className="bg-white m-4 p-5 shadow-sm">

                <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold mt-2">{lang.sorry}</h3>
                    <p className="text-red-600">{lang.notFound}</p>
                </div>

            </div>

        </div>
    );
};

export default ProfitsDistribution;