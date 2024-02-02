import StoryForm from "@/components/StoryForm";
import { Inter } from "next/font/google";
import StoriesContainer from "./stories";

const inter = Inter({ subsets: ["latin"] });

export const Home = (): JSX.Element => {
  return (
    <div>
      <StoriesContainer />
    </div>
  );
};

export default Home;
