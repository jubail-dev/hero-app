import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/logo.png"

const Nav = () => {
    return (
        <nav>
            <div>
                {/* Logo Area */}
                <div>
                    <Image src={Logo} alt='Hero Logo'></Image>
                </div>
            </div>
        </nav>
    );
};

export default Nav;