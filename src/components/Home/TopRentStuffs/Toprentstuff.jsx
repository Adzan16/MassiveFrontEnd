import React from 'react'
import CardTop from './CardTop'
import Hammock from '../../../assets/Hammock.svg'

export default function Toprentstuff() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto pb-20 '>
            <div className='flex flex-col w-[90%] h-[80%] '>
                <div className='w-full'>
                    <p className='border-b-2 pb-5 text-3xl font-semibold'>Top Rent Stuff</p>
                </div>

                <div className='mt-10 flex flex-wrap justify-between gap-10 '>
                    <CardTop image={Hammock} name="Hammock" price="Rp 20.000" hari="1" />
                </div>
            </div>
        </div>
    )
}
