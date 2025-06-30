import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Page() {
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
            validationSchema={}
            onSubmit={}
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
                  type='text'
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
              <button className='btn bg-black text-white w-full mt-3'>
                Sign in
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
