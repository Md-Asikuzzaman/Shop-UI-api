import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdEmail, MdPerson, MdPhone } from 'react-icons/md';

interface Props {}

const Register: NextPage<Props> = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className='min-h-screen bg-gray-300 flex items-center justify-center px-3'>
      <form className='bg-white max-w-md w-full p-10 rounded-xl'>
        <h3 className='text-2xl font-semibold text-rose-500 mb-8'>
          Create Account
        </h3>
        <div className='relative'>
          <label className='absolute -top-2 left-5 bg-white px-1 text-sm text-gray-500'>
            Full Name
          </label>
          <input
            className='w-full border-2 border-gray-200 outline-none pt-3 pl-4 pb-2 pr-12 rounded-full text-rose-500 focus:border-gray-400'
            type='text'
          />

          <div className='absolute right-2 top-0 bottom-0 m-auto bg-rose-100 h-8 w-8 rounded-full flex items-center justify-center'>
            <MdPerson className='text-rose-500' />
          </div>
        </div>

        <div className='relative mt-5'>
          <label className='absolute -top-2 left-5 bg-white px-1 text-sm text-gray-500'>
            Email Address
          </label>
          <input
            className='w-full border-2 border-gray-200 outline-none pt-3 pl-4 pb-2 pr-12 rounded-full text-rose-500 focus:border-gray-400'
            type='text'
          />

          <div className='absolute right-2 top-0 bottom-0 m-auto bg-rose-100 h-8 w-8 rounded-full flex items-center justify-center'>
            <MdEmail className='text-rose-500' />
          </div>
        </div>

        <div className='relative mt-5'>
          <label className='absolute -top-2 left-5 bg-white px-1 text-sm text-gray-500'>
            Phone Number
          </label>
          <input
            className='w-full border-2 border-gray-200 outline-none pt-3 pl-4 pb-2 pr-12 rounded-full text-rose-500 focus:border-gray-400'
            type='number'
          />

          <div className='absolute right-2 top-0 bottom-0 m-auto bg-rose-100 h-8 w-8 rounded-full flex items-center justify-center'>
            <MdPhone className='text-rose-500' />
          </div>
        </div>

        <div className='relative mt-5'>
          <label className='absolute -top-2 left-5 bg-white px-1 text-sm text-gray-500'>
            Password
          </label>
          <input
            className='w-full border-2 border-gray-200 outline-none pt-3 pl-4 pb-2 pr-12 rounded-full text-rose-500 focus:border-gray-400'
            type={showPassword ? 'text' : 'password'}
          />

          <div
            onClick={handleShowPassword}
            className='absolute right-2 top-0 bottom-0 m-auto bg-rose-100 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer'
          >
            {showPassword ? (
              <FaEye className='text-rose-500' />
            ) : (
              <FaEyeSlash className='text-rose-500' />
            )}
          </div>
        </div>

        <div className='relative mt-5'>
          <label className='absolute -top-2 left-5 bg-white px-1 text-sm text-gray-500'>
            Confirm Password
          </label>
          <input
            className='w-full border-2 border-gray-200 outline-none pt-3 pl-4 pb-2 pr-12 rounded-full text-rose-500 focus:border-gray-400'
            type={showConfirmPassword ? 'text' : 'password'}
          />

          <div
            onClick={handleShowConfirmPassword}
            className='absolute right-2 top-0 bottom-0 m-auto bg-rose-100 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer'
          >
            {showConfirmPassword ? (
              <FaEye className='text-rose-500' />
            ) : (
              <FaEyeSlash className='text-rose-500' />
            )}
          </div>
        </div>

        {/* forgot password section */}
        <div className='flex items-center justify-between py-5'>
          <div className='flex items-center gap-1'>
            <input type='checkbox' id='term' />
            <label
              className='text-sm text-gray-600 cursor-pointer'
              htmlFor='term'
            >
              Agree with
              <Link
                className='font-semibold hover:underline underline-offset-2 ml-1'
                href='/terms'
              >
                Terms and Conditions
              </Link>
            </label>
          </div>
        </div>
        {/* login button */}
        <button
          className='bg-rose-400 w-full rounded-full py-2 text-white hover:bg-rose-500 duration-300'
          type='submit'
        >
          Login Account
        </button>

        <p className='text-sm text-gray-600 text-center mt-8'>
          Already have an account?
          <Link
            className='font-semibold hover:underline underline-offset-2 ml-1'
            href='/account/login'
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
