import React from "react";
import { mount } from "enzyme";
import {AddTodo} from "../../src/containers/AddTodo";
import sinon from "sinon";

function setup() {
    const props = {
        dispatch: sinon.spy()
    };
    const wrapper = mount(<AddTodo {...props} />);

    return {
        props,
        wrapper
    };
}

describe("AddTodo Container", () => {

    test("Should handle submit", () => {
        sinon.spy(AddTodo.prototype, "handleSubmit");
        const {props, wrapper} = setup();
        wrapper.setState({
            value: "Hello World"
        });
        wrapper.find("Form").props().onSubmit({preventDefault: sinon.spy()});
        expect(AddTodo.prototype.handleSubmit.calledOnce).toBe(true);
        expect(wrapper.state().value).toBe("");
        expect(props.dispatch.calledOnce).toBe(true);
    });

    test("Should handle changes", () => {
        const input = {
            value: "Hello world"
        };
        const { wrapper } = setup();
        wrapper.find("Input").props().onChange({target: input});
        expect(wrapper.state().value).toBe(input.value);
    });
});