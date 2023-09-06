import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h2 className="text-5xl font-semibold">My Story</h2>
    </div>
  );
}
