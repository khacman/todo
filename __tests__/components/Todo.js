import React from "react";
import { shallow } from "enzyme";
import { Todo } from "../../src/components/Todo";

describe("Todo", () => {
    const toggleTodo = jest.fn();
    it("Should render active", () => {
        const todo = {
            id: 2,
            content: "Hello World",
            active: true
        };
        const wrapper = shallow(<Todo todo={todo} onClick={toggleTodo} />);
        expect(wrapper.text()).toContain(todo.content);
        expect(wrapper.props().style.textDecoration).toBe("none");

        wrapper.simulate("click");
        expect(toggleTodo).toHaveBeenCalledTimes(1);
        expect(toggleTodo).toHaveBeenCalledWith(2);
    });

    it("Should render completed", () => {
        const todo = {
            id: 2,
            content: "Hello World",
            active: false
        };
        const wrapper = shallow(<Todo todo={todo} onClick={toggleTodo} />);
        expect(wrapper.text()).toContain(todo.content);
        expect(wrapper.props().style.textDecoration).toBe("line-through");
    });
});
