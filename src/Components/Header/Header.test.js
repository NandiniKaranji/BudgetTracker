import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Header from "./Header";
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render Header component without crashing", () => {
  const shallowWrapper = shallow(<Header />);
  let headerComponent = shallowWrapper.find("[data-test='loading-header']");
  expect(headerComponent.length).toBe(1);
});

test("header component should have logo heading", () => {
  const headerLogoWrapper = shallow(<Header />);
  const headingComp = headerLogoWrapper.find(
    "[data-test='header_logo_heading']"
  );
  expect(headingComp.length).toBe(1);
});

test("header component sholud have source code button", () => {});

test("source code button should have clicked feature", () => {});
