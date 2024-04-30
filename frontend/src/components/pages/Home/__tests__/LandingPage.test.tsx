import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../LandingPage";

describe("LandingPage", () => {
  it("should render a landing page with an image that has an alt description", () => {
    render(<LandingPage />);

    const mainImage = screen.getByAltText("Family reading a book");

    expect(mainImage).toBeInTheDocument();
  });

  it("should render a button with the text 'Sign in'", () => {
    render(<LandingPage />);
    const loginButton = screen.getByRole("link", { name: "Sign in" });
    expect(loginButton).toBeVisible();
  });

  it("should render a button with the text 'Sign Up'", () => {
    render(<LandingPage />);
    const registerButton = screen.getByRole("link", { name: "Sign up" });
    expect(registerButton).toBeVisible();
  });
});
