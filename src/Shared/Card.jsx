import React from 'react';

export const Card = ({ image, imagesName, Heading, Title }) => {
    return (
        <div
            id="Card"
            className="flex gap-4 flex-col w-full max-w-sm p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
        >
            <img
                className="w-16 h-16 object-contain mb-4"
                src={image}
                alt={imagesName}
            />
            <h4 className="font-bold text-lg text-[#FFFFFF] mb-2 font-Montserrat text-[24px] md:text-[28px] ">{Heading}</h4>
            <p className="text-[#FFFFFF] font-[300] font-Work_Sans text-[14px] md:text-[18px]  ">{Title}</p>
        </div>
    );
};
