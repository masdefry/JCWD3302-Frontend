import Link from 'next/link';
import { CgMenuMotion } from 'react-icons/cg';

export default function Page() {
  return (
    <>
      <h1 className='font-display bg-primary text-[100px] text-secondary border border-green-300'>
        Whereas gags
      </h1>

      {/* FLEX */}
      <div className='flex justify-center items-center bg-gray-100'>
        <div className='bg-purple-400 text-white w-[300px] h-[300px]'>01</div>
        <div className='bg-red-400 text-white w-[300px] h-[300px]'>02</div>
      </div>

      {/* GRID */}
      <div className='grid grid-cols-[1fr_50%_1fr] grid-rows-3 bg-gray-100'>
        <div className='bg-purple-400 text-white'>01</div>
        <div className='bg-red-400 text-white'>02</div>
        <div className='bg-purple-400 text-white'>03</div>
      </div>

      {/* MEDIA QUERY */}
      <h1 className='text-green-500 md:text-red-500 lg:text-blue-500'>
        Web Development
      </h1>

      <Link
        href='/register/user'
        className='flex items-center'
      >
        <CgMenuMotion className='text-3xl text-blue-500' /> Goto Register Page
      </Link>
    </>
  );
}

// Code Splitting
// > Login -> Login.js -> Ringan diawal
// > Register -> Register.js -> Request

// React -> Semua di load awal -> Berat diawal -> Ringan
