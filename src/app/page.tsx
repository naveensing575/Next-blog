import Link from "next/link";
import Router from "next/router";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Next js</h2>
      <button onClick={() => Router.push("/")}>Go to home</button>
    </main>
  );
}
