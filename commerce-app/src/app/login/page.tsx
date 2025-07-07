'use client';
import { loginSchema } from '@/features/login/schemas/loginSchema';
import { IUsersAccount } from '@/features/types';
import { axiosInstance } from '@/utils/axiosInstance';
import { AxiosError } from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useAuthStore from '@/store/useAuthStore';

export default function Page() {
  const [isAuthLoginProccess, setIsAuthLoginProcess] = useState<boolean>(false);
  const {setAuthStore} = useAuthStore();
  const onAuthLogin = async ({
    email,
    password,
  }: Pick<IUsersAccount, 'email' | 'password'>) => {
    try {
      setIsAuthLoginProcess(true);
      const response = await axiosInstance.post('api/auth/login', {
        email,
        password,
      });
   
      setAuthStore({objectId: response?.data?.user[0]?.objectId, email: response?.data?.user[0]?.email});
      toast.success(response?.data?.message);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err?.response?.data?.message);
    } finally {
      setIsAuthLoginProcess(false);
    }
  };

  return (
    <>
      <div className='grid grid-cols-2 bg-gray-100 min-h-screen'>
        <div className='col-span-1 mx-auto my-auto w-1/2'>
          <h1 className='font-bold text-3xl py-3'>Sign in</h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              onAuthLogin({
                email: values?.email,
                password: values?.password,
              });
            }}
          >
            <Form>
              <fieldset className='fieldset w-full'>
                <legend className='fieldset-legend'>Email Address</legend>
                <Field
                  type='text'
                  name='email'
                  className='input w-full'
                  placeholder='Type here'
                />
                <ErrorMessage
                  name='email'
                  component={'p'}
                  className='label text-red-400'
                />
              </fieldset>
              <fieldset className='fieldset w-full'>
                <legend className='fieldset-legend'>Password</legend>
                <Field
                  type='password'
                  name='password'
                  className='input w-full'
                  placeholder='Type here'
                />
                <ErrorMessage
                  name='password'
                  component={'p'}
                  className='label text-red-400'
                />
              </fieldset>
              <button
                disabled={isAuthLoginProccess}
                className='btn bg-black text-white w-full mt-3'
              >
                {isAuthLoginProccess ? 'Please wait...' : 'Sign in'}
              </button>
            </Form>
          </Formik>
          <div className='mt-3 flex gap-1'>
            <p className='text-gray-300'>Dont have account?</p> Sign up
          </div>
        </div>
        <div className='col-span-1 mx-auto my-auto w-1/2 h-1/2 bg-green-300 rounded-md'>
          <img src='banner-cart.png' />
        </div>
      </div>
    </>
  );
}
