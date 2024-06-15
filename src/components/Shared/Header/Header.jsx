import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <div className='flex justify-between gap-4'>
            <h1>{title}</h1>
            <button>+ Add New</button>
        </div>
    );
};

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
