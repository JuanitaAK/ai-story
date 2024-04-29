import { NextPageContext } from "next";
import cookie from "cookie";
import axios from "axios";

import Profile from "../components/pages/Profile/Profile";

export default Profile;

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL as string;
const PROFILE_API_URL = (BACKEND_BASE_URL + process.env.PROFILE_API) as string;

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

    try {
      const response = await axios.get(PROFILE_API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 404) {
        return {
          redirect: {
            destination: "/form",
            permanent: false,
          },
        };
      }
      return { props: { story: response.data } };
    } catch (error) {
      console.error("Failed to fetch stories:", error);
      return { notFound: true };
    }
  }

  return { props: {} };
};
