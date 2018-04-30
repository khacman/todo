import {getTodoListFrom, mapStateToProps} from "../../src/containers/VisibleTodoList";

describe("VisibleTodoListContainer", () => {
    const cases = [
        {
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
        }
    ];

    test("getTodolListFrom", () => {

        cases.forEach(c => {
            expect(getTodoListFrom({todos: c.todos})).toEqual(c.expected);
        });
    });

    test("mapStateToProps", () => {
        cases.forEach(c => {
            expect(mapStateToProps({ todos: c.todos })).toEqual({todos: c.expected});
        });
    });
});