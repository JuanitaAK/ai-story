import { render, screen } from "@testing-library/react";
import StoriesContainer from "../StoriesContainer";
import "@testing-library/jest-dom";

describe("StoriesContainer", () => {
  it("renders NoStoryCard if stories array is empty", () => {
    render(<StoriesContainer stories={[]} />);
    expect(screen.getByText(/no stories/i)).toBeInTheDocument();
  });
});
