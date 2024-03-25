import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProfilePageProps } from "../Profile";
import Profile from "../Profile";

describe("Profile", () => {
  it("should render the user's name and email", () => {
    const userData = {
      firstName: "John",
      lastName: "Doe",
      email: "toto@gmail.com",
    };
    const props: ProfilePageProps = {
      ...userData,
    };
    render(<Profile {...props} />);
    const name = screen.getByText("John Doe");

    expect(name).toBeVisible();
  });

  it("should render the user's email", () => {
    const userData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    };
    const props: ProfilePageProps = {
      ...userData,
    };
    render(<Profile {...props} />);
    const email = screen.getByText("john.doe@example.com");

    expect(email).toBeVisible();
  });
});
