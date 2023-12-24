import React from 'react'

export default function Footer() {
    return (
        <div className='flex justify-center items-center w-full h-[200px] bg-[#976502] '>
            <div className='flex flex-row justify-center items-center w-[90%] gap-40 h-[80%]  text-white '>
                <div className='w-[40%] flex flex-col gap-4'>
                    <p>Address : Jl.Pangeran Sogiri No.374 RT.004 RW.002. Kel.Tanah Baru Kec.bogor Utara Kota Bogor</p>
                    <p>+62 812 3456 789</p>
                    <p>Email@gmail.com</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Company</h1>
                    <p>About</p>
                    <p>Carrier</p>
                    <p>Mobile</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Contact</h1>
                    <p>Help/FAQ</p>
                    <p>Press</p>
                    <p>Affliate</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>More</h1>
                    <p>Airlinefees</p>
                    <p>Air Line</p>
                    <p>testeLow fare tips</p>
                </div>
            </div>
        </div>
    )
}
