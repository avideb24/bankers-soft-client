import { IoIosMailOpen } from "react-icons/io";
import { Link } from "react-router-dom";


const SmsReports = () => {

    const report = [];

    return (
        <div className="w-1/2 p-4 border-t border-t-slate-300 pt-3">
            <h2 className="flex items-center gap-1 text-lg md:text-xl font-bold "><IoIosMailOpen />SMS Reports</h2>

            {/* reports */}
            <div  className="py-4">
                {
                    report?.length == 0 ?
                    <div>No reports found!</div>
                    :
                    <div></div>
                }
            </div>
            <div className="text-right">
            <Link to={'/message-reports'} className="text-blue-700 font-bold">See more...</Link>
            </div>

        </div>
    );
};

export default SmsReports;