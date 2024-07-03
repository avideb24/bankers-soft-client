import PropTypes from 'prop-types';


const Button = ({text, icon:Icon, bg, handleClick}) => {
    return (
        <button onClick={handleClick} className={`${bg} text-white px-4 pt-1 pb-[6px] rounded-[4px] flex items-center gap-1 font-semibold`}>
            <Icon className='mt-[2px]' />
            {text}
        </button>
    );
};

export default Button;


Button.propTypes = {
    text: PropTypes.string,
    bg: PropTypes.string,
    icon: PropTypes.elementType,
    handleClick: PropTypes.func
}
