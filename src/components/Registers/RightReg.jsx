import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Inputs from '../Logins/Inputs'
import Buttons from '../Logins/Buttons'
import Buttonb from '../Logins/Buttonb'
import { FaGoogle } from 'react-icons/fa6'
import axios from 'axios'

export default function RightReg() {
    const [userName, setUsername] = useState('');
    const [handphone, setHandphone] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/auth/register', {
                username: userName,
                phoneNumber: handphone,
                email: email,
                password: password,
            })
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }


    return (
        <div className='flex flex-col justify-center  items-center w-[50%] min-h-screen '>

            <div className='flex flex-col items-center justify-center w-[90%] h-[90%] '>
                <h1 className='text-5xl font-semibold '>Sign Up</h1>
                <form onSubmit={Register} className='mt-10 flex flex-col gap-3 w-full'>
                    <Inputs heading="Username"
                        placeholder="Example"
                        value={userName}
                        type="text"
                        setValue={(e) => setUsername(e.target.value)} />
                    <Inputs heading="No Handphone"
                        placeholder="+62 8*******"
                        type="number"
                        value={handphone}
                        setValue={(e) => setHandphone(e.target.value)} />

                    <Inputs heading="Email"
                        placeholder="Example@Gmail.com"
                        type="text"
                        value={email}
                        setValue={(e) => setEmail(e.target.value)} />
                    <Inputs heading="Passsword"
                        placeholder="Input your password"
                        type="password"
                        value={password}
                        setValue={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="bg-gradient-to-r from-[#976502] to-[#DEAC4B] w-full h-[50px] rounded-lg text-white font">
                        <p className='text-lg font-semibold'>Daftar</p>
                    </button>

                </form>
                <div className='mt-5 w-full flex flex-col  gap-5'>

                    <div className='w-full flex flex-row items-center gap-4 justify-center'>
                        <div className='border-[1px] w-full'></div>
                        <p>Or</p>
                        <div className='border-[1px] w-full'></div>
                    </div>
                    <Buttonb tittle="Continue With Google" logo={<FaGoogle />} />
                </div>
            </div>

            <p className='mt-10'>Have account yet? <span className='text-blue-400'><Link to="/Login">Sign In</Link></span></p>
        </div>
    )
}
