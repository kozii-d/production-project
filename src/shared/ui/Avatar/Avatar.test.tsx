import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  test("Test render with image", () => {
    render(<Avatar src="path/to/image.jpg" alt="Avatar" />);
    const avatarImage = screen.getByAltText("Avatar");
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", "path/to/image.jpg");
  });

  test("Test custom className", () => {
    render(<Avatar src="path/to/image.jpg" alt="Avatar" className="custom-avatar" />);
    const avatarImage = screen.getByAltText("Avatar");
    expect(avatarImage).toHaveClass("custom-avatar");
  });

  test("Test custom size", () => {
    render(<Avatar src="path/to/image.jpg" alt="Avatar" size={150} />);
    const avatarImage = screen.getByAltText("Avatar");
    expect(avatarImage).toHaveStyle({ width: "150px", height: "150px" });
  });
});
