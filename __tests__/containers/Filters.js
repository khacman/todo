import React from "react";
import { shallow } from "enzyme";
import { Filter } from "../../src/containers/Filters";
import sinon from "sinon";
import { FILTER, SET_FILTER } from "../../src/flux/filter";

describe("Filters", () => {
    test("setFilter on button click", () => {
        const props = {
            dispatch: sinon.spy()
        };
        const wrapper = shallow(<Filter {...props} />);
        const showAllBtn = wrapper.find("#filter-show-all");

        showAllBtn.simulate("click", {
            target: {
                ...showAllBtn.props()
            }
        });
        expect(
            props.dispatch.calledWith({
                type: SET_FILTER,
                filter: FILTER.SHOW_ALL
            })
        ).toBe(true);

        const showActiveBtn = wrapper.find("#filter-show-active");
        showActiveBtn.simulate("click", {
            target: {
                ...showActiveBtn.props()
            }
        });
        expect(
            props.dispatch.calledWith({
                type: SET_FILTER,
                filter: FILTER.SHOW_ACTIVE
            })
        ).toBe(true);

        const showCompletedBtn = wrapper.find("#filter-show-completed");
        showCompletedBtn.simulate("click", {
            target: {
                ...showCompletedBtn.props()
            }
        });
        expect(
            props.dispatch.calledWith({
                type: SET_FILTER,
                filter: FILTER.SHOW_COMPLETED
            })
        ).toBe(true);
    });
});
