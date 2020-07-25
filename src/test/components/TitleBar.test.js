import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TitleBar from "../../components/TitleBar";

describe("TitleBar", () => {
  test("renders Title bar", () => {
    render(<TitleBar />);

    screen.getByText("HACK NEWS.");
  });

  test("calls onClickHandler when clicked", async () => {
    const onClickHandler = jest.fn();
    render(<TitleBar onClickHandler={onClickHandler} />);

    userEvent.click(screen.getByTestId("logo"));

    await expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
