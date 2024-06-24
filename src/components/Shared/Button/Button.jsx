import PropTypes from 'prop-types';


const Button = ({text, icon:Icon, bg}) => {
    return (
        <button className={`${bg} text-white px-4 py-1 rounded-sm flex items-center gap-1 font-semibold`}>
            <Icon className='mt-[2px]' />
            {text}
        </button>
    );
};

export default Button;


Button.propTypes = {
    text: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
}
