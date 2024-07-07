import PropTypes from 'prop-types';


const CustomerHeader = ({title}) => {
    return (
        <div className='sticky z-40 left-0 top-0 p-4 bg-white shadow-md text-base lg:text-xl font-bold capitalize'>
            {title}
        </div>
    );
};

export default CustomerHeader;


CustomerHeader.propTypes = {
    title: PropTypes.string,
};