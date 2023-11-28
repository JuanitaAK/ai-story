import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Home = (): any => {
  return (
    <div>
      <h2 className="text-5xl font-semibold text-title">My Stories</h2>
    </div>
  );
};

export default Home;
