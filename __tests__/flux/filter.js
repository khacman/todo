import reducer, { setFilter, SET_FILTER } from "../../src/flux/filter";

describe("Filter reducer", () => {
    test("Should handle actions", () => {
        const cases = [
            {
                input: {
                    state: "SHOW_ALL",
                    action: {
                        type: SET_FILTER,
                        filter: "SHOW_ACTIVE"
                    }
                },
                expected: "SHOW_ACTIVE"
            },
            {
                input: {
                    state: "SHOW_ALL",
                    action: {
                        type: "Incorrect type",
                        filter: "SHOW_ACTIVE"
                    }
                },
                expected: "SHOW_ALL"
            }
        ];
        cases.forEach(c => {
            expect(reducer(c.input.state, c.input.action)).toEqual(c.expected);
        });
    });
});

describe("Filter actions", () => {
    test("Should create setFilter action", () => {
        const cases = [
            {
                input: "SHOW_ALL",
                expected: {
                    type: SET_FILTER,
                    filter: "SHOW_ALL"
                }
            },
            {
                input: "SHOW_ACTIVE",
                expected: {
                    type: SET_FILTER,
                    filter: "SHOW_ACTIVE"
                }
            },
            {
                input: "SHOW_COMPLETED",
                expected: {
                    type: SET_FILTER,
                    filter: "SHOW_COMPLETED"
                }
            }
        ];

        cases.forEach(c => {
            expect(setFilter(c.input)).toEqual(c.expected);
        });

        expect(() => {
            setFilter("Incorrect filter");
        }).toThrowError(/^Unknown filter$/);
    });
});
