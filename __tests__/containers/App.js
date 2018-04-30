import React from "react";
import { App } from "../../src/containers/App";
import { shallow } from "enzyme";
import AddTodo from "../../src/containers/AddTodo";
import VisibleTodoList from "../../src/containers/VisibleTodoList";

describe("App Component", () => {
    test("Should render with containers", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find("h1").text()).toEqual("My todo app");
        expect(wrapper.contains(<AddTodo/>)).toBe(true);
        expect(wrapper.contains(<VisibleTodoList/>)).toBe(true);
    });
});