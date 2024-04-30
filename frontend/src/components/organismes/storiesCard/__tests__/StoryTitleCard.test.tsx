import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { StoryTitleCard } from "../StoryTitleCard";
import { deleteStory } from "@/services/storiesApi";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../../api/story", () => ({
  deleteStory: jest.fn(),
}));

describe("StoryTitleCard", () => {
  const mockRouter = {
    push: jest.fn(),
    reload: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const story = {
    id_story: "123",
    title: "Test Story",
    story: "Lorem ipsum dolor sit amet",
  };

  it("should render the story title and content", () => {
    render(<StoryTitleCard {...story} />);
    const title = screen.getByText("TEST STORY");
    const content = screen.getByText("Lorem ipsum dolor sit amet");

    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });

  it("should navigate to the story page when 'Open' button is clicked", () => {
    render(<StoryTitleCard {...story} />);
    const openButton = screen.getByText("Open");

    fireEvent.click(openButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/stories/123");
  });
});
