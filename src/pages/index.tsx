import { NextPageContext } from "next";
import LandingPage from "@/components/LandingPage";
import cookie from "cookie";

export default LandingPage;

export const getServerSideProps = async (context: NextPageContext) => {
  const cookies = cookie.parse(context.req?.headers.cookie || "");
  const token = cookies["Auth-Token"];

  if (token) {
    return {
      redirect: {
        destination: "/stories",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
