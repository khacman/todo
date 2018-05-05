import reducer, { FETCHING, getUser, SET_USER } from "../../src/flux/user";

describe("user store", () => {
    beforeAll(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            return new Promise(resolve => {
                resolve({
                    json: () => ({
                        id: 1,
                        name: "Man",
                        language: "JS"
                    })
                });
            });
        });
    });
    test("Should handle actions", () => {
        const cases = [
            {
                input: {
                    state: {
                        isLoading: false
                    },
                    action: {
                        type: FETCHING
                    }
                },
                expected: {
                    isLoading: true
                }
            },
            {
                input: {
                    state: {
                        isLoading: false
                    },
                    action: {
                        type: SET_USER,
                        data: { name: "Hello World" }
                    }
                },
                expected: {
                    isLoading: false,
                    userData: { name: "Hello World" }
                }
            },
            {
                input: {
                    state: {
                        isLoading: false
                    },
                    action: {
                        type: "Blabla"
                    }
                },
                expected: {
                    isLoading: false
                }
            }
        ];

        cases.forEach(c => {
            expect(reducer(c.input.state, c.input.action)).toEqual(c.expected);
        });

        expect(reducer(undefined, {})).toEqual({
            isLoading: false,
            userData: {}
        });
    });

    test("Should create action", async () => {
        const action = getUser();
        expect(action).toBeInstanceOf(Function);
        const dispatch = jest.fn();
        await action(dispatch);
        expect(dispatch).toHaveBeenCalledWith({ type: FETCHING });
        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/users/1");
        expect(dispatch).toHaveBeenCalledWith({
            type: SET_USER,
            data: {
                id: 1,
                name: "Man",
                language: "JS"
            }
        });
    });
});
