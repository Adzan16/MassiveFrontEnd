import React from 'react'
import CardFeutured from './CardFeutured'
import Featured1 from '../../../assets/Featured1.svg'
import Featured2 from '../../../assets/Feutured2.svg'
import Featured3 from '../../../assets/Feutured3.svg'

export default function Feutured() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-[800px]'>
            <div className='flex justify-center items-center flex-col gap-10 w-[90%] h-[80%] '>
                <div className='text-center'>
                    <p className='text-lg font-normal'>Feutured</p>
                    <h1 className='text-3xl font-semibold'>Our Features Really Care About Both Parties</h1>
                </div>
                <div className='flex flex-row mt-[3rem] w-full justify-between'>
                    <CardFeutured image={Featured1} heading="Information & Education" tittle="Belajar menggunakan perlengkapan kemah yang baik dan benar" />
                    <CardFeutured image={Featured2} heading="Camp Stuff Rent" tittle="Layanan penyewaan peralatan dan perlengkapan berkemah " />
                    <CardFeutured image={Featured3} heading="Become a Partner" tittle="Mari menjadi partner kami untuk menyewakan alat kemah" />
                </div>
            </div>
        </div>
    )
}
