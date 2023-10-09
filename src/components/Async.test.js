import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
import Async from "./Async";
describe("async tests", () => {
  test("renders post", async () => {
    render(<Async />);
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "1", title: "post" }],
    });
    const linkElement = await screen.findAllByRole("listitem");
    expect(linkElement).not.toHaveLength(0);
  });
});
