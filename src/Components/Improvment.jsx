import React from 'react';

export const Improvement = () => {
    const improvementData = {
        heading: 'Allocate effort where your reps make an impact.',
        title: 'Let us handle the rest.',
        content:
            'Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.',
        stats: [
            { value: '32%', description: 'Improvement in Open Rates' },
            { value: '75%', description: 'Improvement in Ramp Time' },
            { value: '35%', description: 'Improvement in Meetings Booked' },
        ],
    };

    return (
        <section
            className="improvement-section w-[92%] mx-auto rounded-3xl h-fit bg-[#07292F] px-8 lg:px-28 py-12 relative overflow-hidden animate-fade-in"
            aria-labelledby="improvement-heading"
        >
            {/* Background Images */}
            <img
                src="../../public/Group11.png"
                alt="Background for larger devices"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-50 z-10 hidden sm:block"
            />
            <img
                src="/BG.png"
                alt="Background for small devices"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-50 z-10 block sm:hidden"
            />

            {/* Text Content */}
            <div className="relative z-20 text-left">
                <h1 className="text-[28px] md:text-[32px] text-[#FFF] font-bold font-Montserrat max-w-[591px] leading-snug animate-slide-up">
                    {improvementData.heading}
                </h1>
                <h2 className="text-[24px] md:text-[32px] text-[#0FF1F6] italic font-medium font-Montserrat mt-4 max-w-[400px] delay-200">
                    {improvementData.title}
                </h2>
                <p className="text-md md:text-[20px] text-[#FFFFFF] font-light font-Work_Sans max-w-[582px] mt-4 animate-fade-in delay-400">
                    {improvementData.content}
                </p>
            </div>

            {/* Stats Section */}
            <div className="relative z-20 mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-8 md:gap-x-8 text-start max-w-full lg:max-w-[50%] ">
                {improvementData.stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col text-left w-auto p-4 border border-[#0FF1F6] rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 group"
                    >
                        <p className="text-[32px] md:text-[48px] text-[#0FF1F6] font-bold font-Montserrat group-hover:animate-pulse">
                            {stat.value}
                        </p>
                        <p className="text-[18px] md:text-[20px] text-[#FFFFFF] font-light font-Work_Sans mt-2">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
