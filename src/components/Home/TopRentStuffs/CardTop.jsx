import React from 'react'

export default function CardTop(props) {
    return (
        <div className='flex flex-col justify-center items-center border border-[#976502] rounded-lg w-[300px] h-[350px]'>
            <div className='w-[90%] h-[90%]'>
                <div className=' w-full h-[80%] flex items-center justify-center'>
                    <img src={props.image} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold text-lg'>{props.name}</h1>
                    <p>{props.price} / {props.hari} Hari</p>
                </div>
            </div>
        </div>
    )
}
