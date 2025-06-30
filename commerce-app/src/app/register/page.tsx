export default function Page() {
  return (
    <>
      <div className='grid grid-cols-2 bg-gray-100 min-h-screen'>
        <div className='col-span-1 mx-auto my-auto w-1/2'>
          <h1 className='font-bold text-3xl py-3'>Sign up</h1>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-legend'>Email Address</legend>
            <input
              type='text'
              className='input w-full'
              placeholder='Type here'
            />
            <p className='label text-red-400'>error message here</p>
          </fieldset>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-legend'>Password</legend>
            <input
              type='text'
              className='input w-full'
              placeholder='Type here'
            />
            <p className='label text-red-400'>error message here</p>
          </fieldset>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-legend'>Confirm Password</legend>
            <input
              type='text'
              className='input w-full'
              placeholder='Type here'
            />
            <p className='label text-red-400'>error message here</p>
          </fieldset>
          <button className='btn bg-black text-white w-full mt-3'>
            Sign up
          </button>
          <div className='mt-3 flex gap-1'>
            <p className='text-gray-300'>Already have account?</p> Sign in
          </div>
        </div>
        <div className='col-span-1 mx-auto my-auto w-1/2 h-1/2 bg-green-300 rounded-md'>
          <img src='sign-up-vector.svg' />
        </div>
      </div>
    </>
  );
}
