import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../LandingPage";

describe("LandingPage", () => {
  it("should render a landing page with an image that has an alt description", () => {
    render(<LandingPage />);

    const mainImage = screen.getByAltText("Family reading a book");

    expect(mainImage).toBeInTheDocument();
  });
});
