import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  test("Renders placeholder text", () => {
    const placeholderText = "Enter text here";
    render(<Input placeholder={placeholderText} />);
    expect(screen.getByText(`${placeholderText}>`)).toBeInTheDocument();
  });

  test("Updates value on change", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);

    const input = screen.getByRole("textbox");
    const testValue = "Test value";

    userEvent.type(input, testValue);
    expect(onChange).toHaveBeenCalledWith(testValue);
    expect(input).toHaveValue(testValue);
  });

  test("Autofocus works correctly", () => {
    render(<Input placeholder="Enter text here" autoFocus />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveFocus();
  });
});
