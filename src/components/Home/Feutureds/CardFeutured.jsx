import React from 'react'


export default function CardFeutured(props) {
    return (
        <div className='flex flex-col justify-center items-center w-[400px]  shadow-md rounded-lg h-[250px]'>
            <img src={props.image} alt="" />
            <div className='mt-[2rem] flex flex-col w-[70%] text-center'>
                <h1 className='text-[20px] font-semibold'>{props.heading}</h1>
                <p className=''>{props.tittle}</p>
            </div>
        </div>
    )
}
