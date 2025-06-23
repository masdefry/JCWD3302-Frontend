'use client';
import { CiMenuFries } from 'react-icons/ci';
import { globalStore } from '@/zustand/global.store';
export default function Navbar() {
  const counter = globalStore((state: any) => state.counter);
  return (
    <nav className='flex items-center gap-3 px-10 py-0 p-0 h-[50px]'>
      <h1>Logo</h1>
      <p>Home</p>
      <p>About</p>
      <CiMenuFries className='ml-auto' />
      <h1>{counter}</h1>
    </nav>
  );
}
