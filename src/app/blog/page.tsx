"use client";

import React, { useState } from 'react';
import ErrorBoundaries from './error';

export default function Blog() {
  const [error, setError] = useState(false);

  // Simulating an error condition
  const simulateError = () => {
    setError(true);
  };

  return (
    <div>
      {error ? (
        <ErrorBoundaries/>
      ) : (
        <div>
          <h2>Welcome to our blog</h2>
          <button onClick={simulateError} className='bg-red-500 text-white rounded-md p-2 mt-3 hover:bg-red-600'>Simulate Error</button>
        </div>
      )}
    </div>
  );
}
