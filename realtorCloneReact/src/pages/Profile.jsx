import React from 'react'
import { useState } from 'react';

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "sidhant",
    email: "sidhant@gmail.com",
  });
  const { name, email } = formData;

  return (
    <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>

          <input type="text" id="name" value={name} disabled className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" />

          <input type="email" id="email" value={email} disabled className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" />
          <div className='flex justify-between'>
            <p className='flex items-center'>
              Do you want to change your name?
              <span></span>
            </p>
            <p className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>
              Sign out
            </p>
          </div>
        </form>
        <button type='submit'
          className='w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out  hover:shadow-lg active:bg-blue-800'>
          Sell or rent your home
        </button>
      </div>
    </section>
    </>
  )
}
