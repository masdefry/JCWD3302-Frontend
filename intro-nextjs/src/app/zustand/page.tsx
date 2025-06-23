'use client';
import { globalStore } from '@/zustand/global.store';

export default function Page() {
  const counter = globalStore((state: any) => state.counter);
  const increment = globalStore((state: any) => state.increment);
  const decrement = globalStore((state: any) => state.decrement);
  return (
    <>
      <h1>Belajar Zustand</h1>
      <button onClick={decrement}>-</button>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
    </>
  );
}
