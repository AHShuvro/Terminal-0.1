import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blank = () => {

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const resetTheme = () => {
        localStorage.setItem('theme', 'dark');
    }
    return (
        <div className={`${theme} flex justify-center items-center h-screen bg-[#FAFAFA] dark:bg-[#011627]`}>
            <Link to={'/'}><p onClick={() => resetTheme()} className="text-[#00CED1] hover:text-[#4682B4] dark:text-[#6EF500] dark:hover:text-[#FEC303] italic font-semibold tracking-custom">Start</p></Link>
        </div>
    );
};

export default Blank;