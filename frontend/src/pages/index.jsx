import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fitndur | find gyms, clubs, fitness centers near you.</title>
        <meta
          name="description"
          content="Wherever you go, use Fitndur to locate nearby gyms,fitness clubs and pay only for the days you really use them."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>Home</main>
    </>
  );
}
