import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full object-cover' src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'> </div>
                <div className='fixed w-full px-4 py-24 z-50'></div>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'></div>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold text-white'>Sign In</h1>
                    <form className='w-full flex-col py-4'>
                        <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                        <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                        <div className='flex justify-between items-center text-sm text-gray-600' >
                            <p className=' mr-2'><input type="checkbox" /> Remeber me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>New to MovieApp</span> {''} <Link to='/signup'>Sign Up </Link> </p>
                    </form>
                </div>

            </div>
        </>
    );
}

export default Login;
