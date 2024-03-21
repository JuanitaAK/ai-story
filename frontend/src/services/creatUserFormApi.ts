import { SignUpFormData } from "@/components/organismes/SignUp";

export const createUser = async (user: SignUpFormData) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (response.status === 409) {
    throw new Error("User already exists 😓");
  }

  if (response.status === 500) {
    throw new Error("Failed to create user... 😬 please try again later");
  }

  return response.json();
};
