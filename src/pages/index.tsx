import React from 'react';

const Home = ({users}: any) => {
  return (
    <main className="container mx-auto py-8">
      <h1>ACTIVE USERS</h1>
      {users.map( (user: any) => (
        <div key={user.id}>
          <h2>{user.firstname} {user.lastname}</h2>
          <p>{user.email}</p>
          <p>{user.birthDate}</p>
        </div>
      ))}
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.org/users')
  const data = await response.json()
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}