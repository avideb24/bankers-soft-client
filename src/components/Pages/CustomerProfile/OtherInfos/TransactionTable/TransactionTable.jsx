import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TransactionTable = ({ title, data }) => {

    return (
        <div className="p-5 bg-white shadow-sm mt-4">
            <h2 className='text-base md:text-xl font-bold mb-2'>{title}</h2>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className='bg-slate-300 p-1'>Opening Date</th>
                        <th className='bg-slate-300 p-1'>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((singleData, idx) =>
                            <tr key={idx}>
                                <th className='font-normal p-1'>
                                    <Link to={'/'}>
                                        {singleData?.date}
                                    </Link>
                                </th>
                                <th className='font-normal p-1'>
                                    <Link to={'/'}>
                                        <span className='text-base md:text-lg'>৳</span>{singleData?.balance}
                                    </Link>
                                </th>
                            </tr>
                        )
                    }
                    <tr>
                        <td className='font-bold bg-slate-300 p-1'>Total</td>
                        <td className='font-bold bg-slate-300 p-1'><span className='text-base md:text-lg'>৳</span>5000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;

TransactionTable.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
};