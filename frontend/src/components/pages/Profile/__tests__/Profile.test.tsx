import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProfilePageProps } from "../Profile";
import Profile from "../Profile";

const userData = {
  userId: "111111111111",
  name: "Doe",
  mail: "toto@gmail.com",
};
describe("Profile", () => {
  const props: ProfilePageProps = {
    ...userData,
  };
  it("should render the user's name and email", () => {
    render(<Profile profile={props} />);
    const name = screen.getByText("Doe");

    expect(name).toBeVisible();
  });

  it("should render the user's email", () => {
    const userData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    };

    render(<Profile profile={props} />);
    const email = screen.getByText("toto@gmail.com");

    expect(email).toBeVisible();
  });
});
