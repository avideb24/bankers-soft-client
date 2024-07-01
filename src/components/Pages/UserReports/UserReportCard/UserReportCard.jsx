import { IoMdWallet } from "react-icons/io";
import PropTypes from 'prop-types';

const UserReportCard = ({ title, data }) => {

    console.log(data);

    return (
        <div className="border border-slate-300 p-3 rounded-md">

            <h2 className="text-lg md:text-xl flex items-center gap-1 font-bold mb-3"><IoMdWallet className="mt-1" />{title}</h2>

            {/* data table */}
            <div>
                <table className="w-full">
                    <tbody>
                        <tr className="border-t border-slate-300">
                            <th className="font-bold text-left">
                                {title === 'Share' || title === 'Savings' ? 'Deposit' :
                                    title === 'DPS' || title === 'Insurance' ? 'Collection' :
                                        title === 'Fixed Deposit' ? 'New FDR' : 'New Loan'
                                }
                            </th>
                            <th>:</th>
                            <td className="text-right"><span className="text-base md:text-lg">৳</span>0.00</td>
                        </tr>
                        <tr className="border-t border-slate-300">
                            <th className="font-bold text-left">
                                {title == 'Loan' ? 'Collection' : 'Withdraw'}
                            </th>
                            <th>:</th>
                            <td className="text-right"><span className="text-base md:text-lg">৳</span>0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default UserReportCard;

UserReportCard.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};