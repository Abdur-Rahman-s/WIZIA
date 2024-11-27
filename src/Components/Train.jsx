import React from 'react';
import TrainImage from '/TrainImage.png'; 
import BGImage from '/BG.png'; 

export const Train = () => {
    const element = [
        {
            Heading: 'Train your aiDR on your...',
            Title: 'preferred email strategy|',
            content: 'You’re in control. Train your aiDR on elements of your Marketing strategy.',
        },
    ];

    const secondElement = [
        { image: '/ph_check-circle-duotone.png', title: 'Quick to ramp' }, 
        { image: '/ph_check-circle-duotone.png', title: 'Easy to optimize' }, 
        { image: '/ph_check-circle-duotone.png', title: 'Quick to scale up' },
        { image: '/ph_check-circle-duotone.png', title: 'Works with all your existing tools' }, 
    ];
    return (
        <section className="train-section w-[92%] mx-auto rounded-3xl px-8 lg:px-28 py-12 relative overflow-hidden">
            {/* Responsive Images */}
            <img
                src={BGImage}
                alt="Background for small devices"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-50 z-10 lg:hidden" // Hidden for larger screens
            />
            <img
                src={TrainImage}
                alt="Train image for larger devices"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-50 z-10 hidden sm:block" // Visible only on larger screens
            />

            {/* Text Content */}
            <div className="relative z-50 flex justify-center items-center py-[50px]">
                <div>
                    {element.map((item, index) => (
                        <div key={index} className="main-content text-center space-y-4">
                            <h1 className="text-[22px] sm:text-[28px] md:text-[48px] text-start text-[#FFFFFF] font-Montserrat font-bold">
                                {item.Heading}
                            </h1>
                            <h2 className="text-[18px] sm:text-[22px] text-[#0FF1F6] md:text-[38px] italic text-start text-Cyan_text font-Montserrat font-[500]">
                                {item.Title}
                            </h2>
                            <p className="text-[14px] sm:text-[16px] md:text-[24px] text-start w-full sm:w-[450px] font-[300] text-[#FFF]">
                                {item.content}
                            </p>
                        </div>
                    ))}
                    <div className="features mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {secondElement.map((item, index) => (
                            <div key={index} className="feature-item flex items-center space-x-4">
                                <img src={item.image} alt={item.title} className="feature-icon w-8 h-8" />
                                <p className="text-base lg:text-lg text-[#14BCB2] cursor-pointer " >{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};
