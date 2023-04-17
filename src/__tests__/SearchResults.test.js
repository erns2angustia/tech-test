import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const validProps = [{ image: "image" }];
    const { asFragment } = render(<SearchResults results={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
