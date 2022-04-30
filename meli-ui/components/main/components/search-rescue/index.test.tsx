import React from "react";
import { render, screen } from "@testing-library/react";
import SearchRescue from "./index";

describe("Search Rescue Page", () => {
    let component;
    const text = "No hay publicaciones que coincidan con tu búsqueda.";
    beforeEach(() => {
        component = render(<SearchRescue />);
    });

    it("should display 3 items", () => {
        const LisItems = screen.getAllByRole("listitem");

        expect(LisItems).toHaveLength(3);
    });

    it("should display the heading document ", () => {
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});