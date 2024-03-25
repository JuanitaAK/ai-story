import { render, screen } from "@testing-library/react";
import StoriesContainer from "../StoriesContainer";
import "@testing-library/jest-dom";

describe("StoriesContainer", () => {
  it("renders NoStoryCard if stories array is empty", () => {
    render(<StoriesContainer stories={[]} />);
    expect(screen.getByText(/no stories/i)).toBeInTheDocument();
  });

  it("renders StoryCard if stories array is not empty", () => {
    render(
      <StoriesContainer
        stories={[
          {
            id_story: "1",
            story: "This is a story",
            user_id: "1",
            created_at: "2021-09-01",
            title: "Story Title",
          },
        ]}
      />
    );
    const story = screen.getByText("This is a story");
    expect(story).toBeVisible();
  });

  it("should render noStoryCard if stories array is empty", () => {
    render(<StoriesContainer stories={[]} />);
    const heading = screen.getByRole("heading", {
      name: "You have no stories at the moment!",
    });
    expect(heading).toBeVisible();
  });
});
