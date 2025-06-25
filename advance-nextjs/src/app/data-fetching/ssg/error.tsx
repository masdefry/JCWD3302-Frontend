import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1 className='font-bold text-2xl'>Ops!</h1>
      <p>{error?.message}</p>
      <button onClick={reset}>Reset</button>
    </>
  );
}

// Error Boundary