import PropTypes from 'prop-types';


const ReportItem = ({label, amount}) => {
    return (
        <div className="grid grid-cols-3 items-center gap-2 border-t border-t-slate-300 py-2">
            <p className="font-bold w-[130%]">{label}</p>
            <p className="text-right">:</p>
            <p className='text-center'><span className="text-base md:text-xl">৳</span>{amount}</p>
        </div>
    );
};

export default ReportItem;


ReportItem.propTypes = {
    label: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}


