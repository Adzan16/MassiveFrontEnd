// ModalEdit.jsx
import React, { useState } from 'react';

const ModalEdit = ({ isVisible, OnClose, onUpdateProfile }) => {
    const [updatedData, setUpdatedData] = useState({
        username: '',
        email: '',
        address: '',
        phoneNumber: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Call the onUpdateProfile function to update the user profile
        onUpdateProfile(updatedData);

        // Close the modal
        OnClose();
    };

    return (
        isVisible && (
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[600px] flex flex-col bg-white p-2 rounded-lg'>
                    <button className='text-white text-xl place-self-end' onClick={OnClose}>
                        X
                    </button>
                    <div>

                        <input
                            type="text"
                            placeholder='Username'
                            className='border px-5 rounded-lg h-10'
                            name="username"
                            value={updatedData.username}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Email'
                            className='border px-5 rounded-lg h-10'
                            name="email"
                            value={updatedData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Alamat'
                            className='border px-5 rounded-lg h-10'
                            name="address"
                            value={updatedData.address}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder='No Handphone'
                            className='border px-5 rounded-lg h-10'
                            name="phoneNumber"
                            value={updatedData.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button onClick={handleSubmit}>Update Profile</button>
                </div>
            </div>
        )
    );
};

export default ModalEdit;
