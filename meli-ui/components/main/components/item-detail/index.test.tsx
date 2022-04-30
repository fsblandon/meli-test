/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import data from "../../../../test/mock-data-detail.json";
import ItemDetail from "./index";

describe("Item Detail Page", () => {
  let component;
  beforeEach(() => {
    const { item } = data;
    component = render(<ItemDetail data={ item }/>);
  });

  it("Should exist a nav document", () => {
    const Nav = screen.getByRole("navigation");

    expect(Nav).toBeInTheDocument();
  });

  it("Should be product name", () => {
    expect(screen.getByText("Buzo Undefined Nfs Rmx Talle S.")).toBeInTheDocument();
  });

  it("Should be product description in article", () => {
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("Should be the product price", () => {
    expect(screen.getByText("10.000")).toBeInTheDocument();
  });

});