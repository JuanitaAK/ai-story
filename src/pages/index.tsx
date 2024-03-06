import { Inter } from "next/font/google";
// import StoriesContainer from "./../components/";

const inter = Inter({ subsets: ["latin"] });

export const Home = (): JSX.Element => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-nav-font mb-6">
        Welcome to MyStory
      </h2>
    </div>
  );
};

export default Home;
