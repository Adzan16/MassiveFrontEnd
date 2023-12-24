import React, { useEffect } from 'react'
import axios from 'axios'
import Inputs from './Inputs'
import Buttons from './Buttons'
import Buttonb from './Buttonb'
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Right() {
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [token, setToken] = useState('');


    const Auth = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/auth/login', {
                email: email,
                password: passWord,
            })
            localStorage.setItem('token', response.data.token)

            navigate('/')
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.msg);
            }
        }
    }





    return (
        <div className='flex flex-col justify-center  items-center w-[50%] min-h-screen '>
            <div className='flex flex-col items-center justify-center w-[90%] h-[90%] '>
                <h1 className='text-5xl font-semibold '>Sign In</h1>
                <div className='w-full' >
                    <form onSubmit={Auth} className='mt-14 flex flex-col gap-6 w-full'>
                        <p>{msg}</p>
                        <Inputs heading="Username" type="text" placeholder="Example@gmail.com" value={email} setValue={(e) => setEmail(e.target.value)} />
                        <Inputs heading="Passsword" type="password" placeholder="Input your password" value={passWord} setValue={(e) => setPassWord(e.target.value)} />

                        <div className='flex flex-row w-full justify-between text-gray-400 '>
                            <div className='flex flex-row gap-2'>
                                <input type="checkbox" className='' />
                                <p>Remember Me?</p>
                            </div>
                            <p>Forgot Password?</p>
                        </div>

                        <button className="bg-gradient-to-r mt-10 from-[#976502] to-[#DEAC4B] w-full h-[50px] rounded-lg hover:bg-blue-700 text-white font">
                            <p className='text-lg font-semibold'>Login</p>
                        </button>
                    </form>
                </div>

                <div className='mt-5 w-full flex flex-col  gap-5'>

                    <div className='w-full flex flex-row items-center gap-4 justify-center'>
                        <div className='border-[1px] w-full'></div>
                        <p>Or</p>
                        <div className='border-[1px] w-full'></div>
                    </div>
                    <Buttonb tittle="Continue With Google" logo={<FaGoogle />} />
                </div>
            </div>
            <p className='mt-10'>Dont Have account? <span className='text-blue-400'><Link to="/Register">Sign Up</Link></span></p>
        </div>
    )
}
