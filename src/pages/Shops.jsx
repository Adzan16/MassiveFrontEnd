import React from 'react'
import Heading from '../components/Shop/Heading'
import Stuff from '../components/Home/Stuffs/Stuff'
import Toprentstuff from '../components/Home/TopRentStuffs/Toprentstuff'

export default function Patner() {
    return (
        <div className='flex flex-col justify-center items-center w-full min-h-screen overflow-hidden'>
            <Heading />
            <div className='mt-[5rem] w-full'>
                <Toprentstuff />
                <Stuff />
            </div>
        </div>
    )
}
