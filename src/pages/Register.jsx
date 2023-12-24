import React from 'react'
import Left from '../components/Logins/Left'
import RightReg from '../components/Registers/RightReg'

export default function Register() {
    return (
        <div className='w-full overflow-hidden min-h-screen flex flex-row justify-center items-center'>
            <Left />
            <RightReg />
        </div>
    )
}
