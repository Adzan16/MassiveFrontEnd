import React from 'react'
import LogoH from '../../assets/LogoH.svg'
import GunungBromo from '../../assets/GunungBromo.jpg'

export default function Left() {
    return (
        <div className='w-[50%] flex justify-start items-start min-h-screen border'>
            <img src={GunungBromo} alt="" className='min-h-screen object-cover' />
            <img src={LogoH} alt="" className='absolute top-0 left-2' />
        </div>
    )
}
