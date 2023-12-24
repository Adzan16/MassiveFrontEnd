import React from 'react'

export default function VideoEdu(props) {
    return (
        <div className='flex flex-col items-center justify-center w-[40%] h-auto '>
            <div className='w-full h-[60%] text-center  '>
                <img src={props.image} alt="" className='object-contain rounded-lg' />
            </div>
            <div className='mt-[2rem] w-full flex flex-col h-[50%] gap-5'>
                <div>
                    <h1 className='text-[1rem] font-semibold'>{props.heading}</h1>
                    <p>{props.tittle}</p>
                </div>
                <h1 className='text-center text-lg font-semibold text-[#976502]'><a href={`${props.url}`}>View More</a></h1>
            </div>
        </div>

    )
}
