import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tittoh | Micro Frontends</title>
      </Head>

      <main className="w-full min-h-screen">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
