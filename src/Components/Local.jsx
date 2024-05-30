import { useEffect, useState } from "react";

const Local = () => {
    const generateUUID = () => {
        const randomUUID = Math.random().toString(16).slice(2, 6) + ' ' + Math.random().toString(16).slice(2, 6) + ' ' + Math.random().toString(32).slice(2, 6) + ' ' + Math.random().toString(16).slice(2, 6) + ' : ' + Math.random().toString(16).slice(2, 6) + ' : ' + Math.random().toString(16).slice(2, 6);
        return randomUUID.toUpperCase();
    };

    const [uuid, setUUID] = useState('');

    useEffect(() => {
        setUUID(generateUUID());
    }, []);

    console.log(uuid);

    return (
        <div className="font-medium tracking-custom py-2">
            <p className="text-[#A0522D] dark:text-[#CD7638]">Welcome to ShellFolio v1992.05!</p>
            <p className="text-[#A0522D] dark:text-[#CD7638]">Session based UUID: <span className="text-[#DAA520] dark:text-[#FCE26E]">{uuid}</span>
            </p>
            <p className="text-[#A0522D] dark:text-[#CD7638]">Type <span className="text-[#4682B4] dark:text-[#7FFFD4]">"help"</span> to see available commands.</p>
            <p className="text-[#DAA520] dark:text-[#FCE26E]">All Commands are case insensitive.</p>
            <p className="text-[#6c757d] dark:text-[#FEC303]">To switch theme: Type <span className='text-[#F5084F]'>"dark"</span> for dark mode or <span className='text-[#F5084F]'>"light"</span> for light mode.</p>
        </div>

    );
};


export default Local;