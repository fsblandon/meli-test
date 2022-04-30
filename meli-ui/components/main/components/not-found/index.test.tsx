import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./index";

describe("404 Page", () => {
    let component;
    const text = "No existe lo que estas buscando";
    beforeEach(() => {
        component = render(<NotFound />);
    });

    it("should display the text in the document ", () => {
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});