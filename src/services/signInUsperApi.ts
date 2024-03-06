import { LoginForm } from "./../components/LoginForm";

export const connectUser = async (user: LoginForm) => {
  const response = await fetch(
    process.env.SIGNIN_USER || "http://localhost:5000/auth/login", // "http://localhost:5000/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create user... 😬 please try again later");
  }

  return response.json();
};
