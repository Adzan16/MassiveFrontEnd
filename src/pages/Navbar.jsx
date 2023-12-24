import React, { useEffect } from 'react';
import LogoNavbar from '../assets/LogoNavbar.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(80);
    const navigate = useNavigate();


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

    const handleUserIconClick = () => {
        setShowOptions(!showOptions);
        setNavbarHeight(prevHeight => (prevHeight === 80 ? 200 : 80));
    };

    const handleLogout = () => {

        localStorage.removeItem('token');
        setToken(null);
        setUserData(null);
        setShowOptions(false);
        navigate("/Login")

    };

    return (
        <div className={`fixed w-full flex items-center justify-center overflow-hidden bg-white h-[${navbarHeight}px] border`}>
            <div className='flex justify-between items-center w-[90%] h-[80%] rounded-md'>
                <div><img src={LogoNavbar} alt="" /></div>
                <div>
                    <ul className='flex flex-row justify-center items-center gap-10 text-[18px] '>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Education">Education</Link></li>
                        <li><Link to="/Shops">Shop</Link></li>
                    </ul>
                </div>
                {token ? (
                    <div className='relative'>
                        <div className='flex flex-row gap-5' onClick={handleUserIconClick}>
                            <FaUser size={25} />
                            <p>{userData?.name}</p>
                        </div>
                        {showOptions && (
                            <div className='absolute bg-white border p-2 top-full right-0 mt-2 rounded-md shadow-md'>
                                <button className='block w-full text-left' onClick={handleLogout}>Log Out</button>
                                <button className='block w-full text-left'><Link to='/profile'>Profile</Link></button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <ul className=' flex flex-row gap-3 text-[18px]'>
                            <li><Link to="/Login">Login</Link></li>
                            <li><Link to="/Register">Daftar</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </ div>
    );
}
