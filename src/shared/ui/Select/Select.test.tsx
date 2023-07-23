import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Select, SelectOption } from "./Select";

describe("Select", () => {
  const options: SelectOption[] = [
    { value: "option1", content: "Option 1" },
    { value: "option2", content: "Option 2" },
    { value: "option3", content: "Option 3" },
  ];

  test("Test render with label and options", () => {
    render(<Select label="Select" options={options} />);
    const selectElement = screen.getByTestId("select");
    const selectLabelElement = screen.getByTestId("select-label");

    expect(selectElement).toBeInTheDocument();
    expect(selectLabelElement).toBeInTheDocument();
    expect(selectLabelElement).toHaveTextContent("Select");

    options.forEach((option) => {
      const optionElement = screen.getByText(option.content);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute("value", option.value);
    });
  });

  test("Test render with custom className", () => {
    render(<Select label="Select" options={options} className="custom-select" />);
    const selectWrapper = screen.getByTestId("select-wrapper");
    expect(selectWrapper).toHaveClass("custom-select");
  });

  test("Test render with default value", () => {
    render(<Select label="Select" options={options} value="option2" />);
    const selectElement = screen.getByTestId("select");
    expect(selectElement).toHaveValue("option2");
  });

  test("Test render without label", () => {
    render(<Select options={options} />);
    const selectElement = screen.getByTestId("select");
    expect(selectElement).toBeInTheDocument();
  });

  test("Test onChange event", () => {
    const handleChange = jest.fn();
    render(<Select label="Select" options={options} onChange={handleChange} />);
    const selectElement = screen.getByTestId("select");
    userEvent.selectOptions(selectElement, "option2");
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("option2");
  });
});
