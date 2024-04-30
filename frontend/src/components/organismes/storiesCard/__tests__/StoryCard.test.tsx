import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StoryCard } from "../StoryCard";

const mockStory = {
  id_story: "1",
  title: "Test Story",
  story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

describe("StoryCard", () => {
  it("should render the story card with initial state", () => {
    render(<StoryCard {...mockStory} />);

    const title = screen.getByText("TEST STORY");
    const story = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    const showMoreButton = screen.getByText("Show More");

    expect(title).toBeVisible();
    expect(story).toBeVisible();
    expect(showMoreButton).toBeVisible();
  });

  it("should expand the story text when 'Show More' button is clicked", () => {
    render(<StoryCard {...mockStory} />);

    const story = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    const showMoreButton = screen.getByText("Show More");

    fireEvent.click(showMoreButton);

    expect(story).not.toHaveClass("line-clamp-4");
  });

  it("should collapse the story text when 'Show Less' button is clicked", () => {
    render(<StoryCard {...mockStory} />);

    const story = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    const showMoreButton = screen.getByText("Show More");

    fireEvent.click(showMoreButton);
    fireEvent.click(showMoreButton);

    expect(story).toHaveClass("line-clamp-4");
  });
});
