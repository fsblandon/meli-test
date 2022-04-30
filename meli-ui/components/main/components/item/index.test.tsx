/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "./index";
import data from "../../../../test/mock-data.json";

describe("Item", () => {
  let component;
  beforeEach(() => {
    const { items } = data;
    component = render(<Item item={items[0]} />);
  });

  it("Should be Product name", () => {
    expect(screen.getByText("Buzo Undefined Ccm 1/3 Belen Edition")).toBeInTheDocument();
  });

  it("Should be Product price", () => {
    expect(screen.getByText("35.000")).toBeInTheDocument();
  });

});