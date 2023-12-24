import React from 'react'
import Hero from '../components/Home/Hero'
import Feutured from '../components/Home/Feutureds/Feutured'
import Stuff from '../components/Home/Stuffs/Stuff'
import Toprentstuff from '../components/Home/TopRentStuffs/Toprentstuff'
import Testimoni from '../components/Home/Testi/Testimoni'

export default function Home() {


    return (
        <div className='flex flex-col justify-center items-center w-full min-h-screen overflow-hidden'>
            <Hero />
            <Feutured />
            <Stuff />
            <Toprentstuff />
            <Testimoni />
        </div>
    )
}
