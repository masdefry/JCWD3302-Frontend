'use client';
import { HiOutlineMail } from 'react-icons/hi';
import { TbLockPassword } from 'react-icons/tb';
import { FaRegUserCircle } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from '@/features/register/schemas/registerSchema';
import axios from 'axios';
import { IUsersAccount } from '@/features/register/types';

export default function Page() {
  const onRegisterAccount = async ({
    email,
    username,
    password,
    role,
  }: IUsersAccount) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/register',
        { email, username, password, role }
      );
      alert(response?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='flex flex-col items-center py-10'>
      <div className='w-96 flex flex-col items-center gap-3'>
        <h1 className='text-2xl font-bold text-blue-900'>
          Register User Account
        </h1>
        <Formik
          initialValues={{
            email: '',
            username: '',
            password: '',
            role: '',
          }}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            onRegisterAccount({
              email: values.email,
              username: values.username,
              password: values.password,
              role: values.role,
            });
          }}
        >
          <Form className='w-full flex flex-col gap-3'>
            <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
              <HiOutlineMail />
              <Field
                type='text'
                name='email'
                className='grow'
                placeholder='name@email.com'
              />
            </label>
            <ErrorMessage
              name='email'
              component={'div'}
              className='text-red-500 text-sm'
            />

            <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
              <TbLockPassword />
              <Field
                type='password'
                name='password'
                className='grow'
                placeholder='******'
              />
            </label>
            <ErrorMessage name='password' />

            <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
              <FaRegUserCircle />
              <Field
                type='text'
                name='username'
                className='grow'
                placeholder='name'
              />
            </label>
            <ErrorMessage name='username' />

            <Field
              as='select'
              name='role'
              className='select select-bordered rounded-full w-full text-gray-300'
            >
              <option
                value=''
                disabled
              >
                User Role
              </option>
              <option>USER</option>
              <option>ADMIN</option>
            </Field>
            <ErrorMessage name='role' />

            <button
              type='submit'
              className='btn bg-blue-400 hover:bg-blue-600 text-white rounded-full w-full'
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
