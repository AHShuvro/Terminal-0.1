
const Help = () => {
    return (
        <div className='text-wrap font-medium tracking-custom'>
            <p className="text-[#FCE26E]">{`Available commands listed below. Type "cls" to clear & "exit" to close terminal.`}</p>
            <h3 className="text-[#64F105]"><span className="text-[#ECAE32]">⪢</span> About</h3>
            <h3 className="text-[#64F105]"><span className="text-[#ECAE32]">⪢</span> Skills</h3>
            <h3 className="text-[#64F105]"><span className="text-[#ECAE32]">⪢</span> Contact</h3>
            <p className="text-[#FCE26E]">Never do a <span className='text-[#E70347]'>{`"sudo rm -rf"`}</span> , cause it will mess our entire internal system !</p>
        </div>
    );
};

export default Help;