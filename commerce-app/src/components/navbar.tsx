'use client';
import { CgShoppingBag } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
import useAuthStore from '@/store/useAuthStore';
import Link from 'next/link';
export default function Navbar() {
  const { email } = useAuthStore();
  return (
    <>
      {/* Navbar */}
      <section className='fixed top-0 w-full'>
        {/* Section-Top */}
        <section className='flex bg-green-900 py-3 px-20'>
          <div className='flex items-center'>
            <h1 className='text-3xl text-yellow-500'>F</h1>
            <h1 className='text-3xl text-white ml-3'>FurniFles</h1>
          </div>
          <div className='ml-auto flex gap-3'>
            <CgShoppingBag className='p-2 text-3xl text-white bg-yellow-500 rounded-full' />
            {email ? (
              <p className='text-white'>{email}</p>
            ) : (
              <Link href='/login'>
                <FaRegUser className='p-2 text-3xl text-white bg-yellow-500 rounded-full' />
              </Link>
            )}
          </div>
        </section>
        {/* Section-Bottom */}
        <section className='flex justify-center gap-5 p-3 rounded-es-3xl rounded-ee-3xl bg-green-900 text-white shadow-2xl'>
          <p>Home</p>
          <p>Products</p>
          <p>Contact Us</p>
          <p>About Us</p>
        </section>
      </section>
      ;
    </>
  );
}
