import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons(props) {
    return (
        <div className='w-full h-auto '>
            <Link to={`/${props.url}`} >
                <button type="button" className="bg-gradient-to-r from-[#976502] to-[#DEAC4B] w-full h-[50px] rounded-lg hover:bg-blue-700 text-white font">
                    <p className='text-lg font-semibold'>{props.tittle}</p>
                </button>
            </Link>

        </div >
    )
}
