import React from 'react'

export default function Buttonb(props) {
    return (
        <div className='w-full h-auto '>
            <a href={`/${props.url}`} >
                <button type="button" className="border items-center justify-center gap-10 flex flex-row w-full h-[50px] rounded-lg ">
                    <p className='text-[30px]'>{props.logo}</p>
                    <p className='font-semibold text-lg'>{props.tittle}</p>
                </button>
            </a >

        </div >
    )
}
