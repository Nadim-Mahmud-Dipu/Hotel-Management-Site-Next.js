import React from 'react';
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header
            className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap justify-between">
            <div className="flex items-center w-full md:2/3">
                <Link href="/" className={"font-black text-[#F27405]"}>
                    Hotelzz
                </Link>
                <ul className="flex items-center ml-5">
                    <Link href="/auth">
                        <FaUserCircle className="cursor-pointer"/>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;