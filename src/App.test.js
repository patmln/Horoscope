import Aztro from "./App.js";
import { render, screen, fireEvent } from "@testing-library/react";
import { post } from "./utils/api";
import { mockData } from "./utils/mockData";
jest.mock("./utils/api");

test("When Aries is click it should show Horoscope details", async () => {
  post.mockImplementation(() => {
    return mockData;
  });
  render(<Aztro />);
  const ariesButtonElement = await screen.findByText(/Aries/i);
  expect(ariesButtonElement).toBeInTheDocument();

  // button element of Aries
  fireEvent.click(ariesButtonElement);
  const moodTextElement = await screen.findByText(/Relaxed/i);
  expect(moodTextElement).toBeInTheDocument();
});

// TODO
//
// When API sends errors, error details will show
// When Gemini is click, it should show Horoscope details
