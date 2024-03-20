import User from '@/components/user';
import React from 'react';

const Home = ({users}: any) => {
  return (
    <main className="container mx-auto py-8">
      <User users={users} />
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.org/users')
  const data = await response.json()
  return {
    props: {
      users: data,
    },
  };
}