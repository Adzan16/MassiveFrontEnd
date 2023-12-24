import React from 'react'
import Left from '../components/Logins/Left'
import Right from '../components/Logins/Right'

export default function Login() {
    return (
        <div className='w-full overflow-hidden min-h-screen flex flex-row justify-center items-center'>
            <Left />
            <Right />
        </div>
    )
}
