import { useTranslation } from "react-i18next";
import { FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";


const EmployeeReports = () => {

    // fake data
    const reports = [
        { name: 'Avi Debnath', image: 'https://i.ibb.co/NZFtFPL/user.png', role: 'Admin', collection: 0, type: 'collection' },
        { name: 'Avi Debnath', image: 'https://i.ibb.co/NZFtFPL/user.png', role: 'Admin', collection: 0, type: 'collection' },
    ];

    // -------------------------------

    // translation ---------------
    const {t} = useTranslation();
    const lang = t('AdminDashboard').TodaysReport;
    // ---------------------------


    return (
        <div className="w-1/2 p-4 border-t border-t-slate-300 pt-3">
            <h2 className="flex items-center gap-1 text-lg md:text-xl font-bold pb-4"><FaChartBar />{lang.employeeReports}</h2>

            {/* reports table */}
            <div>
                {
                    reports?.length == 0 ?
                        <div className="py-4">{lang.notFound}</div>
                        :
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reports?.map((report, idx) =>
                                        <tr key={idx} className="border-t border-t-slate-300">
                                            <td className="flex gap-2 p-1">
                                                <img src={report?.image} className="w-10 h-10 object-contain rounded-lg" alt={report?.name} />
                                                <Link to={'/user-reports'}>
                                                    <p className="font-bold">{report?.name}</p>
                                                    <p>{report?.role}</p>
                                                </Link>
                                            </td>
                                            <td>:</td>
                                            <td className="text-right p-1">
                                                <p className="font-bold"><span className="text-base md:text-lg">৳</span>{report?.collection}</p>
                                                <p className="capitalize">{report?.type}</p>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                }
            </div>

        </div>
    );
};

export default EmployeeReports;