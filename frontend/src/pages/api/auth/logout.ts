import { NextRequest, NextResponse } from "next/server";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL as string;
const SIGNOUT_API_URL = (BACKEND_BASE_URL + process.env.SIGNOUT_API) as string;

export async function POST(req: NextRequest) {
  const responseApi = await fetch(SIGNOUT_API_URL);
  const resApiJson = responseApi.json();

  const response = NextResponse.json(resApiJson);
  response.cookies.delete("accessToken");
  response.cookies.delete("refreshToken");
  return response;
}
