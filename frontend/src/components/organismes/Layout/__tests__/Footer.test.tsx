import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "../Footer";

describe("Footer", () => {
  it("should render a button with the text 'About'", () => {
    render(<Footer />);
    const aboutButton = screen.getByText("About Story.com");
    expect(aboutButton).toBeVisible();
  });

  it("should render a button with the text 'Contact' ", () => {
    render(<Footer />);
    const contactButton = screen.getByText("Contact");
    expect(contactButton).toBeVisible();
  });
});
