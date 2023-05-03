import { Inter } from "next/font/google";
import Overview from "../components/Overview/Overview";
import { Feature } from "../components/Features/Features";
import { Header } from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-[90vh]">
      <Header />
      <Overview />
      <Feature />
    </main>
  );
}
