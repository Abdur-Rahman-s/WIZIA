import React from 'react';
import { Button } from '@nextui-org/react';
import ExportIcom from '../../public/Export.svg'

const BetaSignUp = () => {
    const sectionData = {
        heading: 'Get Started',
        subHeading: 'Embrace the new era of outbound.',
        description:
            'Wizia lets you train, activate, and optimize aiDRs. Take your outbound to new levels of performance and efficiency.',
        buttonLabel: 'Sign Up for the Beta',
        buttonUrl: '/signup',
    };

    return (
        <section
            id="BetaSignUp"
            className="relative animateg w-full h-auto bg-[#002228] py-16 flex flex-col  items-center text-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r  opacity-70 z-0 animate-gradient-flow"></div>

            <div className="relative z-10 px-6 lg:px-0 max-w-3xl">
                <p className="text-[#0FF1F6] text-sm uppercase font-semibold tracking-wide animate-fade-in">
                    {sectionData.heading}
                </p>
                <h1 className="text-white text-3xl md:text-4xl font-bold font-Montserrat mt-4 animate-slide-up">
                    {sectionData.subHeading}
                </h1>
                <p className="text-[#B0BEC5] text-base md:text-lg font-light font-Work_Sans mt-4 animate-fade-in">
                    {sectionData.description}
                </p>

                {/* Call-to-action Button */}
                <Button
                    className="mt-6 bg-[#0FF1F6]  animate-bounce text-[#07292F] hover:bg-[#00E5FF] shadow-lg rounded-full px-6 py-3 transition-all"
                    ripple={false}
                >
                    {sectionData.buttonLabel}
                    <img src={ExportIcom} alt="" />
                </Button>
            </div>
        </section>
    );
};

export default BetaSignUp;
