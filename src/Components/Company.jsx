import React from 'react'

const Company = () => {
    const Images = {
        BackHub: '../../public/BackHub.png',
        CableLabs: '../../public/CableLabs.png',
        Dbs: '../../public/DBS.svg',
        EasYUro: '../../public/EasyEuro.svg',
        Amd: '../../public/AMD.svg',
    }
    return (
        <section id='Company-section' className=' py-8 gap-6 flex flex-col bg-[#07292F]' >
                <div><p className='text-center capitalize font-Work_Sans text-[#0FF1F6] ' >our trusted partners</p></div>
                <div className='flex justify-center items-center gap-8 flex-wrap  ' >
                    <img src={Images.BackHub} alt="BackHub" />
                    <img src={Images.CableLabs} alt="CableLabs" />
                    <img src={Images.Dbs} alt="Dbs" />
                    <img src={Images.EasYUro} alt="EasYUro" />
                    <img src={Images.Amd} alt="Amd" />
                </div>
        </section>
    )
}

export default Company