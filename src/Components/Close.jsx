import { Link } from "react-router-dom";

const Close = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#011627] px-6'>
            <p className='text-[#FEC303] text-base font-semibold tracking-custom text-center'>Coded with <span className='text-[#F5084F]'>♥</span> by <Link to={"https://www.facebook.com/evilprince2009/?_rdc=1&_rdr"} target="_blank"><span className='text-[#00FFFF]'>@evilprince2009</span></Link></p>
        </div>
    );
};

export default Close;