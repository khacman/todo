import React from "react";
import sinon from "sinon";
import { shallow } from "enzyme";
import { mapStateToProps, User } from "../../src/containers/User";

describe("User Container", () => {
    test("User render", () => {
        const props = {
            dispatch: jest.fn(),
            user: {
                isLoading: false,
                userData: {}
            }
        };
        const wrapper = shallow(<User {...props} />);
        const getUserBtn = wrapper.find("#get-user");
        getUserBtn.simulate("click");
        expect(props.dispatch).toHaveBeenCalledTimes(1);
    });

    test("mapStateToProps", () => {
        expect(mapStateToProps({ user: "user", isLoading: false })).toEqual({
            user: "user"
        });
    });
});
