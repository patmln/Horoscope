import { rest } from "msw";
import { setupServer } from "msw/node";
import Aztro from "./App.js";
import { chooseSign } from "./App.js";
import {render, screen} from '@testing-library/react'

const server = setupServer(
  rest.get("https://aztro.sameerkumar.website", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ description: "lucky day today"}));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("get data", async () => {
  const horoscope = await chooseSign;
  expect(horoscope).toEqual({ description: "lucky day today"})
  //expect(await screen.findByText("lucky day today")).toBeInTheDocument()
})

