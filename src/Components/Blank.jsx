import { Link } from "react-router-dom";

const Blank = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#011627]'>
            <Link to={'/'}><p className="text-[#6EF500] hover:text-[#FEC303] italic font-semibold tracking-custom">Start</p></Link>
        </div>
    );
};

export default Blank;