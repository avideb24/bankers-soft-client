import { useTranslation } from "react-i18next";
import { IoIosMailOpen } from "react-icons/io";
import { Link } from "react-router-dom";


const SmsReports = () => {

    // fake data
    const report = [];

    // ------------------------

    // translation ------------
    const {t} = useTranslation();
    const lang = t('AdminDashboard').TodaysReport;
    // ------------------------

    return (
        <div className="w-1/2 p-4 border-t border-t-slate-300 pt-3">
            <h2 className="flex items-center gap-1 text-lg md:text-xl font-bold "><IoIosMailOpen />{lang.smsReports}</h2>

            {/* reports */}
            <div  className="py-4">
                {
                    report?.length == 0 ?
                    <div>{lang.notFound}</div>
                    :
                    <div></div>
                }
            </div>
            <div className="text-right">
            <Link to={'/message-reports'} className="text-blue-700 font-bold">{lang.seeMore}...</Link>
            </div>

        </div>
    );
};

export default SmsReports;