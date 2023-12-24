import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import Modal from './Modal';
import { useState } from 'react'

export default function FormData() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='w-[90%] min-h-screen  mt-10'>
            <div className='flex  flex-col w-full h-auto '>
                <div className='flex flex-row items-center gap-10 w-full pb-3 '>
                    <h1 className='text-[3rem] font-medium'>My Shops</h1>
                    <button className='' onClick={() => setShowModal(true)}>
                        <CiCirclePlus className='text-[3rem] ' />
                    </button>
                </div>
                <div className='w-full'>
                    <p className='border-b-2'></p>
                </div>
                <Modal isVisible={showModal} onClose={() => setShowModal(false)} />

            </div>
        </div>
    )
}
