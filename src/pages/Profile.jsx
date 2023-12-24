import React from 'react'
import Header from '../components/Profiles/Header'
import FormData from '../components/Profiles/FormData'

export default function Profile() {
    return (
        <div className='w-full flex flex-col justify-center items-center min-h-screen'>
            <Header />
            <FormData />
        </div>
    )
}
