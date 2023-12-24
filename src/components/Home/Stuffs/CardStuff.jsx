import React from 'react'
import { item } from '../../../Constant'

export default function CardStuff() {
    return (
        <>
            {item.map((Items) => (
                <div key={Items.id} className='flex flex-col justify-center items-center border border-[#976502] rounded-lg w-[300px] h-[350px]' >
                    <div className='w-[90%] h-[90%]'>
                        <div className=' w-full h-[80%] flex items-center justify-center'>
                            <img src={Items.image} alt="" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg'>{Items.name}</h1>
                            <p>Rp.{Items.price} / {Items.hari} Hari</p>
                        </div>
                    </div>
                </div >
            ))}
        </>


    )
}
