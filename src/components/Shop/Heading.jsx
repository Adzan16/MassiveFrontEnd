import React from 'react'


export default function Heading() {
    return (
        <div className='w-full flex justify-center items-center min-h-screen bg-[#976502]'>
            <div className='flex flex-col justify-center items-center w-[90%] gap-10 h-[90%] '>
                <div className='w-[60%] text-center'>
                    <h1 className='text-[3rem] font-semibold text-white'>Temukan peralatan camping yang
                        anda butuhkan</h1>
                </div>
                <div className='w-full items-center justify-center flex flex-row'>

                    <form className='w-[70%] h-[70px]'>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Alat, Tendah..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-[#976502] dark:hover:bg-[#d3ac5d] dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}