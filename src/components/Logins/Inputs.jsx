import React from 'react'

export default function Inputs(props) {
    return (
        <div className='w-full h-auto'>
            <div className='flex flex-col gap-2 '>
                <label>{props.heading}</label>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.setValue}
                    className='border h-[50px] px-10 rounded-lg' />
            </div>
        </div>
    )
}
