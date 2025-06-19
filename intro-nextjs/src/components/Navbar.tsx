import { CiMenuFries } from 'react-icons/ci';
export default function Navbar() {
  return (
    <nav className='flex items-center gap-3 px-10 py-0 p-0 h-[50px]'>
      <h1>Logo</h1>
      <p>Home</p>
      <p>About</p>
      <CiMenuFries className='ml-auto' />
    </nav>
  );
}
