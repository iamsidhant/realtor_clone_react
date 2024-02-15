import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [email, password] = formData;

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center mx-auto'>
        <div>
          <img src="" alt="" className=''/>
        </div>
        <div>
          <form/>
          <input 
          type="email" 
          id='email' 
          value={email} 
          onChange={onChange} 
          placeholder='Email address'
          />
          <div>
            <input 
            type="password" 
            id='password' 
            value={password} 
            onChange={onChange} 
            placeholder='Email address'
            />
            Show Password
          </div>
          <div>
            <p>
              Don't have a account?
              <Link>
              Register
              </Link>
            </p>
            <p><Link>Forget Password?</Link></p>
          </div>
          <button>Sign in</button>
          <div>
            <p>OR</p>
          </div>
        </div>
      </div>
    </section>
  )
}
