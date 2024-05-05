import { NextPageContext } from "next";
import cookie from "cookie";
import axios from "axios";
import StoriesContainer from "@/components/pages/Stories/StoriesContainer";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL as string;
const STORIES_API_URL = (BACKEND_BASE_URL + process.env.STORIES_API) as string;

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
    const response = await axios.get(STORIES_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 404) {
      return {
        redirect: {
          destination: "/story",
          permanent: false,
        },
      };
    }
    return { props: { stories: response.data } };
  } catch (error) {
    console.error("Failed to fetch stories:", error);
    return { notFound: true };
  }
};

export default StoriesContainer;
