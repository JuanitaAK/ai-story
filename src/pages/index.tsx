import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/*<div className="flex flex-col items-center justify-center">*/}
        <h2 className={`mb-3 text-5xl font-semibold`}>My Story</h2>
      </div>
    </main>
  );
}
