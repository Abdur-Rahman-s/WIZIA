import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#07292F] text-[#B0BEC5] flex justify-between items-center px-6 lg:px-[120px] py-4">
            {/* Logo Section */}
            <div className="text-lg font-semibold font-Montserrat">
                WIZIA
            </div>

            {/* Copyright Section */}
            <div className="text-sm">
                © 2023 Wizia. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
