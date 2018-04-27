import React from "react";
import { shallow } from "enzyme";
import { Todo } from "../../src/components/Todo";

describe("Todo", () => {
    const todo = {
        id: 1,
        content: "Hello World",
        active: true
    };
    it("Should render", () => {
        const wrapper = shallow(<Todo todo={todo}/>);
        expect(wrapper.text()).toContain(todo.content);
    });
});