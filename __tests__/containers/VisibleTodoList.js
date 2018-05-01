import {
    getTodoListFrom,
    mapDispatchToProps,
    mapStateToProps
} from "../../src/containers/VisibleTodoList";
import { toggleTodo } from "../../src/flux/todos";

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

    test("mapDispatchToProps", () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        const id = 24;
        props.toggleTodo(id);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(toggleTodo(id));
    });
});
