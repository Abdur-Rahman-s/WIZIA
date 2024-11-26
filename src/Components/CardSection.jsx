import React from 'react';
import { Card } from '../Shared/Card';

export const CardSection = () => {

    const cardItems = [
        {
            image: '../../public/image_1.svg',
            Heading: 'You’re in Control',
            Title: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.',
            imagesName: 'aiDRs',
        },
        {
            image: '../../public/image_2.svg',
            Heading: 'Infinitely Scalable',
            Title: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.',
            imagesName: 'aiDRs',
        },
        {
            image: '../../public/image_3.svg',
            Heading: 'Incredibly Flexible',
            Title: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.',
            imagesName: 'aiDRs',
        },
    ];

    // All these cards are designed using the card component inside utilities.
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {cardItems.map((item, key) => (
                <Card
                    key={key}
                    image={item.image}
                    imagesName={item.imagesName}
                    Heading={item.Heading}
                    Title={item.Title}
                />
            ))}
        </div>
    );
};
