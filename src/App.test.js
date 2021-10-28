import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render App component without crashing", () => {
  const shallowWrapper = shallow(<App />);
  /* to check which element is render  
  console.log(shallowWrapper.debug()); 
  */
});

test("render App component without non empty node", () => {
  const shallowWrapper = shallow(<App />);
  expect(shallowWrapper.exists()).toBe(true);
});
