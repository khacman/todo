import React from "react";
import { shallow } from "enzyme";
import { Todo } from "../../src/components/Todo";
import { TodoList } from "../../src/components/TodoList";

describe("TodoList", () => {
    const todos = [
        {
            id: 1,
            content: "Hello World",
            active: true
        },
        {
            id: 2,
            content: "Hello World again",
            active: false
        }
    ];
    it("Should render with Todo components", () => {
        const wrapper = shallow(<TodoList todos={todos} />);
        expect(wrapper.find(Todo)).toHaveLength(2);
    });

    it("Should render no Todo component", () => {
        const wrapper = shallow(<TodoList todos={[]} />);
        expect(wrapper.find(Todo)).toHaveLength(0);
    });
});
