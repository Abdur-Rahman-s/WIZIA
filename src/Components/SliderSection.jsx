import React, { useState } from "react";
import CommaIcon from "../../public/comma.png"; // সঠিক পাথ চেক করুন

export const SliderSection = () => {
    const SliderItems = [
        {
            text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            name: "John Doe",
            title: "Chief Strategy Officer @ Company",
        },
        {
            text: "Hi, I'm a passionate Frontend Developer with expertise in React.js, HTML, CSS, Tailwind , Bootstrap and JavaScript. ",
            name: "Abdur Rahman",
            title: "Chief Strategy Officer @ Company",
        },
        {
            text: "Develops, coordinates, and enforces systems, policies, procedures, and productivity standards. ",
            name: "Shanto",
            title: "Chief Strategy Officer @ Company",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? SliderItems.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === SliderItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section id="Slider" className="text-center w-full bg-[#002228] text-white pt-24 pb-20">
            <div className="relative max-w-3xl mx-auto flex items-center justify-evenly ">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className={`text-xl p-2 lg:-translate-x-[200px] bg-gray-800 rounded-lg ${currentIndex === 0 ? "text-[#96ACAF]" : "text-[#0FF1F6]"
                        }`}
                >
                    <i className="ri-arrow-left-line"></i>
                </button>

                {/* Content Section */}
                <div className="p-4 flex flex-col gap-9 text-center flex-1">
                    <div className="w-[74px] h-[74px]  bg-[#183A40] mx-auto rounded-full flex items-center justify-center " >
                    <img src={CommaIcon} alt="comma icon" />
                    </div>
                    <h1 className="text-[24px] font-[300] md:text-[32px] mb-2">{SliderItems[currentIndex].text}</h1>
                    <p className="text-cyan-400">{SliderItems[currentIndex].name}</p>
                    <p className="text-sm">{SliderItems[currentIndex].title}</p>
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className={`text-xl p-2 lg:translate-x-[200px] bg-gray-800 rounded-lg ${currentIndex === SliderItems.length - 1 ? "text-[#96ACAF]" : "text-[#0FF1F6]"
                        }`}
                >
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
                {SliderItems.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full   ${index === currentIndex ? "bg-cyan-400" : "bg-gray-500"}`}
                    >
                    </div>
                ))}
            </div>
        </section>
    );
};
