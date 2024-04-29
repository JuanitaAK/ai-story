import { NextPageContext } from "next";
import jwt from "jsonwebtoken";
import cookie from "cookie";

import ProfilePage from "../components/pages/Profile/Profile";

export default ProfilePage;

export const getServerSideProps = async (context: NextPageContext) => {
  const cookies = cookie.parse(context.req?.headers.cookie || "");
  const token = cookies["Auth-Token"];
  const secret = process.env.JWT_SECRET as string;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  try {
    const decoded = jwt.verify(token, secret) as jwt.JwtPayload;

    return {
      props: { profile: decoded },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
