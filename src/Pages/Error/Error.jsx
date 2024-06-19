import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.png';

const Error = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='max-w-md'>
                <img src={errorImg} className='w-full object-contain' alt="Error Image" />
            </div>
            <h3 className='text-base md:text-xl font-bold mb-5'>Sorry! Your Requested page was not found!</h3>
            <Link to={'/'} className='bg-[#5fc3d1] text-white font-semibold px-4 py-2 rounded-sm'>Go Home</Link>
        </div>
    );
};

export default Error;