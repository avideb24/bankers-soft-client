import { useTranslation } from "react-i18next";
import EmployeeReports from "./EmployeeReports/EmployeeReports";
import SmsReports from "./SmsReports/SmsReports";


const TodaysReport = () => {

    // translation ---------------
    const {t} = useTranslation();
    const lang = t('AdminDashboard').TodaysReport;
    // ---------------------------

    return (
        <div className="bg-white p-5 shadow-sm my-5">

            {/* title */}
            <div className="flex items-center gap-10">
                <p className=" w-5/12 h-6 bg-slate-300"></p>
                <h1 className="w-2/12 min-w-48 text-center text-lg md:text-xl font-bold">{lang.todaysReport}</h1>
                <p className=" w-5/12 h-6 bg-slate-300"></p>
            </div>

            {/* report boxes */}
            <div className="py-3 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {/* collections */}
                <div className="flex flex-col items-center p-3 border border-slate-300 rounded-md">
                    <p><span className="text-base md:text-lg">৳</span>0</p>
                    <h3 className="font-bold">{lang.collections}</h3>
                </div>
                {/*  distribution */}
                <div className="flex flex-col items-center p-3 border border-slate-300 rounded-md">
                    <p><span className="text-base md:text-lg">৳</span>0</p>
                    <h3 className="font-bold">{lang.distribution}</h3>
                </div>
                {/*  expenses */}
                <div className="flex flex-col items-center p-3 border border-slate-300 rounded-md">
                    <p><span className="text-base md:text-lg">৳</span>0</p>
                    <h3 className="font-bold">{lang.expenses}</h3>
                </div>
                {/*  profits */}
                <div className="flex flex-col items-center p-3 border border-slate-300 rounded-md">
                    <p><span className="text-base md:text-lg">৳</span>0</p>
                    <h3 className="font-bold">{lang.profits}</h3>
                </div>
                {/*  fine collection */}
                <div className="flex flex-col items-center p-3 border border-slate-300 rounded-md">
                    <p><span className="text-base md:text-lg">৳</span>0</p>
                    <h3 className="font-bold">{lang.fineCollection}</h3>
                </div>
                {/* total cash */}
                <div className="flex flex-col items-center p-3 border border-slate-300 rounded-md">
                    <p><span className="text-base md:text-lg">৳</span>0</p>
                    <h3 className="font-bold">{lang.totalCash}</h3>
                </div>
            </div>

            <div className="flex gap-5">
                <EmployeeReports />
                <SmsReports />
            </div>

        </div>
    );
};

export default TodaysReport;