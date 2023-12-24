import React from 'react'
import CardTesti from './CardTesti'
import Feutured3 from '../../../assets/Feutured3.svg'
export default function Testimoni() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-[600px]'>
            <div className='flex justify-center items-center flex-col gap-10 w-[90%] h-[80%] '>
                <div className='text-center'>
                    <p className='text-lg font-normal'>Testimoni</p>
                    <h1 className='text-3xl font-bold'>What our partner and customer say</h1>
                </div>
                <div className='flex flex-row mt-[3rem] w-full justify-between'>
                    <CardTesti image={Feutured3} heading="Sandika" tittle="Mempermudah dalam penyewaan" />
                    <CardTesti image={Feutured3} heading="Santos" tittle="Enak banget Ngga ribet lagi harus ke tempat rental" />
                    <CardTesti image={Feutured3} heading="Andrika" tittle="Pengalaman naik gunung lebih seru karna alat yang lengkap" />
                </div>
            </div>
        </div>
    )
}
