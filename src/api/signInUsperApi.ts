import { SignInFormData } from "@/components/SignIn";

export const connectUser = async (user: SignInFormData) => {
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to create user... 😬 please try again later");
  }

  return response.json();
};
