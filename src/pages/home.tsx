import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <main className="container mx-auto py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Hi, This is home page!</h1>
        
        <div className="flex justify-center space-x-4">
          <Link href="/about">
            About
          </Link>

          <Link href="/blog">
            Blog
          </Link>

          <Link href="/docs">
            Docs
          </Link>

          <Link href="/profile">
            Profile
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
