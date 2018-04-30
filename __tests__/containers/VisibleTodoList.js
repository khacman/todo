import {
    getTodoListFrom,
    mapStateToProps
} from "../../src/containers/VisibleTodoList";

describe("VisibleTodoListContainer", () => {
    const cases = [
        {
            state: {
                filter: "",
                todos: {
                    1: {
                        id: 1,
                        content: "todo 1",
                        active: true
                    },
                    2: {
                        id: 2,
                        content: "todo 2",
                        active: false
                    }
                }
            },
            expected: [
                {
                    id: 1,
                    content: "todo 1",
                    active: true
                },
                {
                    id: 2,
                    content: "todo 2",
                    active: false
                }
            ]
        },
        {
            state: {
                filter: "SHOW_ACTIVE",
                todos: {
                    1: {
                        id: 1,
                        content: "todo 1",
                        active: true
                    },
                    2: {
                        id: 2,
                        content: "todo 2",
                        active: false
                    }
                }
            },
            expected: [
                {
                    id: 1,
                    content: "todo 1",
                    active: true
                }
            ]
        },
        {
            state: {
                filter: "SHOW_COMPLETED",
                todos: {
                    1: {
                        id: 1,
                        content: "todo 1",
                        active: true
                    },
                    2: {
                        id: 2,
                        content: "todo 2",
                        active: false
                    }
                }
            },
            expected: [
                {
                    id: 2,
                    content: "todo 2",
                    active: false
                }
            ]
        }
    ];

    test("getTodolListFrom", () => {
        cases.forEach(c => {
            expect(getTodoListFrom(c.state)).toEqual(c.expected);
        });
    });

    test("mapStateToProps", () => {
        cases.forEach(c => {
            expect(mapStateToProps(c.state)).toEqual({
                todos: c.expected
            });
        });
    });
});
