import { Link } from "react-router-dom";

const Close = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#011627] px-6'>
            <p className='text-[#FEC303] text-base font-semibold tracking-custom text-center'>Coded with <span className='text-[#F5084F]'>♥</span> by <Link to={"https://www.linkedin.com/in/ahshuvro77777/"} target="_blank"><span className='text-[#00FFFF]'>@ahshuvro77777</span></Link></p>
        </div>
    );
};

export default Close;