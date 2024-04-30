import { render, screen } from "@testing-library/react";
import { NoStoryCard } from "../NoStoryCard";
import "@testing-library/jest-dom";

describe("NoStoryCard", () => {
  it("renders the correct text", () => {
    render(<NoStoryCard />);
    const text = screen.getByText(/You have no stories at the moment 🙈/i);

    expect(text).toBeVisible();
  });

  it("renders the New Story button", () => {
    render(<NoStoryCard />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/form");
  });
});
