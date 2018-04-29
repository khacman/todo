import reducer, {
    addTodo,
    toggleTodo,
    ADD_TODO,
    TOGGLE_TODO
} from "../../src/flux/todos";

describe("Todo reducer", () => {
    test("Should handle actions", () => {
        const addTodoAction = {
            type: ADD_TODO,
            todo: {
                id: 1,
                content: "Hello World!",
                active: true
            }
        };
        const toggleTodoAction = {
            type: TOGGLE_TODO,
            id: 1
        };

        const cases = [
            {
                name: "Should set initial state",
                state: undefined,
                action: {},
                expected: {}
            },
            {
                name: "Should return default state for unknown actions",
                state: {
                    1: {
                        id: 1,
                        content: "Hello world!",
                        active: true
                    }
                },
                action: {
                    type: "WTH",
                    data: "WTF"
                },
                expected: {
                    1: {
                        id: 1,
                        content: "Hello world!",
                        active: true
                    }
                }
            },
            {
                name: "Should handle addTodo",
                state: undefined,
                action: addTodoAction,
                expected: {
                    [addTodoAction.todo.id]: {
                        ...addTodoAction.todo
                    }
                }
            },
            {
                name: "Should handle toggleTodo",
                state: {
                    1: {
                        id: 1,
                        content: "Hello world!",
                        active: true
                    },
                    2: {
                        id: 2,
                        content: "Hello world!",
                        active: true
                    }
                },
                action: toggleTodoAction,
                expected: {
                    1: {
                        id: 1,
                        content: "Hello world!",
                        active: false
                    },
                    2: {
                        id: 2,
                        content: "Hello world!",
                        active: true
                    }
                }
            },
            {
                name: "Should handle toggleTodo",
                state: {
                    1: {
                        id: 1,
                        content: "Hello world!",
                        active: false
                    }
                },
                action: toggleTodoAction,
                expected: {
                    1: {
                        id: 1,
                        content: "Hello world!",
                        active: true
                    }
                }
            }
        ];
        cases.forEach(c => {
            expect(reducer(c.state, c.action)).toEqual(c.expected);
        });
    });
});

describe("Todo actions", () => {
    test("Should create addTodo action", () => {
        const content = "Hello World!";
        const expected = {
            type: ADD_TODO,
            todo: {
                id: 1,
                content,
                active: true
            }
        };

        expect(addTodo(content)).toEqual(expected);
    });
    test("Should create toggle action", () => {
        const id = 1;
        const expected = {
            type: TOGGLE_TODO,
            id
        };
        expect(toggleTodo(id)).toEqual(expected);
    });
});
