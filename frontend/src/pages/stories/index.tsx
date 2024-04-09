import { NextPageContext } from "next";
import cookie from "cookie";
import axios from "axios";
import StoriesContainer from "@/components/pages/Stories/StoriesContainer";

export const getServerSideProps = async (context: NextPageContext) => {
  const cookies = cookie.parse(context.req?.headers.cookie || "");
  const token = cookies["Auth-Token"];

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  try {
    const response = await axios.get(process.env.STORIES as string, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { props: { stories: response.data } };
  } catch (error) {
    console.error("Failed to fetch stories:", error);
    return { props: { stories: [] } };
  }
};

export default StoriesContainer;
