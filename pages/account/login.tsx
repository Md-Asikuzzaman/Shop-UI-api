import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useFormik, FormikProps } from 'formik';
import { loginValidation } from '@/lib/loginValidation';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface Props {}

const Login: NextPage<Props> = ({}) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // FORM VALIDATION
  interface DataType {
    email: string;
    password: string;
  }

  const formik: FormikProps<DataType> = useFormik<DataType>({
    initialValues: {
      email: '',
      password: '',
    },

    validate: loginValidation,

    onSubmit: async (values) => {
      const status = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: '/',
      });

      if (status?.ok) {
        toast.success('You are logged in!');
        router.push('/');
      }

      if (!status?.ok) {
        toast.error(status?.error);
      }

      formik.resetForm();
    },
  });

  return (
    <div className='min-h-screen bg-gray-300 flex items-center justify-center px-3'>
      <form
        onSubmit={formik.handleSubmit}
        className='bg-white max-w-md w-full p-10 rounded-xl'
      >
        <h3 className='text-2xl font-semibold text-rose-500 mb-8'>
          Login Account
        </h3>
        <div className='relative'>
          <label className='absolute -top-2 left-5 bg-white px-1 text-sm text-gray-500'>
            Email Address
          </label>
          <input
            className='w-full border-2 border-gray-200 outline-none pt-3 pl-4 pb-2 pr-12 rounded-full text-rose-500 focus:border-gray-400'
            type='text'
            {...formik.getFieldProps('email')}
          />

          <div className='absolute right-2 top-0 bottom-0 m-auto bg-rose-100 h-8 w-8 rounded-full flex items-center justify-center'>
            <MdEmail className='text-rose-500' />
          </div>
        </div>
        <p className='text-xs mt-1 text-rose-500'>
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : null}
        </p>

        <div className='relative mt-5'>
          <label className='absolute -top-2 left-5 bg-white px-1 text-sm text-gray-500'>
            Password
          </label>
          <input
            className='w-full border-2 border-gray-200 outline-none pt-3 pl-4 pb-2 pr-12 rounded-full text-rose-500 focus:border-gray-400'
            type={showPassword ? 'text' : 'password'}
            {...formik.getFieldProps('password')}
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
        <p className='text-xs mt-1 text-rose-500'>
          {formik.errors.password && formik.touched.password
            ? formik.errors.password
            : null}
        </p>

        {/* forgot password section */}
        <div className='flex items-center justify-between py-5'>
          <div className='flex items-center gap-1'>
            <input type='checkbox' id='savePassword' />
            <label
              className='text-sm text-gray-600 cursor-pointer'
              htmlFor='savePassword'
            >
              Save Password
            </label>
          </div>
          <div>
            <Link className='text-sm text-gray-600' href='/forgot'>
              Forgot Password?
            </Link>
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
          Don't have an account?
          <Link
            className='font-semibold hover:underline underline-offset-2 ml-1'
            href='/account/register'
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
