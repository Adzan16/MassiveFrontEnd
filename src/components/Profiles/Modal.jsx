import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

export default function Modal({ isVisible, onClose }) {
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState(0);


    useEffect(() => {

        const tokens = localStorage.getItem('token');
        setToken(tokens);

        if (tokens) {
            try {
                const decode = jwtDecode(tokens);
                setUserData(decode);
                console.log(decode);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, [token]);

    const createProduct = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/product/createProduct', {
                name: productData.name,
                description: productData.description,
                image: productData.image,
                price: productData.price,
                userId: userData.id,
            })
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    };

    console.log()



    return isVisible ? (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={onClose}>
                    X
                </button>
                <div className=''>
                    <form onSubmit={createProduct} className='bg-white p-2 rounded-lg flex flex-col justify-center'>
                        <h2>Create a New Product</h2>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border' />

                        <label>Description:</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='border' />

                        <label>Image:</label>
                        <input type="file" accept="image/jpeg" onChange={(e) => setImage(e.target.files[0])} className='border' />

                        <label>Price:</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='border' />

                        <button type='submit'>Create Product</button>
                    </form>
                </div>
            </div>
        </div>
    ) : null;
}
