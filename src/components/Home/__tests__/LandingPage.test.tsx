import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../LandingPage";

describe("LandingPage", () => {
  it("should render a landing page with an image", () => {
    render(<LandingPage />);

    const mainImage = screen.getByAltText("Family reading a book");

    expect(mainImage).toBeInTheDocument();
  });

  it("should render a button with the text 'Login'", () => {
    render(<LandingPage />);
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeVisible();
  });

  it("should render a button with the text 'Register'", () => {
    render(<LandingPage />);
    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeVisible();
  });
});
