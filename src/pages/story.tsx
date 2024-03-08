import { NextPageContext } from "next";
// import { StoryCard } from "@/components/storiesCard/StoryCard";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { deleteStory } from "@/services/storiesApi";
// import { Story } from "@/pages/stories";
// import { AddTitle } from "@/components/AddTitle";
// import Link from "next/link";
// import { get } from "http";
import cookie from "cookie";
import axios from "axios";
import OneStorieContainer from "../components/OneStorieContainer";

export default OneStorieContainer;

export const getServerSideProps = async (context: NextPageContext) => {
  const cookies = cookie.parse(context.req?.headers.cookie || "");
  const token = cookies["Auth-Token"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  try {
    const response = await axios.get("http://localhost:5000/story", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Getting ONE sTORY", response.data);
    return { props: { story: response.data } };
  } catch (error) {
    console.error("Failed to fetch stories:", error);
    return { notFound: true };
  }
};
