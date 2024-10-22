import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";


const Employee = () => {
    return (
        <div>
            <div className='w-full h-[90vh]'>
                <div className='left flex flex-col justify-center px-4'>
                    <div className='leftinner w-full bg-zinc-200 my-2 p-4 '>
                        <div className='w-full flex justify-between items-center py-2 my-2'>
                            <label className='text-2xl' htmlFor="name">Customers :</label>
                            <input type="text" className='w-auto min-w-[70%] bg-gray-100 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                        {/* <div className='w-full flex justify-between items-center py-2 my-2'>
                            <label className='text-2xl' htmlFor="name">Email :</label>
                            <input type="text" className='w-auto min-w-[70%] bg-gray-100 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                        <div className='w-full flex justify-between items-center py-2 my-2'>
                            <label className='text-2xl' htmlFor="name">Mobile Number :</label>
                            <input type="text" className='w-auto min-w-[70%] bg-gray-100 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div> */}
                        <div className='w-full flex justify-between items-center py-2 my-2'>
                            <label className='text-2xl' htmlFor="name">Bank Name :</label>
                            <input type="text" className='w-auto min-w-[70%] bg-gray-100 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                        <div className='w-full flex justify-between items-center py-2 my-2'>
                            <label className='text-2xl' htmlFor="number">Account Number :</label>
                            <input type="text" className='w-auto min-w-[70%] bg-gray-100 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                        <div className='w-full flex justify-between items-center py-2 my-2'>
                            <label className='text-2xl' htmlFor="name">IFSC Code :</label>
                            <input type="text" className='w-auto min-w-[70%] bg-gray-100 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                        <div className='w-full flex justify-between items-center py-2 my-2'>
                            <label className='text-2xl' htmlFor="name">Bank Address :</label>
                            <input type="text" className='w-auto min-w-[70%] bg-gray-100 bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                        <div className='w-full flex justify-end gap-[20px] items-center py-2 my-2'>
                            <div className='w-max flex flex-row items-center px-4 py-2 rounded-xl gap-[10px] bg-blue-400 text-xl'><span><FaPlus /></span>Create</div>
                            <Link to="/Dashboard"><div className='w-max flex flex-row items-center px-4 py-2 rounded-xl gap-[10px] bg-blue-400 text-xl'>Go to Dashboard</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Employee
