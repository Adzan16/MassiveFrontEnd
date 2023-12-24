import React from 'react'
import { useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import Feutured3 from '../../assets/Feutured3.svg'
import HeroImage from '../../assets/HeroImage.svg'
import ModalEdit from './ModalEdit'

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        address: '',
        phone: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUserData({
                    username: decodedToken.name || '',
                    email: decodedToken.email || '',
                    address: decodedToken.address || '',
                    phoneNumber: decodedToken.phoneNumber || '',
                });
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);



    return (
        <div className='flex justify-center items-center flex-row w-[90%] mt-32 h-[500px] '>
            <div className='flex items-center justify-center w-[30%] h-full '>
                <div className='flex justify-center items-center rounded-full  w-[85%] h-[70%] '>
                    <img src={HeroImage} alt="" className='object-cover w-full h-full rounded-full' />
                </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-5 w-[70%] h-full rounded-lg border'>
                <div className='w-[90%] items-center justify-between px-5 flex flex-row h-[20%] '>
                    <h1 className='text-6xl font-bold'>Informasi </h1>
                    <div className='w-[20%] bg-[#976502] h-[50%] border rounded-lg'>
                        <button className='w-full h-full text-white' onClick={() => setShowModal(true)}>
                            Edit Profile
                        </button>
                        <ModalEdit isVisible={showModal} OnClose={() => setShowModal(false)} />
                    </div>
                </div>
                <div className='flex flex-col justify-center w-[90%] gap-10 h-[60%] '>
                    <input
                        type="text"
                        placeholder='Username'
                        className='border px-5 rounded-lg h-10'
                        value={userData.username}
                        readOnly // Make the input read-only to display data
                    />
                    <input
                        type="text"
                        placeholder='Email'
                        className='border px-5 rounded-lg h-10'
                        value={userData.email}
                        readOnly
                    />
                    <input
                        type="text"
                        placeholder='Alamat'
                        className='border px-5 rounded-lg h-10'
                        value={userData.address}
                        readOnly
                    />
                    <input
                        type="number"
                        placeholder='No Handphone'
                        className='border px-5 rounded-lg h-10'
                        value={userData.phoneNumber}
                        readOnly
                    />
                </div>
            </div>
        </div>
    )
}
