import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./index";


describe("Search Component", () => {
    let component;
    beforeEach(() => {
        component = render(<SearchBar />);
    });

    it("renders the button", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it('renders the input', () => {
        const input = screen.getByRole('search')
        expect(input).toBeInTheDocument();
    })
});