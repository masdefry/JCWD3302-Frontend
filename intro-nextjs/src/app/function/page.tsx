'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Child from '@/features/function/components/Child';

export default function Page() {
  const [counter, setCounter] = useState<number>(0); // setCounter
  const [string, setString] = useState<string>('');
  const inputAny = useRef<HTMLInputElement>(null);
  const inputSecond = useRef<HTMLInputElement>(null);

  function increment() {
    setCounter(counter + 1);
  }

  function onChangeStrig() {
    setString('xxxxxxxxxxxxxxxxxxx');
  }

  function onSubmit() {
    console.log(inputAny?.current?.value);
    console.log(inputSecond?.current?.value);
  }

  useEffect(() => {
    // Fetching Data
    console.log('Component Did Mount');
  }, []);

  useEffect(() => {
    if (counter !== 0) {
      console.log('Component Did Update');
    }
  }, [counter]);

  useEffect(() => {
    console.log('>>>');
  }, [string]);

  useEffect(() => {
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);

  return (
    <div className='px-32'>
      <h1>Belajar React Hooks</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      {/* <h1>{string}</h1>
      <button
        onClick={onChangeStrig}
        className='bg-red-100'
      >
        Ubah String
      </button>
      <Link href={'/login'}>Goto Login</Link>
      <input
        ref={inputAny}
        type='text'
        placeholder='Input anything'
        className='border border-gray-300 rounded-md'
      />
      <input
        ref={inputSecond}
        type='text'
        placeholder='Input anything'
        className='border border-gray-300 rounded-md'
      />
      <button onClick={onSubmit}>Submit</button> */}

      <Child description={{title: 'abc'}} />
      <Child description={{title: 'abc'}} />
      <Child description={{title: 'abc'}} />
    </div>
  );
}

// useState
// useEffect
// useRef -> Mengambil value dalam input
// React.memo

// useMemo
// useCallback
