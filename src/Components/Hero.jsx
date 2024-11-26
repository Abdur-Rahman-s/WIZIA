import React from 'react';
import { Button } from "@nextui-org/react";
import ExportIcom from '../../public/Export.svg'
function Hero() {
    const HeroItem = {
        Heading: 'AI SDRs (aiDRs)',
        Title: 'More leads, less people.',
        content:
            'Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.',
    };

    return (
        <section
            id="HeroSection"
            className=" bg-[url('/Hero.png')] bg-cover bg-center h-[572px]  flex items-center "
        >
            <div className='container mx-auto '>
                <div className='flex justify-center flex-col items-center md:block text-center md:text-start gap-2 ' >
                    <h1 className=" text-[16px]  text-[#0FF1F6] md:text-[24px] font-bold font-Montserrat ">{HeroItem.Heading}</h1>
                    <h2 className=" w-[300px] text-[#FFF] leading-tight font-[700] md:w-[400px] text-[40px] font-Montserrat md:text-[64px] mt-4">{HeroItem.Title}</h2>
                    <p className=" text-[16px] font-[300] text-[#FFF] md:text-[20px] w-[343px] md:w-[450px] font-Work_Sans ">{HeroItem.content}</p>
                </div>
                <div className='px-4 md:px-0 mt-[24px] ' >
                    <Button
                        radius="full"
                        className="bg-[#0FF1F6] text-black font-Work_Sans text-sm w-full md:w-auto  hover:bg-white transition-transform duration-300"
                    >
                        Sign Up for the Beta 
                        <img src={ExportIcom} alt="" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
