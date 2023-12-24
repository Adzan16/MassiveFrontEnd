import React from 'react'
import CardStuff from './CardStuff'
import Tenda from '../../../assets/Tenda.svg'
import Tas from '../../../assets/Tas.svg'
import Kompor from '../../../assets/Kompor.svg'
import SleepingBag from '../../../assets/SleepingBag.svg'

export default function Stuff() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto pb-20 '>
            <div className='flex flex-col w-[90%] h-[80%] '>
                <div className='w-full'>
                    <p className='border-b-2 pb-5 text-3xl font-semibold'>Stuff</p>
                </div>

                <div className='mt-10 flex flex-wrap justify-between gap-10 '>
                    <CardStuff />
                </div>
            </div>
        </div>
    )
}
