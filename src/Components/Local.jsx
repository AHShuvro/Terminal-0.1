import { useEffect, useState } from "react";

const Local = () => {
    const generateUUID = () => {
        const randomUUID = Math.random().toString(16).slice(2, 6) + ' ' + Math.random().toString(16).slice(2, 6) + ' ' + Math.random().toString(32).slice(2, 6) + ' ' + Math.random().toString(16).slice(2, 6) + ' : ' + Math.random().toString(16).slice(2, 6)+ ' : ' + Math.random().toString(16).slice(2, 6);
        return randomUUID.toUpperCase();
    };

    const [uuid, setUUID] = useState('');

    useEffect(() => {
        setUUID(generateUUID());
    }, []);

    console.log(uuid);

    return (
        <div className="font-medium tracking-custom py-2">
            <p className="text-[#CD7638]">Welcome to ShellFolio v1992.05 !</p>
            <p className="text-[#CD7638]">Session based UUID: <span className="text-[#FCE26E]">{uuid}</span></p>
            <p className="text-[#CD7638]">Type <span className="text-[#7FFFD4]">"help"</span> to see available commands.</ p>
            <p className="text-[#FCE26E]">All Commands are case insensitive.</p>
        </div>
    );
};


export default Local;